package com.example.currency.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * HealthController
 *
 * This controller exists to:
 * 1. Prove the backend is running
 * 2. Prove REST endpoints work
 * 3. Provide a simple health-check API
 *
 * URL: http://localhost:8081/api/health
 */
@RestController
public class HealthController {

    /**
     * Health check endpoint
     *
     * @return JSON indicating application status
     */
    @GetMapping("/api/health")
    public Map<String, String> health() {

        Map<String, String> response = new HashMap<>();
        response.put("status", "UP");
        response.put("message", "Currency backend is running");

        return response;
    }
}
