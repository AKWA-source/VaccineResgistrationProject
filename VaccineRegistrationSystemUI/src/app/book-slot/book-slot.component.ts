import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface BookSlot {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.css']
})

export class BookSlotComponent implements OnInit {
  minDate = new Date();
  minFirstDate = new Date();
  registrationTime: BookSlot[] = [
    {value: 'time1', viewValue: '9:00 AM'},
    {value: 'time2', viewValue: '10:00 AM'},
    {value: 'time3', viewValue: '11:00 AM'},
    {value: 'time4', viewValue: '12:00 PM'},
    {value: 'time5', viewValue: '1:00 PM'},
  ];
  clinicAdd: BookSlot[] = [
    {value: 'add1', viewValue: 'Jean-Talon'},
    {value: 'add2', viewValue: 'Pie XIV'},
    {value: 'add3', viewValue: 'Parc'},
    {value: 'add4', viewValue: 'Queen Mary'},
  ];
  Dosage: BookSlot[] = [
    {value: 'dose1', viewValue: 'First Dose'},
    {value: 'dose2', viewValue: 'Second Dose'},
  ];
  constructor(
    private router: Router,
    private datepicker: MatDatepickerModule,
    private formBuilder: FormBuilder
    ) { this.minFirstDate = new Date(new Date().setDate(this.minFirstDate.getDate() - 28));}
    bookslotForm: FormGroup;
    booking = false;
    submitted = false;
    

  ngOnInit(): void { 
    this.bookslotForm = this.formBuilder.group({
      regDate: ['', Validators.required],
      regTime: ['', Validators.required],
      clinicAdd: ['', Validators.required],
      dosage: ['', Validators.required],
      firstDate: [''],
    });   
    this.bookslotForm.controls.dosage.valueChanges.subscribe(val =>{this.setDose(val)});
  }

  get fval() { return this.bookslotForm.controls; }

  setDose(val: String){
    console.log(val);
    if (val === 'dose2') {
      this.fval.firstDate.setValidators([Validators.required]);
    } else {
      this.fval.firstDate.clearValidators();
    }
  }
  onUpload(){
      this.booking=true;
     } 
  
    onFormSubmit() {
    this.submitted = true;
    if (this.bookslotForm.invalid) {
      return;
    }
    else{
    alert("Slot booked successfully")
    this.bookslotForm = this.formBuilder.group({
      regDate: [''],
      regTime: [''],
      clinicAdd: [''],
      dosage: [''],
      firstDate: ['']
    });
    }
    
  }
 
}
