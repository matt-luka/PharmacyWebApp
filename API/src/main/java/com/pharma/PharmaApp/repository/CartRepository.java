package com.pharma.PharmaApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pharma.PharmaApp.models.Cart;
import com.pharma.PharmaApp.models.User;

/**
 * 
 * Repository for Cart models
 * 
 * @author Matthew Luka
 *
 */
@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

	/**
	 * 
	 * Finds all user orders sorted by the date field
	 * 
	 * @param user The user whose orders should be searched
	 * @return List of all orders associated with that user
	 */
    List<Cart> findAllByUserOrderByDateDesc(User user);
	
}
