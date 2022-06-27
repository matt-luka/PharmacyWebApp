package com.pharma.PharmaApp.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY)
    private List<OrderItem> items;

    @ManyToOne()
    @JsonIgnore
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date date;
    
    private double price;
    
    public Order() {
    	
    }
    
    public Integer getID() {
    	return this.id;
    }
    
    public void setID(Integer id) {
    	this.id = id;
    	return;
    }
    
    public List<OrderItem> getItems(){
    	return this.items;
    }
    
    public void setItems(List<OrderItem> items) {
    	this.items = items;
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
    
    public double getPrice() {
    	return this.price;
    }
    
    public void setPrice(double price) {
    	this.price = price;
    	return;
    }
	
}
