package com.spring.restaurant.demo.service;

import com.spring.restaurant.demo.model.Order;
import com.spring.restaurant.demo.repo.OrderRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {

        this.orderRepository = orderRepository;
    }

    public List<Order> getOrders() {
        return orderRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    public List<Order> getOrdersByCategoryName(String key) {
        return this.orderRepository.findByCategoryName(key);
    }

    public List<Order> getOrderByKey(String key) {

        return this.orderRepository.findByNameContaining(key);
    }

    public Order getOrder(Long id) {

        return this.orderRepository.findById(id).get();
    }

    public Long getAllOrdersSize() {
        return orderRepository.count();
    }


    public long getOrdersByCategoryIdLength(Long id) {
        return orderRepository.getOrderLengthByCategoryId(id);

    }

    public long getOrderSizeByKey(String key) {
        return orderRepository.getOrderSizeByKey(key);

    }


}

