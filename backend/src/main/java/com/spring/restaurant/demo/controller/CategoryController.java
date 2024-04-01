package com.spring.restaurant.demo.controller;


import com.spring.restaurant.demo.model.Category;
import com.spring.restaurant.demo.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin
public class CategoryController {

    private CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }


    // http://localhost:7070/api/allCategories
    @GetMapping("allCategories")

    public List<Category> getAllCategory() {

        return categoryService.allCategories();

    }

}
