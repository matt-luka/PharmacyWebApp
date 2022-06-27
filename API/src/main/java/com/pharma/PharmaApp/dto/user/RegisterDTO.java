package com.pharma.PharmaApp.dto.user;

/**
 * 
 * Data transfer object for registration
 * 
 * @author Matthew Luka & Candice Fan
 *
 */
public class RegisterDTO {
	
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String zipcode;
    private String password;
	
    /**
     * 
     * Getter for firstName field
     * 
     * @return Current first name
     */
    public String getFirstName() {
    	return this.firstName;
    }
    
    /**
     * 
     * Setter for firstName field
     * 
     * @param firstName Desired first name
     */
    public void setFirstName(String firstName) {
    	this.firstName = firstName;
    	return;
    }
    
    /**
     * 
     * Getter for lastName field
     * 
     * @return Current last name
     */
    public String getLastName() {
    	return this.lastName;
    }
    
    /**
     * 
     * Setter for lastName field
     * 
     * @param lastName Desired last name
     */
    public void setLastName(String lastName) {
    	this.lastName = lastName;
    	return;
    }
    
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
     * Getter for phone field
     * 
     * @return Current phone number
     */
    public String getPhone() {
    	return this.phone;
    }
    
    /**
     * 
     * Setter for phone field
     * 
     * @param phone Desired phone number
     */
    public void setPhone(String phone) {
    	this.phone = phone;
    	return;
    }
    
    /**
     * 
     * Getter for zipcode field
     * 
     * @return Current zipcode
     */
    public String getZip() {
    	return this.zipcode;
    }
    
    /**
     * 
     * Setter for zipcode field
     * 
     * @param zipcode Desired zipcode
     */
    public void setZip(String zipcode) {
    	this.zipcode = zipcode;
    	return;
    }
    
    /**
     * 
     * Getter for password field
     * 
     * @return Current password hash
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
