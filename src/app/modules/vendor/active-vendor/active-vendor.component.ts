import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  profileForm = this.fb.group({
    name : ['', Validators.required], 
    email : ['', Validators.required],
    bio : ['', Validators.required],
    domain : ['', Validators.required]
  })

  get name(){
    return this.profileForm.get('name')
  }
  get email(){
    return this.profileForm.get('email')
  }
  get bio(){
    return this.profileForm.get('bio')
  }
  get domain(){
    return this.profileForm.get('domain')
  }
  myVal!:any
  onSubmit(){
    this.myVal=this.profileForm.value
    this.profileForm.reset()
  }
}

