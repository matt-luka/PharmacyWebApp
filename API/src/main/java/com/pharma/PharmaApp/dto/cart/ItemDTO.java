package com.pharma.PharmaApp.dto.cart;

import javax.validation.constraints.NotNull;

import com.pharma.PharmaApp.models.Cart;
import com.pharma.PharmaApp.models.Medication;

/**
 * 
 * Data transfer object for OrderItem model
 * 
 * @author Matthew Luka
 *
 */
public class ItemDTO {

	private Integer id;
    private @NotNull Medication medication;
    private @NotNull int quantity;

    /**
     * 
     * Default constructor for ItemDTO
     * 
     * @param cart Cart to associate item with
     */
    public ItemDTO(Cart cart) {
    	this.setID(cart.getID());
    }
	
    /**
     * 
     * Getter for ID field
     * 
     * @return Current ID
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
     * Getter for Medication Foreign Key
     * 
     * @return Medication Object
     */
    public Medication getMedication() {
    	return this.medication;
    }
    
    /**
     * 
     * Setter for Medication Foreign Key
     * 
     * @param med Desired medication
     */
    public void setMedication(Medication med) {
    	this.medication = med;
    	return;
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
    
}
