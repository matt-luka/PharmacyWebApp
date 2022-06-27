package com.pharma.PharmaApp.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;
    
    @Column(name = "phone")
    private String phone;
    
    @Column(name = "zipcode")
    private String zipcode;

    @Column(name = "password")
    private String password;
    
    public User() {
    	
    }
    
    public User(String firstName, String lastName, String email, String phone, String zipcode, String password) {
    	this.firstName = firstName;
    	this.lastName = lastName;
    	this.email = email;
    	this.phone = phone;
    	this.zipcode = zipcode;
    	this.password = password;
    }
	
    public Integer getID() {
    	return this.id;
    }
    
    public void setID(Integer id) {
    	this.id = id;
    	return;
    }
    
    public String getFirstName() {
    	return this.firstName;
    }
    
    public void setFirstName(String firstName) {
    	this.firstName = firstName;
    	return;
    }
    
    public String getLastName() {
    	return this.lastName;
    }
    
    public void setLastName(String lastName) {
    	this.lastName = lastName;
    	return;
    }
    
    public String getEmail() {
    	return this.email;
    }
    
    public void setEmail(String email) {
    	this.email = email;
    	return;
    }
    
    public String getPhone() {
    	return this.phone;
    }
    
    public void setPhone(String phone) {
    	this.phone = phone;
    	return;
    }
    
    public String getZip() {
    	return this.zipcode;
    }
    
    public void setZip(String zipcode) {
    	this.zipcode = zipcode;
    	return;
    }
    
    public String getPassword() {
    	return this.password;
    }
    
    public void setPassword(String password) {
    	this.password = password;
    	return;
    }
}
