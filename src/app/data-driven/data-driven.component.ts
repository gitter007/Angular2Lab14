import { Component } from '@angular/core';
import { ValidationService } from './validation.service';

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
  templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.myForm = formBuilder.group({

      'username': ['', [Validators.required]],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'postData': ['', [Validators.required, Validators.minLength(10)]]
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  // onAddHobby() {
  //   (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required, this.asyncExampleValidator));
  // }

  onSubmit() {
    console.log(this.myForm);
  }

  // exampleValidator(control: FormControl): {[s: string]: boolean} {
  //   if (control.value === 'Example') {
  //     return {example: true};
  //   }
  //   return null;
  // }

  // asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>(
  //     (resolve, reject) => {
  //       setTimeout(() => {
  //         if (control.value === 'Example') {
  //           resolve({'invalid': true});
  //         } else {
  //           resolve(null);
  //         }
  //       }, 1500);
  //     }
  //   );
  //   return promise;
  // }

}
