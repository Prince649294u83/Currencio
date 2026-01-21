/**
 * currencyApi.ts
 *
 * Centralized API layer for:
 * - Currency list
 * - Currency conversion
 * - Exchange rate history (with time ranges)
 */

import type {
    ConversionResult,
    CurrencyMap,
} from "../types/CurrencyTypes";

/* ===============================
   API CONFIG
   =============================== */

const API_BASE_URL = "http://localhost:8081/api";

/* ===============================
   FETCH CURRENCIES
   =============================== */

export async function fetchCurrencies(): Promise<CurrencyMap> {
    const res = await fetch(`${API_BASE_URL}/currencies`);

    if (!res.ok) {
        throw new Error("Failed to fetch currencies");
    }

    return res.json();
}

/* ===============================
   CONVERT CURRENCY
   =============================== */

export async function convertCurrency(
    from: string,
    to: string,
    amount: number
): Promise<ConversionResult> {
    const url = new URL(`${API_BASE_URL}/convert`);
    url.searchParams.set("from", from);
    url.searchParams.set("to", to);
    url.searchParams.set("amount", amount.toString());

    const res = await fetch(url.toString());

    if (!res.ok) {
        throw new Error("Conversion failed");
    }

    return res.json();
}

/* ===============================
   FETCH RATE HISTORY
   =============================== */

/**
 * Fetch exchange rate history.
 *
 * @param base   Base currency (USD)
 * @param target Target currency (EUR)
 * @param range  Time range: 5D | 1M | 6M | YTD (default: 1M)
 */
export async function fetchRateHistory(
    base: string,
    target: string,
    range: "5D" | "1M" | "6M" | "YTD" = "1M"
): Promise<Record<string, number>> {
    const url = new URL(`${API_BASE_URL}/rates/history`);
    url.searchParams.set("base", base);
    url.searchParams.set("target", target);
    url.searchParams.set("range", range);

    const res = await fetch(url.toString());

    if (!res.ok) {
        throw new Error("Failed to fetch rate history");
    }

    return res.json();
}
