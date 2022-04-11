import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  editProfileForm: FormGroup;
  hide=true;
  change=false;
  ngOnInit(): void {
    this.editProfileForm = this.formBuilder.group({
      userid: [{value:'1',disabled:true},Validators.required],
      city: [{value:'Montreal',disabled:false},Validators.required],
      zipcode: [{value:'H3H2L3',disabled:false},Validators.required],
      contact_no: [{value:'5141234567',disabled:false},Validators.required],
      email: [{value:'suhani.joshi@gmail.com',disabled:false},Validators.required],
      name: [{value:'Suhani Joshi',disabled:false},Validators.required],
      username: [{value:'s_joshi',disabled:true},Validators.required], 
      age: [{value:'20',disabled:false},Validators.required], 
      password: [{value:'suhani123',disabled:false},Validators.required], 
    });
  }
  get fval() { return this.editProfileForm.controls; }
  onFormSubmit(){}
  onUpload(){
    if (this.editProfileForm.invalid) {
      alert('Please fill the details to update!');
      return;
    }
    else{
      if(this.change){
        alert('Profile Updated successfully!');
      }
      else{
        alert('None of the fileds are updated!')
      }     
    }
  }
  capturechange(){
    this.change=true;
    console.log(this.change);
  }
  onSearchChange(searchValue: string): void {  
    console.log(searchValue);
  }

}
