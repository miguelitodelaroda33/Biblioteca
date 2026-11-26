import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { Libro, LibrosService } from '../servicios/libros';

export const libroResolver: ResolveFn<Libro> = (route) => {
  const librosService = inject(LibrosService);
  const router = inject(Router);
  const id = Number(route.paramMap.get('id'));
  const libro = librosService.obtenerPorId(id);

  if (!libro) {
    return new RedirectCommand(router.parseUrl('/libros'));
  }

  return libro;
};

export const tituloLibroResolver: ResolveFn<string> = (route) => {
  const librosService = inject(LibrosService);
  const id = Number(route.paramMap.get('id'));
  const libro = librosService.obtenerPorId(id);

  return libro ? `${libro.titulo} | Biblioteca` : 'Detalle de libro | Biblioteca';
};