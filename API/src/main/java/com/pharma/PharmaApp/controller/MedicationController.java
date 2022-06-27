package com.pharma.PharmaApp.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pharma.PharmaApp.config.APIResponse;
import com.pharma.PharmaApp.dto.medication.MedicationDTO;
import com.pharma.PharmaApp.models.Sections;
import com.pharma.PharmaApp.service.MedicationService;
import com.pharma.PharmaApp.service.SectionService;

/**
 * 
 * Controller for Medication instances, allowing GET (list only), POST, and PUT (instance only) endpoints
 * 
 * @author Matthew Luka
 *
 */
@RestController
@RequestMapping("/medication")
public class MedicationController {

	@Autowired
	MedicationService medService;
	
	@Autowired
	SectionService secService;
	
	/**
	 * 
	 * Medication GET (list only) endpoint configuration
	 * 
	 * @return A medication data transfer object and an HTTP status
	 */
    @GetMapping("/")
    public ResponseEntity<List<MedicationDTO>> getMedication() {
        List<MedicationDTO> medDTOs = medService.listMedication();
        return new ResponseEntity<>(medDTOs, HttpStatus.OK);
    }
	
    /**
     * 
     * Medication POST endpoint configuration
     * 
     * @param medDTO A Medication data transfer object is required to retrieve information
     * @return A new APIResponse object containing either an error or success message/status
     */
    @PostMapping("/add")
    public ResponseEntity<APIResponse> addMedication (@RequestBody MedicationDTO medDTO) {
        Optional<Sections> optionalSection = secService.readSection(medDTO.getSectionID());
        if (!optionalSection.isPresent()) {
            return new ResponseEntity<APIResponse>(new APIResponse(false, "Section is invalid"), HttpStatus.CONFLICT);
        }
        Sections section = optionalSection.get();
        medService.addMedication(medDTO, section);
        return new ResponseEntity<>(new APIResponse(true, "Medication successfully added"), HttpStatus.CREATED);
    }
    
    /**
     * 
     * Medication PUT (instance only) endpoint configuration
     * 
     * @param medicationID The medication that should be updated
     * @param medDTO A data transfer object to hold intermediate data
     * @return A new APIResponse object containing either an error or success message/status
     */
    @PostMapping("/update/{medicatioNID}")
    public ResponseEntity<APIResponse> updateProduct(@PathVariable("medicationID") Integer medicationID, @RequestBody @Valid MedicationDTO medDTO) {
        Optional<Sections> optionalSection = secService.readSection(medDTO.getSectionID());
        if (!optionalSection.isPresent()) {
            return new ResponseEntity<APIResponse>(new APIResponse(false, "Section is invalid"), HttpStatus.CONFLICT);
        }
        Sections section = optionalSection.get();
        medService.updateMedication(medicationID, medDTO, section);
        return new ResponseEntity<>(new APIResponse(true, "Medication successfully updated"), HttpStatus.CREATED);
    }
	
}
