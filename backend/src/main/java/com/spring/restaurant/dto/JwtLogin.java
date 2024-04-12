package com.spring.restaurant.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtLogin {

    private String name;
    private String email;
    private String mobilePhone;
    private String gender;
    private String password;
    private Boolean acceptPolicy;

}
