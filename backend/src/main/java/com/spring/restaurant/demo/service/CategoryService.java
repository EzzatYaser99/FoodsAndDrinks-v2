package com.spring.restaurant.demo.service;


import com.spring.restaurant.demo.model.Category;
import com.spring.restaurant.demo.repo.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {

        this.categoryRepository = categoryRepository;
    }

    public List<Category> allCategories() {
        return categoryRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));

    }
}
