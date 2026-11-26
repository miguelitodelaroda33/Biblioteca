import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Libro, LibrosService } from '../../servicios/libros';

@Component({
  selector: 'app-libro-detalle',
  imports: [RouterLink],
  templateUrl: './libro-detalle.html',
  styleUrl: './libro-detalle.css'
})
export class LibroDetalle {
  private librosService = inject(LibrosService);
  private router = inject(Router);

  // Recibe el dato resuelto por libroResolver gracias a withComponentInputBinding()
  libro = input.required<Libro>();

  siguienteLibro(): void {
    const siguienteId = this.librosService.idSiguiente(this.libro().id);
    this.router.navigate(['/libros', siguienteId]);
  }

  irAMiCuenta(): void {
    this.router.navigateByUrl('/mi-cuenta');
  }
}