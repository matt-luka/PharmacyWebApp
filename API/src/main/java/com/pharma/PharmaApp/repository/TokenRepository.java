package com.pharma.PharmaApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pharma.PharmaApp.models.Token;
import com.pharma.PharmaApp.models.User;

/**
 * 
 * Repository for Token model
 * 
 * @author Matthew Luka
 *
 */
@Repository
public interface TokenRepository extends JpaRepository<Token, Integer> {

	/**
	 * 
	 * Find a user's token
	 * 
	 * @param user Querying user
	 * @return Associated token
	 */
	Token findTokenByUser(User user);
	
	/**
	 * 
	 * Find a token
	 * 
	 * @param token Token string
	 * @return Token with full ID fields
	 */
	Token findTokenByToken(String token);
	
}
