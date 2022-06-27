package com.pharma.PharmaApp.dto.user;

/**
 * 
 * Data transfer object for logging in
 * 
 * @author Matthew Luka
 *
 */
public class LoginDTO {

	private String email;
	private String password;
	
	/**
	 * 
	 * Getter for email field
	 * 
	 * @return Current email
	 */
	public String getEmail() {
		return this.email;
	}
	
	/**
	 * 
	 * Setter for email field
	 * 
	 * @param email Desired email
	 */
	public void setEmail(String email) {
		this.email = email;
		return;
	}
	
	/**
	 * 
	 * Getter for password field
	 * 
	 * @return Current password
	 */
	public String getPassword() {
		return this.password;
	}
	
	/**
	 * 
	 * Setter for password field
	 * 
	 * @param password Desired password
	 */
	public void setPassword(String password) {
		this.password = password;
		return;
	}
	
}
