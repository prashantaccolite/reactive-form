import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor() { }

  profileForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',{validators: [Validators.required, Validators.email], updateOn: 'blur'}),
    bio: new FormControl('',[Validators.required]),
    domain: new FormControl('',[Validators.required]),
  });

  data:any;

  onSubmit() {
    this.data = this.profileForm.value;
    this.profileForm.reset();
  }

get name()
{
  return this.profileForm.get('name')
}

get email()
{
  return this.profileForm.get('email')
}
get bio()
{
  return this.profileForm.get('bio')
}

get domain()
{
  return this.profileForm.get('domain')
}


}
