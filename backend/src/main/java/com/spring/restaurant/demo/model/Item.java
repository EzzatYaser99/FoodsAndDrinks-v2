package com.spring.restaurant.demo.model;

//import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "item")

public class Item extends BaseEntity {
    @Column(name = "image")
    private String image;

    @Column(name = "quantity")
    private int quantity;
    @Column(name = "price")
    private int price;


    @ManyToOne
    @JoinColumn(name = "request_order_id")
    private RequestOrder requestOrder;
}
