import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../service/Auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username = 'emilys';
  password = 'emilyspass';

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (data) => {
        this.router.navigate(['/apirest']);
      },
      error: (error) => {
        console.error('Error en el login');
        console.error(error);
      }
    });
  }
}
