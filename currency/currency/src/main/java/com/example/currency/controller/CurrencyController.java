package com.example.currency.controller;

import com.example.currency.service.CurrencyService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * CurrencyController
 *
 * Handles ONLY currency-related endpoints.
 * Health check is handled by HealthController.
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class CurrencyController {

    private final CurrencyService currencyService;

    public CurrencyController(CurrencyService currencyService) {
        this.currencyService = currencyService;
    }

    /**
     * Convert currency
     *
     * Example:
     * /api/convert?from=USD&to=EUR&amount=100
     */
    @GetMapping("/convert")
    public Map<String, Object> convertCurrency(
            @RequestParam String from,
            @RequestParam String to,
            @RequestParam double amount
    ) {
        return currencyService.convert(from, to, amount);
    }

    /**
     * Get supported currencies
     *
     * Example:
     * /api/currencies
     */
    @GetMapping("/currencies")
    public Map<String, String> getCurrencies() {
        return currencyService.getCurrencies();
    }

    /**
     * Get exchange rate history with time range
     *
     * Supported ranges:
     *  - 5D
     *  - 1M (default)
     *  - 6M
     *  - YTD
     *
     * Example:
     * /api/rates/history?base=USD&target=EUR&range=6M
     */
    @GetMapping("/rates/history")
    public Map<String, Double> getRateHistory(
            @RequestParam String base,
            @RequestParam String target,
            @RequestParam(defaultValue = "1M") String range
    ) {
        return currencyService.getHistory(base, target, range);
    }
}
