import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  // Lee returnUrl=... automáticamente
  returnUrl = input<string>();

  iniciarSesion(): void {
    this.authService.login();
    const destino = this.returnUrl() || '/admin';
    this.router.navigateByUrl(destino);
  }
}