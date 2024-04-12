package com.spring.restaurant.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User extends BaseEntity {

    @Column(name = "name")
    private String name;

    @Column(name = "mobile_phone")
    public String mobilePhone;

    @Column(name = "email")
    private String email;

    @Column(name = "gender")
    public String gender;

    @Column(name = "password")
    private String password;

    @Column(name = "active")
    private int active;

    @Column(name = "accept_Policy")
    private boolean acceptPolicy;


    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_role",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "authorities_id")}
    )
    private Set<Authorities> authorities = new HashSet<>();


    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "code_id")
    private Code code;
}
