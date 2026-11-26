import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { cambiosSinGuardarGuard } from '../../guards/cambios-sin-guardar-guard';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: Admin,
    children: [
      { path: '', redirectTo: 'libros', pathMatch: 'full' },
      {
        path: 'libros',
        title: 'Administrar Libros | Biblioteca',
        loadComponent: () =>
          import('./admin-libros/admin-libros').then((m) => m.AdminLibros)
      },
      {
        path: 'libros/:id/editar',
        title: 'Editar Libro | Biblioteca',
        canDeactivate: [cambiosSinGuardarGuard],
        loadComponent: () =>
          import('./admin-editar-libro/admin-editar-libro').then(
            (m) => m.AdminEditarLibro
          )
      }
    ]
  }
];