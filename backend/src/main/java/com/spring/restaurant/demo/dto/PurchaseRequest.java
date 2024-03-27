package com.spring.restaurant.demo.dto;

import com.spring.restaurant.demo.model.RequestOrder;
import com.spring.restaurant.demo.model.Address;
import com.spring.restaurant.demo.model.Client;
import com.spring.restaurant.demo.model.Item;
import lombok.Data;

import java.util.List;

@Data
public class PurchaseRequest {
    private Client client;
    private RequestOrder requestOrder;
    private List<Item> items;
    private Address fromAddress;
    private Address toAddress;

}
