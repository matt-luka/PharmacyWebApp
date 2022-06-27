package com.pharma.PharmaApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pharma.PharmaApp.models.Sections;

/**
 * 
 * Repository for Section models
 * 
 * @author Matthew Luka
 *
 */
@Repository
public interface SectionRepository extends JpaRepository<Sections, Integer> {

	/**
	 * 
	 * Find a section given a name
	 * 
	 * @param sectionName Querying name
	 * @return Section object
	 */
	Sections findBySectionName(String sectionName);
	
}
