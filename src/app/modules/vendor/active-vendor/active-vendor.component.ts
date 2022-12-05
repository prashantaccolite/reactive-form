import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {
  formObject= {name:"name",email:"email",bio:"bio",domain:"domain"};
  userForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
      bio: new FormControl('', [
        Validators.required,
      ]),
      domain: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  submit(){
    this.formObject.name = this.userForm.get('name')?.value;
    this.formObject.email = this.userForm.get('email')?.value;
    this.formObject.bio = this.userForm.get('bio')?.value;
    this.formObject.domain = this.userForm.get('domain')?.value;
  }

  focusOutName(){
    if (!this.userForm.get('name')?.valid){
      const name = document.getElementById('fname');
      if (name != null){
        name.style.borderColor = 'red';
      }
      const error = document.getElementById('fnameError')
      if (error != null){
        error.innerHTML = 'Name is required';
      }
    }
  }

  focusOutEmail(){
    if (!this.userForm.get('email')?.valid){
      const name = document.getElementById('email');
      if (name != null){
        name.style.borderColor = 'red';
      }
      const error = document.getElementById('emailError')
      if (error != null){
        error.innerHTML = 'Email is required';
      }
    }
  }

  focusOutBio(){
    if (!this.userForm.get('bio')?.valid){
      const name = document.getElementById('bio');
      if (name != null){
        name.style.borderColor = 'red';
      }
      const error = document.getElementById('bioError')
      if (error != null){
        error.innerHTML = 'Bio is required';
      }
    }
  }

  focusOutDomain(){
    if (!this.userForm.get('domain')?.valid){
      const name = document.getElementById('domain');
      if (name != null){
        name.style.borderColor = 'red';
      }
      const error = document.getElementById('domainError')
      if (error != null){
        error.innerHTML = 'Domain is required';
      }
    }
  }

  



}
