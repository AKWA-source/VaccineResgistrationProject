package com.example.VRSystem.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.VRSystem.Model.Vaccine_section;
import com.example.VRSystem.Repository.VacReg_repository;
import com.example.VRSystem.Repository.VacSec_repository;

@CrossOrigin(origins = {"http://localhost:8081"})   
@RestController
@RequestMapping(path="/Project/REST-API")
public class VacSectionController {
	
	@Autowired
	private VacSec_repository vacsec_repository;
	
	
// 9	Constraint: The availability of vaccines should always be more than the number of bookings.
//	Context Vaccines_section
//	inv: self.R3.no_of_vaccines->size()>self.R2->collect(self.R2.bookingID)->sum()
    @Transactional
    @GetMapping(value="/checkAvailability")
    @ResponseBody
    public boolean checkAvailability(@RequestParam("vac_regid") Long vac_regid, @RequestParam("inventoryid") Long inventoryid) {
    	if(vacsec_repository.numberOfVaccines(inventoryid) >  vacsec_repository.numberOfBookings(vac_regid))
    	    return true;
    	else
    		return false;
    	
    }
    
    
//   11 Constraint: The number of slots for each day should always be more than available slots.
//    Context User
//    inv: self.R2.no_of_slots->size()>collect(self.R2.available_slots)->sum()
    @Transactional
    @GetMapping(value="/checkSlots")
    public boolean checkAvailability() {
    	if(vacsec_repository.numberOfSlots(Vaccine_section.no_of_slots) >  vacsec_repository.availableSlots(Vaccine_section.available_slots))
    	    return true;
    	else
    		return false;
    	
    }

}
