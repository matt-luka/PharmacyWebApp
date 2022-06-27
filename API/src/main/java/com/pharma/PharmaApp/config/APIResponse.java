package com.pharma.PharmaApp.config;

import java.time.LocalDateTime;


/**
 * 
 * The APIResponse class returns information on an API call
 * 
 * @author Matthew Luka
 *
 */
public class APIResponse {
	private final boolean status;
	private final String message;
	
	/**
	 * 
	 * Constructor for a default APIResponse, status and message are required
	 * 
	 * @param status Either True if the API returns the expected 200-level HTTP code
	 * or False if the API returns any 400-level code or encounters an exception
	 * @param message Details explaining the status, e.g. error message if an exception occurred
	 */
	public APIResponse(boolean status, String message) {
		this.status = status;
		this.message = message;
	}
	
	/**
	 * 
	 * Returns the status of a response
	 * 
	 * @return APIResponse's current status (True or False)
	 */
	public boolean status() {
		return this.status;
	}
	
	/**
	 * 
	 * Returns the message paired with a response
	 * 
	 * @return APIResponse's corresponding message
	 */
	public String getMessage() {
		return this.message;
	}

	/**
	 * 
	 * Returns the time that the APIResponse was invoked
	 * 
	 * @return APIResponse invocation time
	 */
	public String getTime() {
		return LocalDateTime.now().toString();
	}
	
}
