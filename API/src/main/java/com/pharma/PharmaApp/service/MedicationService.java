package com.pharma.PharmaApp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pharma.PharmaApp.dto.medication.MedicationDTO;
import com.pharma.PharmaApp.exceptions.CustomException;
import com.pharma.PharmaApp.models.Medication;
import com.pharma.PharmaApp.models.Sections;
import com.pharma.PharmaApp.repository.MedicationRepository;

/**
 * 
 * Service for Medication model
 * 
 * @author Matthew Luka
 *
 */
@Service
public class MedicationService {

    @Autowired
    private MedicationRepository medRepository;
    
    /**
     * 
     * Add a new medication
     * 
     * @param medDTO Medication data transfer object
     * @param section Desired section
     */
    public void addMedication(MedicationDTO medDTO, Sections section) {
        Medication med = getMedicationFromDTO(medDTO, section);
        medRepository.save(med);
    }

    /**
     * 
     * Retrieve a medication from queried info
     * 
     * @param medDTO Data transfer object containing information
     * @param section Section for medication
     * @return Associated medication object
     */
    public static Medication getMedicationFromDTO(MedicationDTO medDTO, Sections section) {
        Medication med = new Medication();
        med.setName(medDTO.getName());
        med.setDosage(medDTO.getDosage());
        med.setInfo(medDTO.getInfo());
        med.setPrice(medDTO.getPrice());
        med.setSection(section);
        return med;
    }
    
    /**
     * 
     * Returns a medication based on ID
     * 
     * @param medID Querying ID
     * @return Associated medication object
     * @throws CustomException If Medication ID is invalid
     */
    public Medication getMedicationFromID(Integer medID) throws CustomException {
        Optional<Medication> medication = medRepository.findById(medID);
        if (!(medication.isPresent())) {
            throw new CustomException("Invalid Medication ID: " + medID);
        }
        
        return medication.get();
    }
    
    /**
     * 
     * List all medications
     * 
     * @return List of medication objects
     */
    public List<MedicationDTO> listMedication() {
        List<Medication> meds = medRepository.findAll();
        List<MedicationDTO> medDTOs = new ArrayList<>();

        for(Medication med : meds) {
            medDTOs.add(new MedicationDTO(med));
        }
        return medDTOs;
    }
    
    /**
     * 
     * Update a medication
     * 
     * @param medicationID Medication to be updated
     * @param medDTO Updating info
     * @param section Section ID
     */
    public void updateMedication(Integer medicationID, MedicationDTO medDTO, Sections section) {
        Medication med = getMedicationFromDTO(medDTO, section);
        med.setID(medicationID);
        medRepository.save(med);
    }
	
}
