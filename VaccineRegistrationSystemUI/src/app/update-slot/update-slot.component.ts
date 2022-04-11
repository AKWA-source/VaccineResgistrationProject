import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import {switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface PeriodicElement {
  bookingID: string;
  registrationDate: string;
  registrationTime: string;
  clinicAddress: string;
  doseNumber: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {bookingID: '101', registrationDate: '4/5/2022', registrationTime: '11:00', clinicAddress: 'Jean-Talon', doseNumber: '1'}
];
export interface BookSlot {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update-slot',
  templateUrl: './update-slot.component.html',
  styleUrls: ['./update-slot.component.css']
})
export class UpdateComponent implements OnInit {
  displayedColumns: string[] = ['bookingID', 'registrationDate', 'registrationTime', 'clinicAddress','doseNumber'];
  dataSource = ELEMENT_DATA;
  edit = false;
  minDate = new Date();
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
  ];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private datepipe: DatePipe
  ) { }
  updateslotForm: FormGroup; 
  ngOnInit() { 
    this.updateslotForm = this.formBuilder.group({
      regDate: ['',Validators.required],
      regTime: ['',Validators.required],
      clinicAddr: ['',Validators.required],
})
  }
get fval() { return this.updateslotForm.controls; }

editSlot(){
  this.edit=true;
}
onUpload(){
  if (this.updateslotForm.invalid) {
    alert('Please fill the details!')
    return;   
  }
  else{
    alert('Slot Updated Successfully!!')
  }
  for(const val of this.dataSource){
    val.registrationDate=this.datepipe.transform(this.fval.regDate.value, 'M/dd/yyy');
    val.registrationTime=this.fval.regTime.value;
    val.clinicAddress=this.fval.clinicAddr.value;
  }
  this.edit=false;
  this.updateslotForm = this.formBuilder.group({
    regDate: [''],
    regTime: [''],
    clinicAddr: ['']
  });
}

}