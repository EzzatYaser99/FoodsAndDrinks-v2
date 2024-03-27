package com.spring.restaurant.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ConfirmNewPassword {

    private String email;
    private String code;
    private String password;
}
