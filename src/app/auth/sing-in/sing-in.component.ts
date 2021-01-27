import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {
  singInForm: FormGroup = new FormGroup({
    email: new FormControl('admin3@gmail.com', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('admin1234', Validators.compose([
      Validators.required,
      Validators.minLength(8)]))
  })

  get email() { return this.singInForm.controls['email']; }
  get password() { return this.singInForm.controls['password']; }

  error: string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
    this.error = '';
  }

  login() {
    if(!this.singInForm.valid){
      return;
    }

    this.authService.login(this.email.value, this.password.value)
      .subscribe((res) => {
        this.router.navigate(['/sing-up']);
      },
      (error) =>{
        this.error = error.message;
      });
  }
}
