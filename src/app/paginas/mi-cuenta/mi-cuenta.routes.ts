import { Routes } from '@angular/router';
import { MiCuenta } from './mi-cuenta';

export const MI_CUENTA_ROUTES: Routes = [
  {
    path: '',
    component: MiCuenta,
    children: [
      { path: '', redirectTo: 'perfil', pathMatch: 'full' },
      {
        path: 'perfil',
        title: 'Mi Perfil | Biblioteca',
        loadComponent: () => import('../perfil/perfil').then((m) => m.Perfil)
      },
      {
        path: 'prestamos',
        title: 'Mis Préstamos | Biblioteca',
        loadComponent: () => import('../prestamos/prestamos').then((m) => m.Prestamos)
      }
    ]
  }
];