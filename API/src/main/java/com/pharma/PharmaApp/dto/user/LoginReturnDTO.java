package com.pharma.PharmaApp.dto.user;

/**
 * 
 * Data transfer object for login return
 * 
 * @author Matthew Luka
 *
 */
public class LoginReturnDTO {

	private String token;
	private String status;
	
	/**
	 * 
	 * Default constructor
	 * 
	 * @param token Authentication token
	 * @param status Status message
	 */
	public LoginReturnDTO(String token, String status) {
		this.status = status;
		this.token = token;
	}
	
	/**
	 * 
	 * Getter for token field
	 * 
	 * @return Current token
	 */
	public String getToken() {
		return this.token;
	}
	
	/**
	 * 
	 * Setter for token field
	 * 
	 * @param token Desired token
	 */
	public void setToken(String token) {
		this.token = token;
		return;
	}
	
	/**
	 * 
	 * Getter for status field
	 * 
	 * @return Current status
	 */
	public String getStatus() {
		return this.status;
	}
	
	/**
	 * 
	 * Setter for status field
	 * 
	 * @param status Desired status
	 */
	public void setStatus(String status) {
		this.status = status;
		return;
	}
	
}
