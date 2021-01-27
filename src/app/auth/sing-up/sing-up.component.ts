import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {
  
  signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4)
    ])),
    secondName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4)
    ])),
    birthday: new FormControl('', Validators.required),
    email: new FormControl('',  Validators.compose([
      Validators.required, 
      Validators.email
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8)
    ])),
    role: new FormControl('user')
  });

  get firstName() { return this.signUpForm.controls['firstName']; }
  get secondName() { return this.signUpForm.controls['secondName']; }
  get birthday() { return this.signUpForm.controls['birthday']; }
  get email() { return this.signUpForm.controls['email']; }
  get password() { return this.signUpForm.controls['password']; }

  error: string;

  constructor(
    public userService: UserService,
    private router: Router
  ) {
    this.error = '';
  }

  registration() {
    if (!this.signUpForm.valid) {
      return;
    }

    this.userService.post(this.signUpForm.value);
    this.router.navigate(['sing-in']);
  }
}
