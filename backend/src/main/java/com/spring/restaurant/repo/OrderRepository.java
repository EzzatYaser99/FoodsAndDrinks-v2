package com.spring.restaurant.repo;

import com.spring.restaurant.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {


    List<Order> findByCategoryName(String name);


    List<Order> findByNameContaining(String name);


    @Query("select count (id) from Order where category.id= ?1")
    public long getOrderLengthByCategoryId(Long id);


    @Query("select count (id) from Order where name LIKE %?1%")
    public long getOrderSizeByKey(String key);


}
