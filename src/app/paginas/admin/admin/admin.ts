import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../servicios/auth';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  private authService = inject(AuthService);
  private router = inject(Router);

  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigateByUrl('/inicio');
  }
}