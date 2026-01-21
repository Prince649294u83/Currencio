/**
 * currencyInfo.ts
 *
 * Canonical metadata for ALL currencies supported
 * by the Frankfurter (ECB) API.
 *
 * Frontend-only, manually curated metadata.
 */

import type { CurrencyInfoMap } from "../types/CurrencyTypes";

export const currencyInfo: CurrencyInfoMap = {
    EUR: {
        code: "EUR",
        name: "Euro",
        symbol: "€",
        region: "European Union",
        description:
            "The Euro is the official currency of the eurozone and is used by multiple European Union member states. Introduced in 1999, it was created to promote economic integration, price transparency, and financial stability across Europe. The Euro is managed by the European Central Bank and is the second most held reserve currency globally, playing a major role in international trade, finance, and investment.",
    },

    USD: {
        code: "USD",
        name: "United States Dollar",
        symbol: "$",
        region: "United States",
        description:
            "The United States Dollar is the world’s primary reserve and settlement currency. Issued by the Federal Reserve, it is the dominant currency in global trade, commodities pricing, international debt, and foreign exchange markets. Due to the size of the US economy and trust in its financial institutions, the USD is widely regarded as the global benchmark currency.",
    },

    GBP: {
        code: "GBP",
        name: "British Pound Sterling",
        symbol: "£",
        region: "United Kingdom",
        description:
            "The British Pound Sterling is one of the oldest currencies still in use, with origins dating back over a thousand years. Issued by the Bank of England, it remains a major reserve currency and reflects the UK’s long-standing role in global banking, finance, and international trade.",
    },

    INR: {
        code: "INR",
        name: "Indian Rupee",
        symbol: "₹",
        region: "India",
        description:
            "The Indian Rupee is the official currency of India and is regulated by the Reserve Bank of India. It supports one of the world’s largest and fastest-growing economies, driven by services, manufacturing, and technology. The Rupee plays a critical role in domestic commerce and is increasingly important in international remittances and regional trade.",
    },

    JPY: {
        code: "JPY",
        name: "Japanese Yen",
        symbol: "¥",
        region: "Japan",
        description:
            "The Japanese Yen is a major international reserve currency and one of the most traded currencies in the world. Managed by the Bank of Japan, it is known for low interest rates and is frequently used in global carry trades. The Yen reflects Japan’s strong industrial base and export-driven economy.",
    },

    AUD: {
        code: "AUD",
        name: "Australian Dollar",
        symbol: "A$",
        region: "Australia",
        description:
            "The Australian Dollar is a commodity-linked currency influenced by global demand for minerals, metals, and raw materials. Issued by the Reserve Bank of Australia, it is widely traded in international markets and reflects Australia’s strong ties to Asia-Pacific trade.",
    },

    CAD: {
        code: "CAD",
        name: "Canadian Dollar",
        symbol: "C$",
        region: "Canada",
        description:
            "The Canadian Dollar, often called the Loonie, is closely tied to commodity prices, particularly oil and natural resources. Issued by the Bank of Canada, it plays a major role in North American trade and is considered a stable, advanced-economy currency.",
    },

    CHF: {
        code: "CHF",
        name: "Swiss Franc",
        symbol: "CHF",
        region: "Switzerland",
        description:
            "The Swiss Franc is widely regarded as a safe-haven currency due to Switzerland’s political neutrality, strong financial system, and prudent monetary policy. Issued by the Swiss National Bank, it is often sought during periods of global economic uncertainty.",
    },

    CNY: {
        code: "CNY",
        name: "Chinese Yuan (Renminbi)",
        symbol: "¥",
        region: "China",
        description:
            "The Chinese Yuan, also known as the Renminbi, is the official currency of China. Managed by the People’s Bank of China, it is increasingly used in international trade and finance as China expands its global economic influence, though it remains partially controlled by the state.",
    },

    HKD: {
        code: "HKD",
        name: "Hong Kong Dollar",
        symbol: "HK$",
        region: "Hong Kong",
        description:
            "The Hong Kong Dollar operates under a linked exchange rate system and is pegged to the US Dollar. This system provides monetary stability and supports Hong Kong’s role as a major international financial and trading hub.",
    },

    SGD: {
        code: "SGD",
        name: "Singapore Dollar",
        symbol: "S$",
        region: "Singapore",
        description:
            "The Singapore Dollar is known for its strong stability and disciplined monetary policy. Managed by the Monetary Authority of Singapore, it reflects the country’s position as a global center for finance, trade, and logistics in Southeast Asia.",
    },

    NZD: {
        code: "NZD",
        name: "New Zealand Dollar",
        symbol: "NZ$",
        region: "New Zealand",
        description:
            "The New Zealand Dollar is a commodity currency influenced by agricultural exports such as dairy and meat. Issued by the Reserve Bank of New Zealand, it is actively traded and sensitive to global risk sentiment.",
    },

    SEK: {
        code: "SEK",
        name: "Swedish Krona",
        symbol: "kr",
        region: "Sweden",
        description:
            "The Swedish Krona is the official currency of Sweden and operates under a free-floating exchange rate. It reflects Sweden’s advanced economy, strong innovation sector, and export-oriented industries.",
    },

    NOK: {
        code: "NOK",
        name: "Norwegian Krone",
        symbol: "kr",
        region: "Norway",
        description:
            "The Norwegian Krone is heavily influenced by oil and gas exports. Norway’s strong fiscal position and sovereign wealth fund contribute to the currency’s resilience and long-term stability.",
    },

    DKK: {
        code: "DKK",
        name: "Danish Krone",
        symbol: "kr",
        region: "Denmark",
        description:
            "The Danish Krone is tightly pegged to the Euro through the ERM II framework. Issued by Danmarks Nationalbank, it provides exchange rate stability while allowing Denmark to retain monetary independence.",
    },

    PLN: {
        code: "PLN",
        name: "Polish Złoty",
        symbol: "zł",
        region: "Poland",
        description:
            "The Polish Złoty is the national currency of Poland and one of the most actively traded currencies in Central and Eastern Europe. It reflects Poland’s growing economy and integration with European markets.",
    },

    CZK: {
        code: "CZK",
        name: "Czech Koruna",
        symbol: "Kč",
        region: "Czech Republic",
        description:
            "The Czech Koruna is issued by the Czech National Bank and is known for relative stability. It supports a strong industrial economy with significant export activity, particularly within Europe.",
    },

    HUF: {
        code: "HUF",
        name: "Hungarian Forint",
        symbol: "Ft",
        region: "Hungary",
        description:
            "The Hungarian Forint is Hungary’s official currency and plays a central role in domestic economic activity. Its value is influenced by monetary policy, inflation trends, and regional economic conditions.",
    },

    RON: {
        code: "RON",
        name: "Romanian Leu",
        symbol: "lei",
        region: "Romania",
        description:
            "The Romanian Leu is the official currency of Romania and reflects the country’s developing economy. It is influenced by domestic growth, foreign investment, and European trade relations.",
    },

    BGN: {
        code: "BGN",
        name: "Bulgarian Lev",
        symbol: "лв",
        region: "Bulgaria",
        description:
            "The Bulgarian Lev operates under a currency board system and is pegged to the Euro. This arrangement ensures monetary stability and supports Bulgaria’s economic alignment with the European Union.",
    },

    ISK: {
        code: "ISK",
        name: "Icelandic Króna",
        symbol: "kr",
        region: "Iceland",
        description:
            "The Icelandic Króna is the official currency of Iceland and is influenced by tourism, fishing, and renewable energy. It is relatively small and less liquid compared to major global currencies.",
    },

    ILS: {
        code: "ILS",
        name: "Israeli New Shekel",
        symbol: "₪",
        region: "Israel",
        description:
            "The Israeli New Shekel is issued by the Bank of Israel and reflects a technologically advanced, innovation-driven economy. It is widely used in domestic trade and increasingly recognized in international markets.",
    },

    TRY: {
        code: "TRY",
        name: "Turkish Lira",
        symbol: "₺",
        region: "Turkey",
        description:
            "The Turkish Lira is Turkey’s official currency and is considered an emerging market currency. Its value is influenced by domestic economic policy, inflation levels, and geopolitical factors.",
    },

    MXN: {
        code: "MXN",
        name: "Mexican Peso",
        symbol: "$",
        region: "Mexico",
        description:
            "The Mexican Peso is the most traded currency in Latin America. Issued by the Bank of Mexico, it plays a key role in international trade, especially due to Mexico’s strong economic ties with the United States.",
    },

    BRL: {
        code: "BRL",
        name: "Brazilian Real",
        symbol: "R$",
        region: "Brazil",
        description:
            "The Brazilian Real is the official currency of Brazil and reflects the largest economy in Latin America. It is influenced by commodity exports, fiscal policy, and global investor sentiment.",
    },

    ZAR: {
        code: "ZAR",
        name: "South African Rand",
        symbol: "R",
        region: "South Africa",
        description:
            "The South African Rand is the most actively traded currency in Africa. It reflects South Africa’s resource-based economy and often serves as a proxy for broader emerging market sentiment.",
    },

    THB: {
        code: "THB",
        name: "Thai Baht",
        symbol: "฿",
        region: "Thailand",
        description:
            "The Thai Baht is the official currency of Thailand and plays a major role in tourism-driven revenues and regional trade within Southeast Asia.",
    },

    MYR: {
        code: "MYR",
        name: "Malaysian Ringgit",
        symbol: "RM",
        region: "Malaysia",
        description:
            "The Malaysian Ringgit supports a diversified economy driven by manufacturing, commodities, and exports. It is actively used in regional trade across Southeast Asia.",
    },

    PHP: {
        code: "PHP",
        name: "Philippine Peso",
        symbol: "₱",
        region: "Philippines",
        description:
            "The Philippine Peso is the official currency of the Philippines and is influenced by domestic consumption, overseas remittances, and the services sector.",
    },

    KRW: {
        code: "KRW",
        name: "South Korean Won",
        symbol: "₩",
        region: "South Korea",
        description:
            "The South Korean Won reflects one of the world’s most technologically advanced economies. It is closely linked to global demand for electronics, automobiles, and semiconductors.",
    },

    IDR: {
        code: "IDR",
        name: "Indonesian Rupiah",
        symbol: "Rp",
        region: "Indonesia",
        description:
            "The Indonesian Rupiah is the official currency of Indonesia and reflects Southeast Asia’s largest economy. It is influenced by commodity exports, domestic growth, and regional economic conditions.",
    },
};
