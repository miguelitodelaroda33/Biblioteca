import { CanDeactivateFn } from '@angular/router';

export interface PuedeSalir {
  tieneCambiosSinGuardar: () => boolean;
}

export const cambiosSinGuardarGuard: CanDeactivateFn<PuedeSalir> = (component) => {
  if (component.tieneCambiosSinGuardar()) {
    return confirm('Tienes cambios sin guardar en el título. ¿Seguro que quieres salir?');
  }
  return true;
};