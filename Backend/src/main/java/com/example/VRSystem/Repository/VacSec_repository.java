package com.example.VRSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.VRSystem.Model.Vaccine_section;

@Repository
public interface VacSec_repository extends JpaRepository<Vaccine_section,Long> {
	
    @Transactional
    @Query(value = "select sum(no_of_vac) from inventory where no_of_vac =:no_of_vac is not null", nativeQuery = true)
    Integer numberOfVaccines(@Param("no_of_vac") Long no_of_vac);

    
    
    @Transactional
    @Query(value = "SELECT COUNT(1) from vac_reg where vac_regid =:vac_regid is not null vac_regid = :vac_regid", nativeQuery = true)
    Integer numberOfBookings(@Param("vac_regid") Long vac_regid);
    
    @Transactional
    @Query(value = "SELECT COUNT(1) from vac_sec where no_of_slots =:no_of_slots", nativeQuery = true)
    Integer numberOfSlots(@Param("no_of_slots") int no_of_slots);
    
    @Transactional
    @Query(value = "SELECT COUNT(1) from vac_sec where available_slots =:available_slots", nativeQuery = true)
    Integer availableSlots(@Param("available_slots") int available_slots);
    
    

    

}
