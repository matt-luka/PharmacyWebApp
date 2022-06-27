package com.pharma.PharmaApp.dto.medication;

import javax.validation.constraints.NotNull;

import com.pharma.PharmaApp.models.Medication;
import com.pharma.PharmaApp.models.Sections;

/**
 * 
 * Data transfer object for Medication model
 * 
 * @author Matthew Luka
 *
 */
public class MedicationDTO {

	private Integer id;
    private @NotNull String name;
    private @NotNull String dosage;
    private @NotNull String treatment_info;
    private @NotNull double price;
    private @NotNull Integer sectionID;
    
    /**
     * 
     * Empty constructor for the MedicationDTO class
     * 
     */
    public MedicationDTO() {
    }
    
    /**
     * 
     * Detailed constructor for the MedicationDTO class
     * 
     * @param name Desired name
     * @param dosage Desire dosage
     * @param treatment_info Desired treatment information
     * @param price Desired price
     * @param sectionID Desired section
     */
    public MedicationDTO(@NotNull String name, @NotNull String dosage, @NotNull String treatment_info, @NotNull double price, @NotNull Integer sectionID) {
        this.name = name;
        this.dosage = dosage;
        this.treatment_info = treatment_info;
        this.price = price;
        this.sectionID = sectionID;
    }

    /**
     * 
     * Deep copy MedicationDTO constructor
     * 
     * @param med Medication object
     */
    public MedicationDTO(Medication med) {
        this.setID(med.getID());
        this.setName(med.getName());
        this.setDosage(med.getDosage());
        this.setInfo(med.getInfo());
        this.setPrice(med.getPrice());
        this.setSectionID(med.getSection().getSectionID());
    }

    /**
     * 
     * Getter for ID field
     * 
     * @return Current ID
     */
    public Integer getID() {
        return id;
    }

    /**
     * 
     * Setter for the ID field
     * 
     * @param id Desired ID
     */
    public void setID(Integer id) {
        this.id = id;
        return;
    }
	
    /**
     * 
     * Getter for the name field
     * 
     * @return Current name
     */
    public String getName() {
    	return this.name;
    }
    
    /**
     * 
     * Setter for the name field
     * 
     * @param name Desired name
     */
    public void setName(String name) {
    	this.name = name;
    	return;
    }
    
    /**
     * 
     * Getter for the dosage field
     * 
     * @return Current dosage
     */
    public String getDosage() {
    	return this.dosage;
    }
    
    /**
     * 
     * Setter for the dosage field
     * 
     * @param dosage Desired dosage
     */
    public void setDosage(String dosage) {
    	this.dosage = dosage;
    	return;
    }
    
    /**
     * 
     * Getter for the treatment_info field
     * 
     * @return Current treatment information
     */
    public String getInfo() {
    	return this.treatment_info;
    }
    
    /**
     * 
     * Setter for the treatment_info field
     * 
     * @param info Desired treatment information
     */
    public void setInfo(String info) {
    	this.treatment_info = info;
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
    
    /**
     * 
     * Getter for the Section foreign key
     * 
     * @return Current section ID
     */
    public Integer getSectionID() {
    	return this.sectionID;
    }
    
    /**
     * 
     * Setter for the Section foreign key
     * 
     * @param id Desired section ID
     */
    public void setSectionID(Integer id) {
    	this.sectionID = id;
    }
	
}
