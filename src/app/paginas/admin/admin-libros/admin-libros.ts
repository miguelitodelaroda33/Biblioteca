import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LibrosService } from '../../../servicios/libros';

@Component({
  selector: 'app-admin-libros',
  imports: [RouterLink],
  templateUrl: './admin-libros.html',
  styleUrl: './admin-libros.css'
})
export class AdminLibros {
  private librosService = inject(LibrosService);
  libros = this.librosService.obtenerTodos();
}