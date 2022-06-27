package com.pharma.PharmaApp.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "medication")
public class Medication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private @NotNull String name;
    private @NotNull String dosage;
    private @NotNull String treatment_info;
    private @NotNull double price;

    
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "section_id", nullable = false)
    Sections section;

    public Medication() {
    	
    }

    public Medication(String name, String dosage, String treatment_info, double price,  Sections section) {
        super();
        this.name = name;
        this.dosage = dosage;
        this.treatment_info = treatment_info;
        this.price = price;
        this.section = section;
    }
    
    public Integer getID() {
        return id;
    }

    public void setID(Integer id) {
        this.id = id;
        return;
    }
	
    public String getName() {
    	return this.name;
    }
    
    public void setName(String name) {
    	this.name = name;
    	return;
    }
    
    public String getDosage() {
    	return this.dosage;
    }
    
    public void setDosage(String dosage) {
    	this.dosage = dosage;
    	return;
    }
    
    public String getInfo() {
    	return this.treatment_info;
    }
    
    public void setInfo(String info) {
    	this.treatment_info = info;
    	return;
    }
    
    public double getPrice() {
    	return this.price;
    }
    
    public void setPrice(double price) {
    	this.price = price;
    	return;
    }
    
    public Sections getSection() {
    	return this.section;
    }
    
    public void setSection(Sections section) {
    	this.section = section;
    	return;
    }
}
