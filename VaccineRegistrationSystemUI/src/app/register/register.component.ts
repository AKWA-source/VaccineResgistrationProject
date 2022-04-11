import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      Name: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      zipcode: ['', [Validators.required]],
      age: ['', [Validators.required]]
  });
  }

  get fval() { return this.registerForm.controls; }

  onFormSubmit(){
    this.submitted = true;
    // return for here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
        alert('User Registered successfully!!');
        this.router.navigate(['/login']);
  }

}
