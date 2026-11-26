import { Injectable } from '@angular/core';

export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
}

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private libros: Libro[] = [
    { id: 1, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', genero: 'novela' },
    { id: 2, titulo: 'Dune', autor: 'Frank Herbert', genero: 'ciencia-ficcion' },
    { id: 3, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', genero: 'novela' },
    { id: 4, titulo: 'Fundación', autor: 'Isaac Asimov', genero: 'ciencia-ficcion' },
    { id: 5, titulo: 'El nombre de la rosa', autor: 'Umberto Eco', genero: 'misterio' },
    { id: 6, titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', genero: 'misterio' }
  ];

  obtenerTodos(genero?: string): Libro[] {
    if (!genero) {
      return this.libros;
    }
    return this.libros.filter(
      (libro) => libro.genero.toLowerCase() === genero.toLowerCase()
    );
  }

  obtenerPorId(id: number): Libro | undefined {
    return this.libros.find((libro) => libro.id === id);
  }

  idSiguiente(idActual: number): number {
    const indice = this.libros.findIndex((libro) => libro.id === idActual);
    if (indice === -1 || indice === this.libros.length - 1) {
      return this.libros[0].id;
    }
    return this.libros[indice + 1].id;
  }

  actualizarTitulo(id: number, nuevoTitulo: string): void {
    const libro = this.obtenerPorId(id);
    if (libro && nuevoTitulo.trim()) {
      libro.titulo = nuevoTitulo.trim();
    }
  }
}