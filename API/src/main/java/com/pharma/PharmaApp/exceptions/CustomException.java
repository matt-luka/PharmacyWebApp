package com.pharma.PharmaApp.exceptions;

/**
 * 
 * Exception thrown for unique errors
 * 
 * @author Matthew Luka
 *
 */
public class CustomException extends Exception {

	/**
	 * 
	 * Default constructor calls superclass
	 * 
	 * @param message Error message
	 */
	public CustomException(String message) {
		super(message);
	}
	
}
