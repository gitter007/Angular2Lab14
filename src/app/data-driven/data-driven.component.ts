import { Component } from '@angular/core';
import { ValidationService } from './validation.service';
import { JSONService } from '../json.service';
import { JSONPostService } from '../json.servicePost';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html',
  providers: [ JSONService ]
})
export class DataDrivenComponent {
  myForm: FormGroup;
  tempName:any;
  constructor(private formBuilder: FormBuilder, public jsonservice:JSONService, 
  public jsonPostService:JSONPostService) {

    this.myForm = formBuilder.group({

      'username': ['', [Validators.required]],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'postData': ['', [Validators.required, Validators.minLength(10)]]
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }


  onGetJSON(){
     //console.log(this.myForm);
    this.jsonservice.getjsons().then(jlist => {

      this.myForm.controls['username'].patchValue(jlist['username']);
      this.myForm.controls['email'].patchValue(jlist['email']);
    });
    this.jsonPostService.getjsons().then(jlist => {
      //Since in 'http://jsonplaceholder.typicode.com/posts?userId=1'
      //many post we're getting body of first json.
      this.myForm.controls['postData'].patchValue(jlist[0]['body']);
    });
  }
  onSubmit() {
    console.log(this.myForm);
  }


}
