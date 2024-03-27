package com.spring.restaurant.demo.service;
import com.spring.restaurant.demo.dto.UserPrincipal;
import com.spring.restaurant.demo.model.User;
import com.spring.restaurant.demo.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService implements UserDetailsService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        System.out.println(user.getEmail() + "        " + user.getPassword());
        UserPrincipal userPrincipal = new UserPrincipal(user);
        return userPrincipal;
    }

    @Transactional
    public void addUser(User user) {
        userRepository.save(user);
    }

    public boolean ifEmailIsExist(String email) {
        return userRepository.existsByEmail(email);
    }

    @Transactional
    public int getUserActiveValue(String email) {
        return userRepository.getActive(email);
    }

    @Transactional
    public String getPasswordByEmail(String email) {
        return userRepository.getPasswordByEmail(email);
    }

    public User getUserByEmail(String email) {
        return this.userRepository.findByEmail(email);
    }


    public void updateUser(User user) {
        this.userRepository.save(user);
    }
}

