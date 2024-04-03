package com.spring.restaurant.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data // generte getter setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order extends PublicData {
    @Column(name = "price")
    private int price;

    @Column(name = "image")
    private String image;


    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "id_category")
    private Category category;

}
