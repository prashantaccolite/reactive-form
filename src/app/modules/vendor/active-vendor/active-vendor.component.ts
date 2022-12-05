import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss'],
})
export class ActiveVendorComponent implements OnInit {

  vendorActiveForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.vendorActiveForm = this.formBuilder.group({
      name : ['', {validators: [Validators.required], updateOn: 'blur'}],
      email : ['', {validators: [Validators.required], updateOn: 'blur'}],
      bio : ['', {validators: [Validators.required], updateOn: 'blur'}],
      domain : ['', {validators: [Validators.required], updateOn: 'blur'}]
    });
  }

  get name(){ return this.vendorActiveForm.get('name');}
  get email(){ return this.vendorActiveForm.get('email');}
  get bio(){ return this.vendorActiveForm.get('bio');}
  get domain(){ return this.vendorActiveForm.get('domain');}

  onSubmit(){
    const submitText = document.getElementById("vendorDetails");
    if (submitText !=undefined){
      submitText.innerHTML = "<div>(name: " + this.vendorActiveForm.get("name")?.value + ", email: " + this.vendorActiveForm.get("email")?.value + ", bio: " + this.vendorActiveForm.get("bio")?.value + ", domain: " + this.vendorActiveForm.get("domain")?.value + ")</div>";
    }
  }

}
