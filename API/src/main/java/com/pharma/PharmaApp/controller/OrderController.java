package com.pharma.PharmaApp.controller;

import java.util.List;

import com.pharma.PharmaApp.dto.order.OrderDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.pharma.PharmaApp.config.APIResponse;
import com.pharma.PharmaApp.exceptions.CustomException;
import com.pharma.PharmaApp.exceptions.TokenFailureException;
import com.pharma.PharmaApp.models.Order;
import com.pharma.PharmaApp.models.User;
import com.pharma.PharmaApp.service.OrderService;
import com.pharma.PharmaApp.service.TokenService;

/**
 * 
 * Controller for Order instances, allowing GET, POST (submit and create) endpoints
 * 
 * @author Matthew Luka
 *
 */
@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private TokenService tokenService;
	
	/**
	 * 
	 * Order GET (list) endpoint configuration
	 * 
	 * @param token Authentication token is required
	 * @return A data transfer object containing a list of orders
	 * @throws TokenFailureException Throws an error if authentication token is invalid or does not exist
	 */
    @GetMapping("/")
    public ResponseEntity<List<Order>> getAllOrders(@RequestParam("token") String token) throws TokenFailureException {
        tokenService.auth(token);
        User user = tokenService.getUser(token);
        List<Order> DTO = orderService.listOrders(user);
        
        return new ResponseEntity<>(DTO, HttpStatus.OK);
    }
	
    /**
     * 
     * Order GET (instance) endpoint configuration
     * 
     * @param id Order ID to be retrieved
     * @param token Authentication token is required
     * @return An order object with an HTTP status code
     * @throws TokenFailureException Throws an error if authentication token is invalid or does not exist
     * @throws CustomException Throws an error for custom exceptions
     */
    @GetMapping("/{id}")
    public ResponseEntity<Object> getOrderById(@PathVariable("id") Integer id, @RequestParam("token") String token) throws TokenFailureException, CustomException {
        tokenService.auth(token);
        User user = tokenService.getUser(token);
        Order order = orderService.getOrder(id, user);

        return new ResponseEntity<>(order, HttpStatus.OK);
    }
    
    /**
     * 
     * Order POST (submit order) endpoint configuration
     * 
     * @param token Authentication token is required
     * @return A new APIResponse object with a success message and status
     * @throws TokenFailureException Throws an error if authentication token is invalid or does not exist
     */
    @PostMapping("/add")
    public ResponseEntity<APIResponse> placeOrder(@RequestParam("token") String token) throws TokenFailureException {
        tokenService.auth(token);
        User user = tokenService.getUser(token);
        orderService.placeOrder(user);
        
        return new ResponseEntity<>(new APIResponse(true, "Successfully created order"), HttpStatus.CREATED);
    }

    /**
     * 
     * Order POST (create new order) endpoint configuration
     * 
     * @param orderDTO An order data transfer object to hold intermediate data
     * @return  A new APIResponse object with a success message and status
     * @throws TokenFailureException Throws an error if authentication token is invalid or does not exist
     */
    @PostMapping("/create")
    public ResponseEntity<APIResponse> createOrder(@RequestBody OrderDTO orderDTO) throws TokenFailureException{
        String token = orderDTO.getToken();
        tokenService.auth(token);
        User user = tokenService.getUser(token);
        orderDTO.setUser(user);
        orderService.createOrder(orderDTO);
        return new ResponseEntity<>(new APIResponse(true, "Successfully created order"), HttpStatus.CREATED);

    }
    
}
