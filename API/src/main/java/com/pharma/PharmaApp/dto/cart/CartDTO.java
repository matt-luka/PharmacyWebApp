package com.pharma.PharmaApp.dto.cart;

import javax.validation.constraints.NotNull;

/**
 * 
 * Data transfer object for Cart model
 * 
 * @author Matthew Luka
 *
 */
public class CartDTO {
	
	private Integer id;
	private @NotNull Integer medicationID;
	private @NotNull int quantity;
	
	/**
	 * 
	 * Default constructor
	 * 
	 */
	public CartDTO() {
	}
	
	/**
	 * 
	 * Getter for ID field
	 * 
	 * @return Object ID
	 */
	public Integer getID() {
		return this.id;
	}
	
	/**
	 * 
	 * Setter for ID field
	 * 
	 * @param id Desired ID
	 */
	public void setID(Integer id) {
		this.id = id;
		return;
	}
	
	/**
	 * 
	 * Getter for Medication Foreign Key ID
	 * 
	 * @return Medication ID
	 */
	public Integer getMedID() {
		return this.medicationID;
	}
	
	/**
	 * 
	 * Setter for Medication Foreign Key ID
	 * 
	 * @param medID Desired medication ID
	 */
	public void setMedID(Integer medID) {
		this.medicationID = medID;
	}
	
	/**
	 * 
	 * Getter for quantity field
	 * 
	 * @return Current quantity
	 */
	public int getQuantity() {
		return this.quantity;
	}
	
	/**
	 * 
	 * Setter for quantity field
	 * 
	 * @param x Desired quantity
	 */
	public void setQuantity(int x) {
		this.quantity = x;
		return;
	}
	
	/**
	 * 
	 * toString() override for data transfer object
	 * 
	 */
	@Override
	public String toString() {
		return "Cart {id=" + id + " medication=" + medicationID + " quantity=" + quantity + "}";
	}

}
