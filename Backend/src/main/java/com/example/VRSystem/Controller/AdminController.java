package com.example.VRSystem.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import com.example.VRSystem.Model.Admin;
import com.example.VRSystem.Repository.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

//@CrossOrigin(origins = {"http://localhost:8081", "http://192.168.1.102:8081"})
@RestController
@RequestMapping(path="/Project/REST-API")
public class AdminController {

    @Autowired
    private Admin_repository admin_repository;

    @Autowired
    private User_repository user_repository;
    
	@Autowired
	private VacSec_repository vacsec_repository;



    //working

    @Transactional
    @PostMapping("/addadmin")
    @ResponseBody
    public String addAdmin(@Valid @RequestBody Admin admin) {
        if(admin_repository.isAdminExistByUsername(admin.getUsername()) != 1
                && user_repository.isUserExistByUsername(admin.getUsername()) != 1) {
            if(admin_repository.isAdminExistByEmail(admin.getEmail()) != 1
                    && user_repository.isUserExistByEmail(admin.getEmail()) != 1) {
                admin_repository.insertAdmin(
                        admin.getName(),
                        admin.getUsername(),
                        admin.getPassword(),
                        admin.getCity(),
                        admin.getZipcode(),
                        admin.getContact_no(),
                        admin.getEmail(),
                        false);
                return "Admin account created Successfully";
            }
            return "Email already exist";
        }
        return "Username already exist";
    }

    //working
    @Transactional
    @GetMapping(value="/{id}")
    public Optional<AdminColumnLimited> findByAdminID(@PathVariable long id) {
            return admin_repository.findByAdminID(id).map(user -> admin_repository.findByAdminID(id))
                .orElseThrow(() -> new ResourceNotFoundException("AdminID " + id + " not found"));
    }

    //working
    @Transactional
    @PutMapping("/updateadmin/{id}")
    public String updateAdmin(@PathVariable long id, @Valid @RequestBody Admin adminRequest) {
        if(admin_repository.isAdminExistByAdminID(id) == 1) {
            admin_repository.updateAdminDetails(adminRequest.getName(), adminRequest.getCity(), adminRequest.getZipcode(), adminRequest.getContact_no(), adminRequest.getEmail(), id);
            return "Update successful";
        }
        return "AdminID " + id + " not found";
    }
    
//    10 Constraint: Admin can update vaccine slots and then the number of available vaccines vaccines should decrease with each shot
//    Context Admin :: updateInventory()
//    Pre: self.R5.no_of_vaccines>self.R6.no_of_slots
//    Post: self.R5.no_of_vaccines> self.R5.no_of_vaccines@pre AND
//    Self.R5.no_of_vaccines@pre - (self.R6.no_of_slots- collect(self.R6.available_slots)->sum())
    
    public String updateInventory(@PathVariable Long no_of_vac) {
    	
    	if(vacsec_repository.numberOfVaccines(no_of_vac)!=1) {
    		admin_repository.updateInventory(no_of_vac);
    	}
    	return "Updated inventory";
    	
    }
}
