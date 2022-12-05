import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface person{
  name:string,
  username:string,
  bio:string,
  domain:string
}

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor() { }

  user!:FormGroup;
  displayUser!: person;
  nameFocused: boolean = false;
  usernameFocused: boolean = false;
  bioFocused: boolean = false;
  domainFocused: boolean = false;

  ngOnInit(): void {
    this.user = new FormGroup({
      fname: new FormControl("",[Validators.required]),
      username: new FormControl("",[Validators.required]),
      bio: new FormControl("",[Validators.required]),
      domain: new FormControl("",[Validators.required])
    });
  }

  printObject(){
    this.displayUser = {name:this.user.get("fname")?.value, username:this.user.get("username")?.value,
    bio:this.user.get("bio")?.value, domain:this.user.get("domain")?.value};
  }

  setNameFocused(){
    this.nameFocused = true;
  }

  setUsernameFocused(){
    this.usernameFocused = true;
  }

  setBioFocused(){
    this.bioFocused = true;
  }
  
  setDomainFocused(){
    this.domainFocused = true;
  }

}
