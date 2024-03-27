package com.spring.restaurant.demo.service;


import com.spring.restaurant.demo.dto.Mail;

public interface EmailService {

    void sendCodeByMail(Mail mail);
}
