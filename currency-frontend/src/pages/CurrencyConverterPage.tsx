/**
 * CurrencyConverterPage.tsx
 *
 * Dashboard-style currency converter
 * - Fully localized (i18n)
 * - Conversion + swap
 * - Time range selector (5D / 1M / 6M / YTD)
 * - Exchange rate chart
 * - Conversion history table
 * - Currency information cards (FROM + TO)
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
import { currencyInfo } from "../data/currencyInfo";
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

    const [conversionHistory, setConversionHistory] = useState<HistoryRow[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    /* ---------- LOAD CURRENCIES ---------- */
    useEffect(() => {
        fetchCurrencies()
            .then(setCurrencies)
            .catch(() => setError(t("errors.loadCurrencies")));
    }, [t]);

    /* ---------- LOAD RATE HISTORY (RANGE-AWARE) ---------- */
    useEffect(() => {
        fetchRateHistory(fromCurrency, toCurrency, range)
            .then(setHistory)
            .catch(() => {});
    }, [fromCurrency, toCurrency, range]);

    /* ---------- SWAP ---------- */
    function handleSwap() {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setResult(null);
        setError(null);
    }

    /* ---------- CONVERT ---------- */
    async function handleConvert() {
        if (amount <= 0) {
            setError(t("errors.invalidAmount"));
            return;
        }

        if (fromCurrency === toCurrency) {
            setError(t("errors.sameCurrency"));
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const conversion = await convertCurrency(
                fromCurrency,
                toCurrency,
                amount
            );
            setResult(conversion);

            setConversionHistory((prev) => [
                {
                    time: new Date().toLocaleString(),
                    from: fromCurrency,
                    to: toCurrency,
                    amount,
                    converted: conversion.convertedAmount,
                },
                ...prev,
            ]);
        } catch {
            setError(t("errors.conversionFailed"));
        } finally {
            setLoading(false);
        }
    }

    /* ---------- METADATA ---------- */
    const fromInfo = currencyInfo[fromCurrency];
    const toInfo = currencyInfo[toCurrency];

    /* ---------- RENDER ---------- */
    return (
        <>
            {/* ================= DASHBOARD ================= */}
            <div className="dashboard-wrapper">
                {/* LEFT PANEL */}
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
                        onClick={handleConvert}
                        disabled={loading}
                    >
                        {loading
                            ? t("actions.converting")
                            : t("actions.convert")}
                    </button>
                </div>

                {/* RIGHT PANEL */}
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

                    <ExchangeRateChart
                        base={fromCurrency}
                        target={toCurrency}
                        history={history}
                        range={range}
                    />
                </div>
            </div>

            {/* ================= CURRENCY INFO ================= */}
            <div className="currency-info-grid">
                {fromInfo && (
                    <div className="currency-info-card">
                        <div className="currency-info-header">
                            <span className="currency-info-symbol">
                                {fromInfo.symbol}
                            </span>
                            <span className="currency-info-title">
                                {fromInfo.name} ({fromInfo.code})
                            </span>
                        </div>
                        <div className="currency-info-region">
                            {fromInfo.region}
                        </div>
                        <p className="currency-info-description">
                            {fromInfo.description}
                        </p>
                    </div>
                )}

                {toInfo && (
                    <div className="currency-info-card">
                        <div className="currency-info-header">
                            <span className="currency-info-symbol">
                                {toInfo.symbol}
                            </span>
                            <span className="currency-info-title">
                                {toInfo.name} ({toInfo.code})
                            </span>
                        </div>
                        <div className="currency-info-region">
                            {toInfo.region}
                        </div>
                        <p className="currency-info-description">
                            {toInfo.description}
                        </p>
                    </div>
                )}
            </div>

            {/* ================= CONVERSION HISTORY ================= */}
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
                                <td>
                                    {row.converted.toFixed(2)}
                                </td>
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
