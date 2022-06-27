package com.pharma.PharmaApp.models;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tokens")
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    
    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private User user;
    
    @Column(name = "date")
    private Date date;

    private String token;
    
    public Token() {
    	
    }

    public Token(User user){
    	
    	this.user = user;
    	this.date = new Date();
    	this.token = UUID.randomUUID().toString();
    	
    }
    
    
    public Integer getID() {
    	return this.id;
    }
    
    public void setID(Integer id) {
    	this.id = id;
    	return;
    }
    
    public Date getDate() {
    	return this.date;
    }
    
    public void setDate(Date date) {
    	this.date = date;
    	return;
    }
    
    public User getUser() {
    	return this.user;
    }
    
    public void setUser(User user) {
    	this.user = user;
    	return;
    }

    public String getToken() {
    	return this.token;
    }
    
    public void setToken(String token) {
    	this.token = token;
    	return;
    }
    
	
}
