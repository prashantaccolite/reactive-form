import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor(private fb : FormBuilder){}

  activeVendorForm = this.fb.group({
    Name : ['',Validators.required],
    Email : ['',[Validators.required, Validators.email]],
    Bio :['',Validators.required],
    Domain : ['',Validators.required] 
  })

data : any;
  ngOnInit(): void {
  }

  onSubmit(){
    this.data = this.activeVendorForm.value;
    this.activeVendorForm.reset;
  }

}
