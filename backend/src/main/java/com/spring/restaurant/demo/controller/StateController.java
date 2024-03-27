package com.spring.restaurant.demo.controller;


import com.spring.restaurant.demo.model.State;
import com.spring.restaurant.demo.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin
public class StateController {
    private StateService stateService;


    @Autowired
    public StateController(StateService stateService) {
        this.stateService = stateService;
    }


    @GetMapping("states")
    public List<State> getStates() {
        return stateService.getAllStates();
    }

    @GetMapping("statescode")
    public List<State> getStatesByCode(@RequestParam String code) {
        return stateService.getStatesByCountryCode(code);
    }
}
