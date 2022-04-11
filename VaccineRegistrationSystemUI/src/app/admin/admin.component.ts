import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  uploadForm: FormGroup;
  uploading = false;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      vaccinename: ['', Validators.required],
      doses: ['', Validators.required],
      vaccinetype: ['', Validators.required],
      dateofpurchase: ['',Validators.required],
      description: ['',Validators.required]
    });

  }
  get fval() { return this.uploadForm.controls; };


  onUpload(){
    this.uploading=true;
  }
    onFormSubmit() {
    this.submitted = true;
    if (this.uploadForm.invalid) {
      return;
    };
    alert("Inventory updated");
    this.uploadForm = this.formBuilder.group({
      vaccinename: [''],
      doses: [''],
      vaccinetype: [''],
      dateofpurchase: [''],
      description: ['']
    });
  }
  
}
