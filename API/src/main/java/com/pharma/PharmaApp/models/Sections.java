package com.pharma.PharmaApp.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "sections")
public class Sections {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "section_name")
	private @NotBlank String sectionName;

	private @NotBlank String description;
	
	private @NotBlank String url;
	
	
	public Sections() {
		
	}
	
	public Sections(@NotBlank String sectionName, @NotBlank String description, String url) {
		this.sectionName = sectionName;
		this.description = description;
		this.url = url;
	}
	
	public Integer getSectionID() {
		return this.id;
	}
	
	public void setSectionID(Integer sectionID) {
		this.id = sectionID;
		return;
	}
	
	public String getSectionName() {
		return this.sectionName;
	}
	
	public void setSectionName(String sectionName) {
		this.sectionName = sectionName;
		return;
	}
	
	public String getSectionDesc() {
		return this.description;
	}
	
	public void setSectionDesc(String sectionDesc) {
		this.description = sectionDesc;
		return;
	}
	
	public String getSectionURL() {
		return this.url;
	}
	
	public void setSectionURL(String sectionURL) {
		this.url = sectionURL;
		return;
	}
	
	@Override
	public String toString() {
		return "Section {id=" + id + ", name='" + sectionName + "', description='" + description + "'}";
	}
	
}
