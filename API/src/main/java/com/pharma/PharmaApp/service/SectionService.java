package com.pharma.PharmaApp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pharma.PharmaApp.models.Sections;
import com.pharma.PharmaApp.repository.SectionRepository;

/**
 * 
 * Service for Section model
 * 
 * @author Matthew Luka
 *
 */
@Service
public class SectionService {

	@Autowired
	private SectionRepository sectRepo;
	
	/**
	 * 
	 * Retrieves a section by name field
	 * 
	 * @param sectionName Querying name
	 * @return Section object
	 */
	public Sections readSection(String sectionName) {
		return sectRepo.findBySectionName(sectionName);
	}
	
	/**
	 * 
	 * Retrieves a section by ID
	 * 
	 * @param sectionID Querying ID
	 * @return Section object
	 */
	public Optional<Sections> readSection(Integer sectionID) {
		return sectRepo.findById(sectionID);
	}
	
	/**
	 * 
	 * Creates a section
	 * 
	 * @param section Section data
	 */
	public void createSection(Sections section) {
		sectRepo.save(section);
	}
	
	/**
	 * 
	 * Lists all sections
	 * 
	 * @return List of all section objects
	 */
	public List<Sections> listSections() {
		return sectRepo.findAll();
	}
	
	/**
	 * 
	 * Updates a section
	 * 
	 * @param sectionID Querying ID
	 * @param newSection Replacement section
	 */
	public void updateSection(Integer sectionID, Sections newSection) {
		Sections section = sectRepo.findById(sectionID).get();
		section.setSectionName(newSection.getSectionName());
		section.setSectionDesc(newSection.getSectionDesc());
		section.setSectionURL(newSection.getSectionURL());
		sectRepo.save(section);
	}
	
	
}
