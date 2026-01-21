/**
 * CurrencyTypes.ts
 *
 * Central TypeScript type definitions for the Currency Converter frontend.
 * These types mirror the backend API responses exactly,
 * plus frontend-only metadata types.
 */

/* ===============================
   BACKEND RESPONSE TYPES
   =============================== */

/**
 * Result returned by GET /api/convert
 */
export interface ConversionResult {
    from: string;
    to: string;
    amount: number;
    convertedAmount: number;
    rate: number;
    date: string; // ISO date string (YYYY-MM-DD)
}

/**
 * Result returned by GET /api/currencies
 *
 * Example:
 * {
 *   "USD": "United States Dollar",
 *   "EUR": "Euro"
 * }
 */
export type CurrencyMap = Record<string, string>;

/**
 * Result returned by GET /api/rates/history
 *
 * Example:
 * {
 *   "2026-01-01": 0.91,
 *   "2026-01-02": 0.92
 * }
 */
export type RateHistory = Record<string, number>;

/* ===============================
   FRONTEND METADATA TYPES
   =============================== */

/**
 * Describes detailed information about a currency.
 * This is frontend-only data (not from backend API).
 */
export interface CurrencyInfo {
    code: string;          // USD
    name: string;          // United States Dollar
    symbol: string;        // $
    region: string;        // United States
    description: string;  // Short explanation
}

/**
 * Map of currency code → currency information
 */
export type CurrencyInfoMap = Record<string, CurrencyInfo>;
