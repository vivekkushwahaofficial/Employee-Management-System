package net.javaguides.ems.controller;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    // Home endpoint
    @GetMapping("/")
    public String home() {
        return "Employee Management System Backend is Running 🚀";
    }

    // Health check endpoint
    @GetMapping("/health")
    public Map<String, Object> health() {

        Map<String, Object> response = new HashMap<>();

        response.put("status", "UP"); // App status
        response.put("timestamp", LocalDateTime.now()); // Current time
        response.put("service", "EMS Backend"); // Service name

        return response;
    }
}