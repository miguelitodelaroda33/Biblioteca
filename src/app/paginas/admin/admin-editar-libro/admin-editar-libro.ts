import { Component, computed, inject, input, linkedSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LibrosService } from '../../../servicios/libros';
import { PuedeSalir } from '../../../guards/cambios-sin-guardar-guard';

@Component({
  selector: 'app-admin-editar-libro',
  imports: [FormsModule, RouterLink],
  templateUrl: './admin-editar-libro.html',
  styleUrl: './admin-editar-libro.css'
})
export class AdminEditarLibro implements PuedeSalir {
  private librosService = inject(LibrosService);
  private router = inject(Router);

  id = input.required<string>();
  libro = computed(() => this.librosService.obtenerPorId(Number(this.id())));

  // linkedSignal inicializa el campo con el título actual del libro y se resetea si cambia el libro
  tituloEditado = linkedSignal(() => this.libro()?.titulo ?? '');

  tieneCambiosSinGuardar(): boolean {
    const actual = this.libro();
    if (!actual) return false;
    return this.tituloEditado().trim() !== actual.titulo;
  }

  guardar(): void {
    const actual = this.libro();
    if (!actual) return;

    this.librosService.actualizarTitulo(actual.id, this.tituloEditado());
    // Al actualizarse actual.titulo, tieneCambiosSinGuardar() pasa a false y deja salir sin alerta
    this.router.navigate(['/admin/libros']);
  }
}