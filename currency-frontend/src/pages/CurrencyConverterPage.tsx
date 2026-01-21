/**
 * CurrencyConverterPage.tsx
 *
 * Dashboard-style currency converter
 * - Fully localized (i18n)
 * - Conversion + swap
 * - Time range selector (5D / 1M / 6M / YTD)
 * - Exchange rate chart
 * - Conversion history table
 */

import { useEffect, useState } from "react";
import {
    convertCurrency,
    fetchCurrencies,
    fetchRateHistory,
} from "../api/currencyApi";
import type { ConversionResult, CurrencyMap } from "../types/CurrencyTypes";
import ExchangeRateChart from "../components/ExchangeRateChart";
import { useTranslate } from "../i18n/useTranslate";
import "../styles/converter.css";

/* ---------------- TYPES ---------------- */

type TimeRange = "5D" | "1M" | "6M" | "YTD";

type HistoryRow = {
    time: string;
    from: string;
    to: string;
    amount: number;
    converted: number;
};

/* ---------------- COMPONENT ---------------- */

function CurrencyConverterPage() {
    const { t } = useTranslate();

    /* ---------- STATE ---------- */
    const [currencies, setCurrencies] = useState<CurrencyMap>({});
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");

    const [result, setResult] = useState<ConversionResult | null>(null);
    const [history, setHistory] = useState<Record<string, number>>({});
    const [range, setRange] = useState<TimeRange>("1M");

    const [conversionHistory, setConversionHistory] = useState<HistoryRow[]>(
        []
    );

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    /* ---------- LOAD CURRENCIES ---------- */
    useEffect(() => {
        fetchCurrencies()
            .then(setCurrencies)
            .catch(() => setError(t("errors.loadCurrencies")));
    }, [t]);

    /* ---------- LOAD RATE HISTORY ON RANGE CHANGE ---------- */
    useEffect(() => {
        if (!result) return;

        fetchRateHistory(fromCurrency, toCurrency, range)
            .then(setHistory)
            .catch(() => {});
    }, [range, fromCurrency, toCurrency, result]);

    /* ---------- SWAP ---------- */
    async function handleSwap() {
        const f = toCurrency;
        const tCur = fromCurrency;

        setFromCurrency(f);
        setToCurrency(tCur);
        setResult(null);
        setHistory({});
        setError(null);

        if (amount > 0) {
            await handleConvert(f, tCur);
        }
    }

    /* ---------- CONVERT ---------- */
    async function handleConvert(from = fromCurrency, to = toCurrency) {
        if (amount <= 0) {
            setError(t("errors.invalidAmount"));
            return;
        }

        if (from === to) {
            setError(t("errors.sameCurrency"));
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const conversion = await convertCurrency(from, to, amount);
            setResult(conversion);

            setConversionHistory((prev) => [
                {
                    time: new Date().toLocaleString(),
                    from,
                    to,
                    amount,
                    converted: conversion.convertedAmount,
                },
                ...prev,
            ]);

            const historyData = await fetchRateHistory(from, to, range);
            setHistory(historyData);
        } catch {
            setError(t("errors.conversionFailed"));
        } finally {
            setLoading(false);
        }
    }

    /* ---------- RENDER ---------- */
    return (
        <>
            {/* ================= TOP DASHBOARD ================= */}
            <div className="dashboard-wrapper">
                {/* -------- LEFT PANEL -------- */}
                <div className="card converter-panel">
                    <h2 className="card-title">
                        {t("title.currencyConverter")}
                    </h2>

                    <div className="form-group">
                        <label>{t("labels.amount")}</label>
                        <div className="input-row">
                            <input
                                type="number"
                                min="0"
                                value={amount}
                                onChange={(e) =>
                                    setAmount(Number(e.target.value))
                                }
                            />
                            <select
                                value={fromCurrency}
                                onChange={(e) =>
                                    setFromCurrency(e.target.value)
                                }
                            >
                                {Object.entries(currencies).map(
                                    ([code, name]) => (
                                        <option key={code} value={code}>
                                            {code} — {name}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                    </div>

                    <button
                        className="swap-circle"
                        onClick={handleSwap}
                        title={t("actions.swap")}
                    >
                        ↔
                    </button>

                    <div className="form-group">
                        <label>{t("labels.convertedAmount")}</label>
                        <div className="input-row">
                            <input
                                readOnly
                                value={
                                    result
                                        ? result.convertedAmount.toFixed(2)
                                        : ""
                                }
                            />
                            <select
                                value={toCurrency}
                                onChange={(e) =>
                                    setToCurrency(e.target.value)
                                }
                            >
                                {Object.entries(currencies).map(
                                    ([code, name]) => (
                                        <option key={code} value={code}>
                                            {code} — {name}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                    </div>

                    {result && (
                        <div className="timestamp-box">
                            <strong>
                                {result.amount} {result.from} ={" "}
                                {result.convertedAmount.toFixed(2)}{" "}
                                {result.to}
                            </strong>
                            <p>
                                {t("labels.rate")}:{" "}
                                {result.rate.toFixed(4)}
                            </p>
                            <p>
                                {t("labels.date")}: {result.date}
                            </p>
                        </div>
                    )}

                    {error && <p className="error-text">{error}</p>}

                    <button
                        className="primary-button"
                        onClick={() => handleConvert()}
                        disabled={loading}
                    >
                        {loading
                            ? t("actions.converting")
                            : t("actions.convert")}
                    </button>
                </div>

                {/* -------- RIGHT PANEL -------- */}
                <div className="card chart-panel">
                    <div className="chart-header">
                        <h2 className="card-title">
                            {t("labels.trendTitle")}{" "}
                            <span className="muted">
                                {fromCurrency} → {toCurrency}
                            </span>
                        </h2>

                        <div className="range-selector">
                            {(["5D", "1M", "6M", "YTD"] as TimeRange[]).map(
                                (r) => (
                                    <button
                                        key={r}
                                        className={range === r ? "active" : ""}
                                        onClick={() => setRange(r)}
                                    >
                                        {r}
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    {Object.keys(history).length > 0 ? (
                        <ExchangeRateChart
                            base={fromCurrency}
                            target={toCurrency}
                            history={history}
                        />
                    ) : (
                        <p className="muted">{t("labels.noData")}</p>
                    )}
                </div>
            </div>

            {/* ================= HISTORY TABLE ================= */}
            {conversionHistory.length > 0 && (
                <div className="card history-panel">
                    <h2 className="card-title">
                        {t("labels.conversionHistory")}
                    </h2>

                    <table className="history-table">
                        <thead>
                        <tr>
                            <th>{t("labels.time")}</th>
                            <th>{t("labels.fromTo")}</th>
                            <th>{t("labels.amount")}</th>
                            <th>{t("labels.convertedAmount")}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {conversionHistory.map((row, idx) => (
                            <tr key={idx}>
                                <td>{row.time}</td>
                                <td>
                                    {row.from} → {row.to}
                                </td>
                                <td>{row.amount}</td>
                                <td>{row.converted.toFixed(2)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default CurrencyConverterPage;
