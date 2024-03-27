package com.spring.restaurant.demo.util;

import java.util.UUID;

public class UserCode {

    public static String getCode() {
        return UUID.randomUUID().toString();
    }

}
