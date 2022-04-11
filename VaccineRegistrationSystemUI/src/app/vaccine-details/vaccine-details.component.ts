import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vaccine-details',
  templateUrl: './vaccine-details.component.html',
  styleUrls: ['./vaccine-details.component.css']
})
export class VaccineDetailsComponent implements OnInit {
vaccineData = [{vaccineName: 'Pfizer', Availability: 'Yes', Description: 'For people aged 5 years and above', vaccineType: 'mRNA'}
,{vaccineName: 'Moderna', Availability: 'Yes', Description: 'For people aged 5 years and above', vaccineType: 'mRNA'}
,{vaccineName: 'AstraZeneca', Availability: 'Yes', Description: 'For people aged 18 years and above', vaccineType: 'viral vector'}
,{vaccineName: 'J&J', Availability: 'Yes', Description: 'For people aged 18 years and above', vaccineType: 'viral vector'}]

vaccCenter = [{centerAddress: 'Jean-Talon', openTime: '9:00 AM', closeTime: '6:00 PM', vaccineCount: '200'}
,{centerAddress: 'Parc', openTime: '9:00 AM', closeTime: '6:00 PM', vaccineCount: '200'}
,{centerAddress: 'Pie XIV', openTime: '9:00 AM', closeTime: '6:00 PM', vaccineCount: '150'}
,{centerAddress: 'Queen Mary', openTime: '9:00 AM', closeTime: '6:00 PM', vaccineCount: '150'}
]

vaccineDataCols: string[] = ['vaccineName','Availability','Description','vaccineType']
vaccinecenterCols: string[] = ['centerAddress','openTime','closeTime','vaccineCount']
  constructor() { }

  ngOnInit(): void {
  }

}

