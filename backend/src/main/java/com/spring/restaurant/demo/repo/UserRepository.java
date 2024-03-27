package com.spring.restaurant.demo.repo;


import com.spring.restaurant.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);


    boolean existsByEmail(String email);

    @Query("select active from User  where email=?1")
    int getActive(String email);

    @Query("select password from User  where email=?1")
    String getPasswordByEmail(String email);



}
