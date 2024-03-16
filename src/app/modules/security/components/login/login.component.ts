import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SecurityService } from '../../services/security.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  successLogin: boolean = false;
  errorLogin: boolean = false;

  constructor(
    public loginFormBuilder: FormBuilder,
    private securityService: SecurityService,
    private router:Router
  ) {}

  ngOnInit() {
    this.loginForm = this.loginFormBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.securityService.login(this.loginForm.value).subscribe(
        (response) => {
          console.log(response);
          this.successLogin = true;
          sessionStorage.setItem('token', response.token);
          location.reload();
        },
        (error) => {
          this.errorLogin = true;
          console.log(error);
        }
      );
    }
  }
}
