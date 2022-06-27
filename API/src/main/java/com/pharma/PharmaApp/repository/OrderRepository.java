package com.pharma.PharmaApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pharma.PharmaApp.models.Order;
import com.pharma.PharmaApp.models.User;

/**
 * 
 * Repository for Order models
 * 
 * @author Matthew Luka
 *
 */
@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

	/**
	 * 
	 * Finds all of the user orders sorted by date
	 * 
	 * @param user Querying user
	 * @return List of associated orders
	 */
	List<Order> findAllByUserOrderByDateDesc(User user);
	
}
