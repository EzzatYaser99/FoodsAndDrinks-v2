package com.spring.restaurant.util;

import java.util.Random;
import java.util.UUID;

public class UserCode {

    public static String getCode() {

//        String x =  UUID.randomUUID().toString();

        Random random = new Random();
        int code = random.nextInt(900000) + 100000;
        return String.valueOf(code);

    }

}
