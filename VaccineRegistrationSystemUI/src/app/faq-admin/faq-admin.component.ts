import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-faq-admin',
  templateUrl: './faq-admin.component.html',
  styleUrls: ['./faq-admin.component.css']
})
export class FAQAdminComponent implements OnInit {
  faqForm: FormGroup;
  uploading = false;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.faqForm = this.formBuilder.group({
      question: ['', Validators.required],
      answer: ['', Validators.required]
    });

  }
  get fval() { return this.faqForm.controls; };


  onUpload(){
    this.uploading=true;
  }
    onFormSubmit() {
    this.submitted = true;
    if (this.faqForm.invalid) {
      return;
    };
    alert("FAQs updated");
    this.faqForm = this.formBuilder.group({
      question: [''],
      answer: ['']
    });
  }
  
}
