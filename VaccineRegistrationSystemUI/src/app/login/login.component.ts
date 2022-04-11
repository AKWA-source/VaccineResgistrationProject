import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  uloading = false;
  aloading = false;
  submitted = false;
  returnUrl: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


    // for accessing to form fields
    get fval() { return this.loginForm.controls; }

    userlogin(){
      this.uloading = true;  
      this.router.navigate(['/userhome']);    
    }
    
    adminlogin(){
      this.aloading = true;
      this.router.navigate(['/adminhome']);      
    }
  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  }
}
