package com.pharma.PharmaApp.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name="order_items")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "id")
    @JsonIgnore
    private Order order;

    @OneToOne
    @JoinColumn(name = "medication_id", referencedColumnName = "id")
    private Medication medication;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "date")
    private Date date;
    
    private @NotNull double price;
    
    private @NotNull int quantity;

    public OrderItem() {
    	
    }
    
    public Integer getID() {
    	return this.id;
    }
    
    public void setID(Integer id) {
    	this.id = id;
    	return;
    }
    
    public OrderItem(Order order, Medication medication, double price, int quantity) {
    	this.order = order;
    	this.medication = medication;
    	this.price = price;
    	this.quantity = quantity;
    	this.date = new Date();
    }
    
    public Order getOrder() {
    	return this.order;
    }
    
    public void setOrder(Order order) {
    	this.order = order;
    	return;
    }
    
    public Medication getMedication() {
    	return this.medication;
    }
    
    public void setMedication(Medication med) {
    	this.medication = med;
    	return;
    }
    
    public Date getDate() {
    	return this.date;
    }
    
    public void setDate(Date date) {
    	this.date = date;
    	return;
    }
    
    public double getPrice() {
    	return this.price;
    }
    
    public void setPrice(double price) {
    	this.price = price;
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
