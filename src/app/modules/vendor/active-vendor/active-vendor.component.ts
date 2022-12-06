import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  profileOutput:any;
  hasSubmitted=false;
  FormShowsError= new Map<String, boolean>();
  profileForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    bio: new FormControl(),
    domain: new FormControl()
  })
  submit() {
    this.profileOutput = this.profileForm.value;
    this.hasSubmitted = true;
  }

  ngOnInit(): void {
    this.FormShowsError.set("name",false);
    this.FormShowsError.set("email",false);
    this.FormShowsError.set("bio",false);
    this.FormShowsError.set("domain",false);


  }

  ShowErrorIfNullableInvalid(formName:any) {
      let formToCheck = this.profileForm.get(formName) as AbstractControl;
      if (formToCheck.invalid){this.FormShowsError.set(formName,true)}
      else {this.FormShowsError.set(formName,false)}
      console.log(this.FormShowsError)
  }

  ShowErrorFor(formName:string) {
      console.log(formName)


  }
}
