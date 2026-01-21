package com.example.currency.client;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;

/**
 * ExchangeRateClient
 *
 * Frankfurter API client (ECB-backed)
 * - Correct date-range handling
 * - Stable response parsing
 */
@Component
public class ExchangeRateClient {

    private static final String BASE_URL = "https://api.frankfurter.app";

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    public ExchangeRateClient() {
        this.restTemplate = new RestTemplate();
        this.objectMapper = new ObjectMapper();
    }

    /**
     * Convert currency
     */
    public JsonNode convert(String from, String to, double amount) {
        String url = BASE_URL +
                "/latest?from=" + from +
                "&to=" + to +
                "&amount=" + amount;

        return callApi(url);
    }

    /**
     * Fetch historical exchange rates for a given date range
     *
     * IMPORTANT:
     * - Uses inclusive date range
     * - Frankfurter returns business days only
     */
    public JsonNode getHistory(
            String base,
            String target,
            LocalDate start,
            LocalDate end
    ) {
        // Ensure valid chronological order
        if (start.isAfter(end)) {
            throw new IllegalArgumentException("Start date cannot be after end date");
        }

        String url = BASE_URL +
                "/" + start.toString() +
                ".." + end.toString() +
                "?from=" + base +
                "&to=" + target;

        return callApi(url);
    }

    /**
     * Fetch supported currencies
     */
    public JsonNode getSymbols() {
        String url = BASE_URL + "/currencies";
        return callApi(url);
    }

    /**
     * Internal API call handler
     */
    private JsonNode callApi(String url) {
        try {
            String response = restTemplate.getForObject(url, String.class);
            return objectMapper.readTree(response);
        } catch (Exception e) {
            throw new RuntimeException("Failed to call Frankfurter API: " + url, e);
        }
    }
}
