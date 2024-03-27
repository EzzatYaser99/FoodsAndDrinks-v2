package com.spring.restaurant.demo.repo;

import com.spring.restaurant.demo.model.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StateRepository extends JpaRepository<State, Long> {

    List<State> findStatesByCountryCode(String Code);

}
