package com.spring.restaurant.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user_code")
public class Code extends BaseEntity {


    @Column(name = "code")
    private String code;

    @OneToOne(mappedBy = "code")
    private User user;

}
