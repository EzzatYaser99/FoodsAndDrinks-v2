package com.spring.restaurant.demo.service;

import com.spring.restaurant.demo.model.RequestOrder;
import com.spring.restaurant.demo.repo.ClientRepository;
import com.spring.restaurant.demo.dto.PurchaseRequest;
import com.spring.restaurant.demo.dto.PurchaseResponse;
import com.spring.restaurant.demo.model.Item;
import com.spring.restaurant.demo.util.UserCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;


@Service
public class PurchaseServiceImpl implements PurchaseService {


    private ClientRepository clientRepository;


    @Autowired
    public PurchaseServiceImpl(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;

    }


    @Override
    @Transactional
    public PurchaseResponse addRequestOrder(PurchaseRequest purchaseReq) {

        /* #1 */
        RequestOrder requestOrder = purchaseReq.getRequestOrder();

        /* #2 */
        String myCode = UserCode.getCode();
        requestOrder.setCode(myCode);

        /* #3 */
//        requestOrder.setItems(purchaseRequest.getItems());
//        purchaseRequest.getItems().forEach(item-> item.setRequestOrder(requestOrder));
        List<Item> items = purchaseReq.getItems();
        items.forEach(item -> requestOrder.addItem(item));


        /* #4 */
        requestOrder.setFromAddress(purchaseReq.getFromAddress());
        requestOrder.setToAddress(purchaseReq.getToAddress());


//        Set<RequestOrder>requestOrders=new HashSet<>();
//        requestOrders.add((RequestOrder) requestOrders);
//        purchaseRequest.getClient().setRequestOrders(requestOrders);
//        requestOrder.setClient(requestOrder.getClient());

        /*  #5 */
        purchaseReq.getClient().addRequestOrder(requestOrder);


        clientRepository.save(purchaseReq.getClient());
        return new PurchaseResponse(purchaseReq.getClient().getName(), myCode);
    }


}
