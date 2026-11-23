import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LibrosService } from '../../servicios/libros';

@Component({
  selector: 'app-libro-detalle',
  imports: [RouterLink],
  templateUrl: './libro-detalle.html',
  styleUrl: './libro-detalle.css'
})
export class LibroDetalle {
  private librosService = inject(LibrosService);
  private router = inject(Router);

  // Recibe :id de la ruta y lo convierte con Number()
  id = input.required<string>();
  libro = computed(() => this.librosService.obtenerPorId(Number(this.id())));

  siguienteLibro(): void {
    const siguienteId = this.librosService.idSiguiente(Number(this.id()));
    this.router.navigate(['/libros', siguienteId]);
  }

  irAMiCuenta(): void {
    this.router.navigateByUrl('/mi-cuenta');
  }
}