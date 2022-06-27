package com.pharma.PharmaApp.exceptions;

/**
 * 
 * Exception passed when authentication failure occurs in either two cases:
 * a. The token does not exist
 * b. The token is expired/invalid
 * 
 * @author Matthew Luka
 *
 */
public class TokenFailureException extends Exception {

	/**
	 * 
	 * Default constructor that calls superclass
	 * 
	 * @param msg Error message
	 */
	public TokenFailureException(String msg) {
		super(msg);
	}
	
}
