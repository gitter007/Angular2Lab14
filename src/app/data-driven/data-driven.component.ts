import { Component,OnInit } from '@angular/core';
import { ValidationService } from './validation.service';
import { JSONService } from '../json.service';
import { JSONPostService } from '../json.servicePost';
import { MypostComponent } from '../mypost.component';


import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html',
  providers: [ JSONService ]
})
export class DataDrivenComponent implements OnInit{
  myForm: FormGroup;
  tempName:any;
  posts: any[];
  constructor(private formBuilder: FormBuilder, public jsonservice:JSONService, 
  public jsonPostService:JSONPostService) {

    this.myForm = formBuilder.group({
      'searchTerm': ['', []],
      'postData': ['', [Validators.required, Validators.minLength(10)]]
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log('yes')
    );
  }

    ngOnInit() {
        this.onGetJSON();
  }

  onGetJSON(){
     //console.log(this.myForm);
    // this.jsonservice.getjsons().then(jlist => {

    //   this.myForm.controls['username'].patchValue(jlist['username']);
    //   this.myForm.controls['email'].patchValue(jlist['email']);
    // });
    this.jsonPostService.getjsons().then(jlist => {
      //Since in 'http://jsonplaceholder.typicode.com/posts?userId=1'
      //many post we're getting body of first json.
      // jlist.forEach(element => {
      //   //console.log(element['body']);
      //   this.posts.push(JSON.stringify(element));
      // });
     // this.posts =jlist;
     console.log(jlist);
      jlist = jlist['body'];
      console.log(jlist);
    });
  }


}
