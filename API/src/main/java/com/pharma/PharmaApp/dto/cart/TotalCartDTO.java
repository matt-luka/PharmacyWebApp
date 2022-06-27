package com.pharma.PharmaApp.dto.cart;

import java.util.List;

/**
 * 
 * Data transfer object for Cart Total
 * 
 * @author Matthew Luka
 *
 */
public class TotalCartDTO {

	private List<ItemDTO> items;
	private double price;
	
	/**
	 * 
	 * Default constructor for TotalCartDTO
	 * 
	 * @param items Items included in the cart
	 * @param price Total price of all the items in the cart
	 */
	public TotalCartDTO(List<ItemDTO> items, double price) {
		this.items = items;
		this.price = price;
	}
	
	/**
	 * 
	 * Getter for the items field
	 * 
	 * @return List of items in the cart
	 */
	public List<ItemDTO> getItems(){
		return this.items;
	}
	
	/**
	 * 
	 * Setter for the items field
	 * 
	 * @param items Desired items list
	 */
	public void setItems(List<ItemDTO> items) {
		this.items = items;
		return;
	}
	
	/**
	 * 
	 * Getter for the price field
	 * 
	 * @return Current price
	 */
	public double getPrice() {
		return this.price;
	}
	
	/**
	 * 
	 * Setter for the price field
	 * 
	 * @param price Desired price
	 */
	public void setPrice(double price) {
		this.price = price;
		return;
	}
	
}
