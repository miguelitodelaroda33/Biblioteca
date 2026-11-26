import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { NoEncontrado } from './paginas/no-encontrado/no-encontrado';
import { authGuard } from './guards/auth-guard';
import { libroResolver, tituloLibroResolver } from './resolvers/libro-resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', title: 'Inicio | Biblioteca', component: Inicio },
  {
    path: 'libros',
    title: 'Catálogo de Libros | Biblioteca',
    loadComponent: () => import('./paginas/libros/libros').then((m) => m.Libros)
  },
  {
    path: 'libros/:id',
    title: tituloLibroResolver,
    resolve: { libro: libroResolver },
    loadComponent: () =>
      import('./paginas/libro-detalle/libro-detalle').then((m) => m.LibroDetalle)
  },
  {
    path: 'autores',
    title: 'Autores | Biblioteca',
    loadComponent: () => import('./paginas/autores/autores').then((m) => m.Autores)
  },
  {
    path: 'login',
    title: 'Iniciar Sesión | Biblioteca',
    loadComponent: () => import('./paginas/login/login').then((m) => m.Login)
  },
  {
    path: 'mi-cuenta',
    loadChildren: () =>
      import('./paginas/mi-cuenta/mi-cuenta.routes').then((m) => m.MI_CUENTA_ROUTES)
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./paginas/admin/admin.routes').then((m) => m.ADMIN_ROUTES)
  },
  { path: '**', title: 'Página no encontrada | Biblioteca', component: NoEncontrado }
];