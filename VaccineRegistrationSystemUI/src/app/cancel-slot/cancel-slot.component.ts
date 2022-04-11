import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  bookingID: string;
  registrationDate: string;
  registrationTime: string;
  clinicAddress: string;
  doseNumber: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {bookingID: '101', registrationDate: '4/5/2022', registrationTime: '11:00', clinicAddress: 'Jean-Talon', doseNumber: '1'},
  {bookingID: '102', registrationDate: '4/8/2022', registrationTime: '12:00', clinicAddress: 'Parc', doseNumber: '2'}
];

@Component({
  selector: 'app-cancel-slot',
  templateUrl: './cancel-slot.component.html',
  styleUrls: ['./cancel-slot.component.css']
})
export class CancelSlotComponent implements OnInit {
  displayedColumns: string[] = ['checked','bookingID', 'registrationDate', 'registrationTime', 'clinicAddress','doseNumber'];
  dataSource = ELEMENT_DATA;
  constructor(private  router: Router) {
  }
  isChecked = false;
    checkuncheckall()
    {
    if(this.isChecked == true)
    {
    this.isChecked = false;
    }
    else
    {
    this.isChecked = true;
    }
    }
  ngOnInit() {

  }

  cancelSlot(value){
    if(confirm('Cancel the slot?')){
      this.dataSource = this.dataSource.filter(u => u.bookingID !== value);
      alert('Slot cancelled successfully!')
    }
  }
    
}
