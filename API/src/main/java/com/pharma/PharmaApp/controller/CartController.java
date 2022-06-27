package com.pharma.PharmaApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pharma.PharmaApp.config.APIResponse;
import com.pharma.PharmaApp.dto.cart.CartDTO;
import com.pharma.PharmaApp.dto.cart.TotalCartDTO;
import com.pharma.PharmaApp.exceptions.CustomException;
import com.pharma.PharmaApp.exceptions.TokenFailureException;
import com.pharma.PharmaApp.models.Medication;
import com.pharma.PharmaApp.models.User;
import com.pharma.PharmaApp.service.CartService;
import com.pharma.PharmaApp.service.MedicationService;
import com.pharma.PharmaApp.service.SectionService;
import com.pharma.PharmaApp.service.TokenService;

/**
 * 
 * Controller for cart instances, allowing GET (list only), POST, and DELETE (instance only) endpoints
 * 
 * @author Matthew Luka
 *
 */
@RequestMapping("/cart")
@RestController
public class CartController {

	@Autowired
	SectionService sectionService;
	
	@Autowired
	MedicationService medService;
	
	@Autowired
	TokenService tokenService;
	
	@Autowired
	CartService cartService;
	
	/**
	 * 
	 * Cart GET (all) endpoint configuration
	 * 
	 * @param token Authentication token is required
	 * @return Returns a response containing a Cart data transfer object
	 * @throws TokenFailureException Throws an error if authentication token is invalid or does not exist
	 */
    @GetMapping("/")
    public ResponseEntity<TotalCartDTO> getItems(@RequestParam("token") String token) throws TokenFailureException {
        tokenService.auth(token);
        User user = tokenService.getUser(token);
        TotalCartDTO cartDTO = cartService.listItems(user);
        return new ResponseEntity<TotalCartDTO>(cartDTO,HttpStatus.OK);
    }
	
    /**
     * 
     * Cart POST endpoint configuration
     * 
     * @param cartDTO A Cart data transfer object to add Medication to
     * @param token Authentication token is required
     * @return A response containing a successful status and message
     * @throws TokenFailureException Throws an error if authentication token is invalid or does not exist
     * @throws CustomException Throws an error on custom exceptions
     */
    @PostMapping("/add")
    public ResponseEntity<APIResponse> addToCart(@RequestBody CartDTO cartDTO, @RequestParam("token") String token) throws TokenFailureException, CustomException {
        tokenService.auth(token);
        
        User user = tokenService.getUser(token);
        
        Medication med = medService.getMedicationFromID(cartDTO.getMedID());
        cartService.addToCart(med, user, cartDTO);
        
        return new ResponseEntity<>(new APIResponse(true, "Added medication to cart"), HttpStatus.CREATED);
    }
	
    /**
     * 
     * Cart DELETE (instance only) endpoint configuration
     * 
     * @param itemID The requested item to be deleted
     * @param token Authentication token is required
     * @return A response containing a successful status and message
     * @throws TokenFailureException Throws an error if authentication token is invalid or does not exist
     * @throws CustomException Throws an error on custom exceptions
     */
    @DeleteMapping("/delete/{itemID}")
    public ResponseEntity<APIResponse> deleteCartItem(@PathVariable("itemID") int itemID, @RequestParam("token") String token) throws TokenFailureException, CustomException {
        tokenService.auth(token);
        User user = tokenService.getUser(token);
        cartService.deleteCartItem(itemID, user);
        
        return new ResponseEntity<APIResponse>(new APIResponse(true, "Removed item from cart"), HttpStatus.OK);
    }
    
}
