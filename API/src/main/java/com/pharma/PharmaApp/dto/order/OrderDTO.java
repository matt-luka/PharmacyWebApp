package com.pharma.PharmaApp.dto.order;

import com.pharma.PharmaApp.models.User;

import java.util.Date;


/**
 * 
 * Data transfer object for Order model
 * 
 * @author Matthew Luka & Candice Fan
 */
public class OrderDTO {

    private Integer medication_id;
    private Date date;
    private double price;
    private Integer quantity;
    private User user;
    private String token;

    
    /**
     * 
     * Getter for the token field
     * 
     * @return Current token
     */
    public String getToken() {
        return token;
    }

    /**
     * 
     * Setter for the token field
     * 
     * @param token Desired token
     */
    public void setToken(String token) {
        this.token = token;
    }

    /**
     * 
     * Getter for the user field
     * 
     * @return Current user
     */
    public User getUser() {
        return user;
    }

    /**
     * 
     * Setter for the user field
     * 
     * @param user Desired user
     */
    public void setUser(User user) {
        this.user = user;
    }

    /**
     * 
     * Getter for the medication foreign key field
     * 
     * @return Current medication ID
     */
    public Integer getMedication_id() {
        return medication_id;
    }

    /**
     * 
     * Setter for the medication foreign key field
     * 
     * @param medication_id Desired medication ID
     */
    public void setMedication_id(Integer medication_id) {
        this.medication_id = medication_id;
    }

    /**
     * 
     * Getter for the date field
     * 
     * @return Current date value
     */
    public Date getDate() {
        return date;
    }

    /**
     * 
     * Setter for the date field
     * 
     * @param date Desired date
     */
    public void setDate(Date date) {
        this.date = date;
    }

    /**
     * 
     * Getter for the price field
     * 
     * @return Current price
     */
    public double getPrice() {
        return price;
    }

    /**
     * 
     * Setter for the price field
     * 
     * @param price Desired price
     */
    public void setPrice(double price) {
        this.price = price;
    }

    /**
     * 
     * Getter for the quantity field
     * 
     * @return Current quantity
     */
    public Integer getQuantity() {
        return quantity;
    }

    /**
     * 
     * Setter for the quantity field
     * 
     * @param quantity Desired quantity
     */
    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    /**
     * 
     * toString() override method
     * 
     */
    @Override
    public String toString() {
        return "OrderDTO{" +
                "medication_id=" + medication_id +
                ", date=" + date +
                ", price=" + price +
                ", quantity=" + quantity +
                ", user=" + user +
                ", token='" + token + '\'' +
                '}';
    }
}
