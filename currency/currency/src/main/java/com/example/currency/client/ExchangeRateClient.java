package com.example.currency.client;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;

/**
 * ExchangeRateClient
 *
 * Uses Frankfurter API (ECB-backed, free, no API key)
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
     * Convert currency using Frankfurter API
     */
    public JsonNode convert(String from, String to, double amount) {
        String url = BASE_URL +
                "/latest?from=" + from +
                "&to=" + to +
                "&amount=" + amount;

        return callApi(url);
    }

    /**
     * Fetch historical exchange rates (1 month)
     */
    public JsonNode getHistory(String base, String target, LocalDate start, LocalDate end) {
        String url = BASE_URL +
                "/" + start +
                ".." + end +
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

    private JsonNode callApi(String url) {
        try {
            String response = restTemplate.getForObject(url, String.class);
            return objectMapper.readTree(response);
        } catch (Exception e) {
            throw new RuntimeException("Failed to call Frankfurter API");
        }
    }
}
