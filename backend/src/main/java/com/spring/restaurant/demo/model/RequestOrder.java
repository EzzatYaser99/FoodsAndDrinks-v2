package com.spring.restaurant.demo.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Data
@NoArgsConstructor
@Entity
@Table(name = "request_order")
public class RequestOrder extends CategoryOrder {
    @Column(name = "code")
    private String code;
    //    @Column(name = "note")
//    private String note;
    @Column(name = "total_price")
    private int totalPrice;
    @Column(name = "total_quantity")
    private int totalQuantity;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "requestOrder")
    private List<Item> items = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client = new Client();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "from_address_id", referencedColumnName = "id")
    private Address fromAddress = new Address();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "to_address_id", referencedColumnName = "id")
    private Address toAddress = new Address();


    public void addItem(Item item) {
        items.add(item);
        item.setRequestOrder(this);

    }

}
