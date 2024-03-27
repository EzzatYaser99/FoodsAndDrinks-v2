package com.spring.restaurant.demo.service;

import com.spring.restaurant.demo.model.State;
import com.spring.restaurant.demo.repo.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StateService {

    private StateRepository stateRepository;

    @Autowired
    public StateService(StateRepository stateRepository) {
        this.stateRepository = stateRepository;
    }

    public List<State> getAllStates() {
        return stateRepository.findAll();
    }

    public List<State> getStatesByCountryCode(String code) {
        return stateRepository.findStatesByCountryCode(code);
    }
}
