package com.spring.restaurant.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Data // generte getter setter
@NoArgsConstructor
@Entity
@Table(name = "category")
public class Category extends PublicData {

    @Column(name = "logo")
    private String logo;
    @Column(name = "image")
    private String image;
    @Column(name = "description")
    private String description;
    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private Set<Order> orders;

}
