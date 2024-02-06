package com.crud.ApiGateway.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GateWayController {
    @Autowired
    private RouteLocator routeLocator;

    @GetMapping("/debug/routes")
    public String debugRoutes() {
        StringBuilder result = new StringBuilder();
        routeLocator.getRoutes().subscribe(route -> result.append(route.toString()).append("\n"));
        return result.toString();
    }
}

