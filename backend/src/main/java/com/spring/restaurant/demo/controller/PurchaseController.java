package com.spring.restaurant.demo.controller;


import com.spring.restaurant.demo.dto.PurchaseRequest;
import com.spring.restaurant.demo.dto.PurchaseResponse;
import com.spring.restaurant.demo.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/buy")
@CrossOrigin
public class PurchaseController {


    private PurchaseService purchaseService;

    @Autowired
    public PurchaseController(PurchaseService purchaseService) {
        this.purchaseService = purchaseService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse addRequestOrder(@RequestBody PurchaseRequest purchaseReq) {
        return purchaseService.addRequestOrder(purchaseReq);

    }
}
