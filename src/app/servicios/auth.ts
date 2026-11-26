import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logueado = signal(false);
  estaLogueado = this.logueado.asReadonly();

  login(): void {
    this.logueado.set(true);
  }

  logout(): void {
    this.logueado.set(false);
  }
}