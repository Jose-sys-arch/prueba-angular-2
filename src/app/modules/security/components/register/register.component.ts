import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(
    public registerFormBuilder: FormBuilder,
    public secuityService: SecurityService
  ) {}

  ngOnInit() {
    this.registerForm = this.registerFormBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      password: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      fecha_nacimiento: ['', [Validators.required]],
      user_name: ['', [Validators.required]],
      rol: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      this.secuityService
        .register(this.registerForm.value)
        .subscribe((data) => {
          console.log(data);
          alert('Se registro el usuario');
        });
    }
  }
}
