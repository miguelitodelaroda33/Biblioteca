import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LibrosService } from '../../servicios/libros';

@Component({
  selector: 'app-libros',
  imports: [RouterLink],
  templateUrl: './libros.html',
  styleUrl: './libros.css'
})
export class Libros {
  private librosService = inject(LibrosService);

  // Recibe el query param ?genero=... gracias a withComponentInputBinding()
  genero = input<string>();

  librosFiltrados = computed(() => this.librosService.obtenerTodos(this.genero()));
}