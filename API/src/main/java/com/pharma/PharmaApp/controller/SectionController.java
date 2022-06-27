package com.pharma.PharmaApp.controller;

import java.util.List;
import java.util.Objects;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import com.pharma.PharmaApp.config.APIResponse;
import com.pharma.PharmaApp.models.Sections;
import com.pharma.PharmaApp.service.SectionService;

/**
 * 
 * Controller for Section GET (all), POST, and PUT endpoints
 * 
 * @author Matthew Luka
 *
 */
@RestController
@RequestMapping("/section")
public class SectionController {

	@Autowired
	private SectionService secServ;
	
	/**
	 * 
	 * Section GET (list) endpoint configuration
	 * 
	 * @return A new response containing sections and an HTTP status code
	 */
	@GetMapping("/")
	public ResponseEntity<List<Sections>> getCategories() {
		List<Sections> body = secServ.listSections();
		return new ResponseEntity<>(body, HttpStatus.OK);
	}
	
	/**
	 * 
	 * Section POST endpoint configuration
	 * 
	 * @param section Section object needs to be passed to router
	 * @return An APIResponse object containing a status and message
	 */
	@PostMapping("/create")
	public ResponseEntity<APIResponse> createSection(@Valid @RequestBody Sections section) {
		if (Objects.nonNull(secServ.readSection(section.getSectionName()))) {
			return new ResponseEntity<APIResponse>(new APIResponse(false, "Section already exists"), HttpStatus.CONFLICT);
		}
		secServ.createSection(section);
		return new ResponseEntity<>(new APIResponse(true, "Section successfully created"), HttpStatus.CREATED);
	}
	
	/**
	 * 
	 * Section PUT endpoint configuration
	 * 
	 * @param sectionID The section to be updated
	 * @param section Intermediate data to be updated on section object
	 * @return An APIResponse object containing a status and message
	 */
	@PostMapping("/update/{sectionID}")
	public ResponseEntity<APIResponse> updateSection(@PathVariable("sectionID") Integer sectionID, @Valid @RequestBody Sections section) {
		if (Objects.nonNull(secServ.readSection(sectionID))) {
			secServ.updateSection(sectionID, section);
			return new ResponseEntity<APIResponse>(new APIResponse(true, "Section successfully updated"), HttpStatus.OK);
		}

		return new ResponseEntity<>(new APIResponse(false, "Section does not exist"), HttpStatus.NOT_FOUND);
	}
}
