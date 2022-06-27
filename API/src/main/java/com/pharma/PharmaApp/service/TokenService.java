package com.pharma.PharmaApp.service;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pharma.PharmaApp.exceptions.TokenFailureException;
import com.pharma.PharmaApp.models.Token;
import com.pharma.PharmaApp.models.User;
import com.pharma.PharmaApp.repository.TokenRepository;

/**
 * 
 * Service for Token model
 * 
 * @author Matthew Luka
 *
 */
@Service
public class TokenService {

	@Autowired
	TokenRepository tokenRepository;
	
	/**
	 * 
	 * Retrieves a user token
	 * 
	 * @param user Querying user
	 * @return Associated token
	 */
	public Token getToken(User user) {
		return tokenRepository.findTokenByUser(user);
	}
	
	/**
	 * 
	 * Sets a user token
	 * 
	 * @param token Desired token
	 */
	public void setToken(Token token) {
		tokenRepository.save(token);
	}
	
	/**
	 * 
	 * Retrieves a user object given a token
	 * 
	 * @param token Querying token string
	 * @return
	 */
	public User getUser(String token) {
		Token t_token = tokenRepository.findTokenByToken(token);
		
		if (Objects.nonNull(t_token) && Objects.nonNull(t_token.getUser())) {
			return t_token.getUser();
		}
		else {
			return null;
		}
		
	}
	
	/**
	 * 
	 * Authenticates a user by checking token
	 * 
	 * @param token Token string
	 * @throws TokenFailureException If token does not exist or is invalid
	 */
	public void auth(String token) throws TokenFailureException {
		
		if (Objects.isNull(token)) {
			throw new TokenFailureException("Token does not exist");
		}
		else if(Objects.isNull(this.getUser(token))) {
			throw new TokenFailureException("Invalid token");
		}
		
	}
	
}
