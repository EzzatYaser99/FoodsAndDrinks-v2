package com.spring.restaurant.demo.model;


import lombok.Data;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

@Data
@MappedSuperclass
public class PublicData extends CategoryOrder {

    @Column(name = "name")
    private String name;
}
