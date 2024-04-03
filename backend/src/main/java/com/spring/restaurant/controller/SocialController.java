package com.spring.restaurant.controller;
//import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
//import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
//import com.google.api.client.http.javanet.NetHttpTransport;
//import com.google.api.client.json.jackson2.JacksonFactory;
import com.spring.restaurant.dto.JwtLogin;
import com.spring.restaurant.dto.LoginResponse;
import com.spring.restaurant.dto.TokenDto;
import com.spring.restaurant.model.Authorities;
import com.spring.restaurant.service.AuthoritiesService;
import com.spring.restaurant.service.TokenService;
import com.spring.restaurant.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.impl.FacebookTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;




@RestController
//@CrossOrigin("http://localhost:4200")
@CrossOrigin
@RequestMapping ("/social")

// http://localhost:7070/social
public class SocialController {
    private UserService userService;
    private AuthoritiesService authoritiesService;
    private TokenService tokenService;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public SocialController(UserService userService, AuthoritiesService authoritiesService, TokenService tokenService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.authoritiesService = authoritiesService;
        this.tokenService = tokenService;
        this.passwordEncoder = passwordEncoder;
    }

    //http://localhost:7070/social/facebook
    @PostMapping("/facebook")
    public LoginResponse loginWithFacebook(@RequestBody TokenDto tokenDto) {
        Facebook facebook = new FacebookTemplate(tokenDto.getToken());
        String[] data = {"email", "name", "picture"};
        org.springframework.social.facebook.api.User userFacebook = facebook.fetchObject("me",
                org.springframework.social.facebook.api.User.class, data);
        return login(userFacebook.getEmail());

    }

    private LoginResponse login(String email){
        boolean result = userService.ifEmailIsExist(email); // t   // f
        if(!result){
            com.spring.restaurant.model.User user = new com.spring.restaurant.model.User();
            user.setEmail(email);
            user.setPassword(passwordEncoder.encode("kasdjhfkadhsY776ggTyUU65khaskdjfhYuHAwjñlji"));
            user.setActive(1);
            List<Authorities> authorities = authoritiesService.getAuthorities();
            user.getAuthorities().add(authorities.get(0));
            userService.addUser(user);
        }
        JwtLogin jwtLogin = new JwtLogin();
        jwtLogin.setEmail(email);
        jwtLogin.setPassword("kasdjhfkadhsY776ggTyUU65khaskdjfhYuHAwjñlji");
        return tokenService.login(jwtLogin);
    }


}
