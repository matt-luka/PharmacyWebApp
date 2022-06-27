package com.pharma.PharmaApp.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="cart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "medication_id", nullable = false)
    private Medication medication;

    @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private User user;

    @Column(name = "date")
    private Date date;
    
    private int quantity;
    
    public Cart() {
    	
    }
    
    public Cart(Medication med, User user, int quantity) {
    	this.medication = med;
    	this.user = user;
    	this.quantity = quantity;
    	this.date = new Date();
    }
    
    public Integer getID() {
    	return this.id;
    }
    
    public void setID(Integer ID) {
    	this.id = ID;
    	return;
    }

    public Medication getMedication() {
    	return this.medication;
    }
    
    public void setMedication(Medication med) {
    	this.medication = med;
    	return;
    }
    
    public User getUser() {
    	return this.user;
    }
    
    public void setUser(User user) {
    	this.user = user;
    	return;
    }
    
    public Date getDate() {
    	return this.date;
    }
    
    public void setDate(Date date) {
    	this.date = date;
    	return;
    }
    
    public int getQuantity() {
    	return this.quantity;
    }
    
    public void setQuantity(int quantity) {
    	this.quantity = quantity;
    	return;
    }
}
