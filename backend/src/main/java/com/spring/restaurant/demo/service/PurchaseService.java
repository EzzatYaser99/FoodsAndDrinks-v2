package com.spring.restaurant.demo.service;

import com.spring.restaurant.demo.dto.PurchaseRequest;
import com.spring.restaurant.demo.dto.PurchaseResponse;

public interface PurchaseService {
    PurchaseResponse addRequestOrder(PurchaseRequest purchaseReq);
}
