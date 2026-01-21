package com.example.currency.service;

import com.example.currency.client.ExchangeRateClient;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * CurrencyService
 *
 * Business logic for currency operations.
 * Designed specifically for the Frankfurter API.
 */
@Service
public class CurrencyService {

    private final ExchangeRateClient exchangeRateClient;

    public CurrencyService(ExchangeRateClient exchangeRateClient) {
        this.exchangeRateClient = exchangeRateClient;
    }

    /**
     * Convert one currency to another using Frankfurter API.
     */
    public Map<String, Object> convert(String from, String to, double amount) {

        JsonNode response = exchangeRateClient.convert(from, to, amount);

        JsonNode ratesNode = response.get("rates");

        if (ratesNode == null || ratesNode.get(to) == null) {
            throw new RuntimeException("Invalid response from currency API");
        }

        double convertedAmount = ratesNode.get(to).asDouble();
        double rate = convertedAmount / amount;

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("from", from);
        result.put("to", to);
        result.put("amount", amount);
        result.put("convertedAmount", convertedAmount);
        result.put("rate", rate);
        result.put("date", response.get("date").asText());

        return result;
    }

    /**
     * Get exchange rate history based on time range.
     *
     * Supported ranges:
     * - 5D
     * - 1M
     * - 6M
     * - YTD
     */
    public Map<String, Double> getHistory(
            String base,
            String target,
            String range
    ) {

        LocalDate endDate = LocalDate.now();
        LocalDate startDate;

        switch (range) {
            case "5D":
                startDate = endDate.minusDays(5);
                break;
            case "6M":
                startDate = endDate.minusMonths(6);
                break;
            case "YTD":
                startDate = LocalDate.of(endDate.getYear(), 1, 1);
                break;
            case "1M":
            default:
                startDate = endDate.minusMonths(1);
        }

        JsonNode response = exchangeRateClient.getHistory(
                base,
                target,
                startDate,
                endDate
        );

        JsonNode ratesNode = response.get("rates");
        if (ratesNode == null) {
            throw new RuntimeException("Invalid history response from currency API");
        }

        Map<String, Double> history = new LinkedHashMap<>();

        Iterator<String> dates = ratesNode.fieldNames();
        while (dates.hasNext()) {
            String date = dates.next();
            JsonNode rateNode = ratesNode.get(date).get(target);

            if (rateNode != null) {
                history.put(date, rateNode.asDouble());
            }
        }

        return history;
    }

    /**
     * Get supported currencies.
     *
     * Frankfurter returns:
     * {
     *   "USD": "United States Dollar",
     *   "EUR": "Euro"
     * }
     */
    public Map<String, String> getCurrencies() {

        JsonNode response = exchangeRateClient.getSymbols();

        Map<String, String> currencies = new LinkedHashMap<>();

        response.fields().forEachRemaining(entry -> {
            currencies.put(entry.getKey(), entry.getValue().asText());
        });

        return currencies;
    }
}
