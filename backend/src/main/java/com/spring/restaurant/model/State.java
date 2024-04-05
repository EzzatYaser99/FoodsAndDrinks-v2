package com.spring.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;


@Entity
@Table(name = "states")
public class State extends BaseEntity {
    @Column(name = "name")
    private String name;
}
