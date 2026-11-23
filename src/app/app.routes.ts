import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Libros } from './paginas/libros/libros';
import { Autores } from './paginas/autores/autores';
import { NoEncontrado } from './paginas/no-encontrado/no-encontrado';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'libros', component: Libros },
  { path: 'autores', component: Autores },
  { path: '**', component: NoEncontrado } // Ruta comodín siempre al final
];