package com.spring.restaurant.service;

import com.spring.restaurant.model.Country;
import com.spring.restaurant.repo.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
    private CountryRepository countryRepository;

    @Autowired
    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    public List<Country> getAllCountry() {
        return countryRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }
}
