package com.spring.restaurant.demo.controller;

import com.spring.restaurant.demo.dto.*;
import com.spring.restaurant.demo.model.Code;
import com.spring.restaurant.demo.model.User;
import com.spring.restaurant.demo.service.AuthoritiesService;
import com.spring.restaurant.demo.service.EmailService;
import com.spring.restaurant.demo.service.TokenService;
import com.spring.restaurant.demo.service.UserService;
import com.spring.restaurant.demo.util.UserCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

// http://localhost:9090/
@RestController
@CrossOrigin()
@RequestMapping("/api")

public class UserController {
    private TokenService tokenService;
    private UserService userService;
    private PasswordEncoder passwordEncoder;
    private AuthoritiesService authoritiesService;
    private EmailService emailService;


    @Autowired
    public UserController(TokenService tokenService, UserService userService,
                          PasswordEncoder passwordEncoder, AuthoritiesService authoritiesService,
                          EmailService emailService) {
        this.tokenService = tokenService;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.authoritiesService = authoritiesService;
        this.emailService = emailService;
    }


    // http://localhost:9090/api/signin
    @PostMapping("/signin")
    public LoginResponse logIn(@RequestBody JwtLogin jwtLogin) {
        return tokenService.login(jwtLogin);
    }


    // http://localhost:9090/api/signup
    @PostMapping("/signup")
    public AccountResponse createUser(@RequestBody JwtLogin jwtLogin) {
        AccountResponse accountResponse = new AccountResponse();
        boolean result = userService.ifEmailIsExist(jwtLogin.getEmail());
        if (result) {
            accountResponse.setResult(0);

        } else {
            String myCode = UserCode.getCode();
            User user = new User();
            user.setEmail(jwtLogin.getEmail());
            user.setPassword(passwordEncoder.encode(jwtLogin.getPassword()));
            user.setActive(0);
            user.getAuthorities().add(authoritiesService.getAuthorities().get(0));
            Mail mail = new Mail(jwtLogin.getEmail(), myCode);
            emailService.sendCodeByMail(mail);
            Code code = new Code();
            code.setCode(myCode);
            user.setCode(code);
            userService.addUser(user);
            accountResponse.setResult(1);
        }
        return accountResponse;
    }

    // http://localhost:9090/api/active
    @PostMapping("/active")
    public UserActive getActiveUser(@RequestBody JwtLogin jwtLogin) {
        String encryptedPassword = userService.getPasswordByEmail(jwtLogin.getEmail()); // from Db
        System.out.println(encryptedPassword);
        boolean result = passwordEncoder.matches(jwtLogin.getPassword(), encryptedPassword);
        UserActive userActive = new UserActive();
        if (result) {
            int active = userService.getUserActiveValue(jwtLogin.getEmail());
            if(active == 0){
                String code = UserCode.getCode();
                Mail mail = new Mail(jwtLogin.getEmail(),code);
                emailService.sendCodeByMail(mail);
                User user = userService.getUserByEmail(jwtLogin.getEmail());
                user.getCode().setCode(code);
                userService.updateUser(user);
            }
            userActive.setActive(active);
        } else {
            userActive.setActive(-1);
        }
        return userActive;
    }

    // http://localhost:9090/api/activated
    @PostMapping("/activated")
    public AccountResponse activeAccount(@RequestBody ActiveAccount activeAccount) {
        User user = userService.getUserByEmail(activeAccount.getEmail());
        AccountResponse accountResponse = new AccountResponse();
        if (user.getCode().getCode().equals(activeAccount.getCode())) {
            user.setActive(1);
            userService.updateUser(user);
            accountResponse.setResult(1);
        } else {
            accountResponse.setResult(0);
        }
        return accountResponse;
    }

    // http://localhost:9090/api/checkEmail
    @PostMapping("/checkEmail")
    public AccountResponse checkUserAndUpdateCode(@RequestBody AccountOperation accountOperation) {
        User user = this.userService.getUserByEmail(accountOperation.getEmail());
        AccountResponse accountResponse = new AccountResponse();
        if (user != null) {
            String code = UserCode.getCode();
            Mail mail = new Mail(accountOperation.getEmail(), code);
            emailService.sendCodeByMail(mail);
            user.getCode().setCode(code);
            this.userService.updateUser(user);
            accountResponse.setResult(1);

        } else {
            accountResponse.setResult(0);
        }
        return accountResponse;
    }

    // http://localhost:9090/api/resetPassword
    @PostMapping("/resetPassword")
    public AccountResponse resetPassword(@RequestBody ConfirmNewPassword newPassword){
        User user = this.userService.getUserByEmail(newPassword.getEmail());
        AccountResponse accountResponse = new AccountResponse();
        if(user != null){
            if(user.getCode().getCode().equals(newPassword.getCode())){
                user.setPassword(passwordEncoder.encode(newPassword.getPassword()));
                userService.addUser(user);
                accountResponse.setResult(1);
            } else {
                accountResponse.setResult(0);
            }
        } else {
            accountResponse.setResult(0);
        }
        return accountResponse;
    }



}
