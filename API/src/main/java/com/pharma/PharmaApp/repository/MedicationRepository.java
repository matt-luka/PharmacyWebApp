package com.pharma.PharmaApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pharma.PharmaApp.models.Medication;

/**
 * 
 * Repository for Medication model
 * 
 * @author Matthew Luka
 *
 */
@Repository
public interface MedicationRepository extends JpaRepository<Medication, Integer> {

}
