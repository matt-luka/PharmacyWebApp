package com.pharma.PharmaApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pharma.PharmaApp.models.User;

/**
 * 
 * Repository for Token model
 * 
 * @author Matthew Luka
 *
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	/**
	 * 
	 * Finds a user by the email field
	 * 
	 * @param email Querying email
	 * @return User with associated email
	 */
	User findByEmail(String email);
	
}
