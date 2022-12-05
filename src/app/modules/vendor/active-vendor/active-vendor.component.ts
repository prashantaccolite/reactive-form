import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  profileOutput:any;
  hasSubmitted=false;
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    bio: new FormControl(''),
    domain: new FormControl('')
  })
  constructor() { }

  submit() {
    console.warn(this.profileForm.value);
    this.profileOutput = this.profileForm.value;
    this.hasSubmitted = true;
  }

  ngOnInit(): void {
  }

  FocusOut(formControl:any) {
      console.log(formControl)
  }

}
