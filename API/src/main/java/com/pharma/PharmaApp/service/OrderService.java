package com.pharma.PharmaApp.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.pharma.PharmaApp.dto.order.OrderDTO;
import com.pharma.PharmaApp.models.Medication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pharma.PharmaApp.dto.cart.ItemDTO;
import com.pharma.PharmaApp.dto.cart.TotalCartDTO;
import com.pharma.PharmaApp.exceptions.CustomException;
import com.pharma.PharmaApp.models.Order;
import com.pharma.PharmaApp.models.OrderItem;
import com.pharma.PharmaApp.models.User;
import com.pharma.PharmaApp.repository.OrderItemRepository;
import com.pharma.PharmaApp.repository.OrderRepository;

/**
 * 
 * Service for Order model
 * 
 * @author Matthew Luka
 *
 */
@Service
public class OrderService {
	
	@Autowired
	CartService cartService;
	
	@Autowired
	OrderRepository orderRepository;
	
	@Autowired
	OrderItemRepository itemRepository;
	
	/**
	 * 
	 * Submits an order
	 * 
	 * @param user Associated user
	 */
    public void placeOrder(User user) {
        TotalCartDTO cartDTO = cartService.listItems(user);
        List<ItemDTO> itemDTOList = cartDTO.getItems();

        Order order = new Order();
        order.setPrice(cartDTO.getPrice());
        order.setUser(user);
        order.setDate(new Date());
        orderRepository.save(order);

        for (ItemDTO cartItemDto : itemDTOList) {
            OrderItem item = new OrderItem();
            item.setOrder(order);
            item.setMedication(cartItemDto.getMedication());
            item.setDate(new Date());
            item.setQuantity(cartItemDto.getQuantity());
            item.setPrice(cartItemDto.getMedication().getPrice());
            itemRepository.save(item);
        }
    }

    /**
     * 
     * Lists all orders for a user
     * 
     * @param user Querying user
     * @return Associated orders
     */
    public List<Order> listOrders(User user) {
        List<Order> list = orderRepository.findAllByUserOrderByDateDesc(user);
        for (int i = 1; i < list.size(); i++) {
            List<OrderItem> list1 = itemRepository.queryList(list.get(i).getID());
            list.get(i).setItems(list1);
        }
        return list;
    }
    
    /**
     * 
     * Retrieves an order by ID and user
     * 
     * @param orderId Order ID
     * @param user Querying user
     * @return Order
     * @throws CustomException If either parameters are invalid
     */
    public Order getOrder(Integer orderId, User user) throws CustomException {
    	Optional<Order> order = orderRepository.findById(orderId);

        if (order==null) {
            throw  new CustomException("Invalid ID");
        }

        Order order_n = order.get();

        if(order_n.getUser() != user) {
            throw  new CustomException("Invalid authentication");
        }

        return order_n;
    }

    /**
     * 
     * Creates a new order object
     * 
     * @param orderDTO Intermediate data held in transfer object
     */
    public void createOrder(OrderDTO orderDTO) {

        Order order = new Order();
        double totalPrice = orderDTO.getPrice() * orderDTO.getQuantity();
        order.setPrice(totalPrice);
        order.setUser(orderDTO.getUser());
        order.setDate(new Date());
        Order result = orderRepository.save(order);

        Medication medication = new Medication();
        medication.setID(orderDTO.getMedication_id());
        OrderItem item = new OrderItem();
        item.setDate(new Date());
        item.setQuantity(orderDTO.getQuantity());
        item.setPrice(orderDTO.getPrice());
        item.setMedication(medication);
        item.setOrder(result);
        itemRepository.save(item);
    }

}
