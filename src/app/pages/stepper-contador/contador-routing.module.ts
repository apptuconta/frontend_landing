import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarContadorComponent } from './registrar-contador/registrar-contador.component';
import { ContadorDatosPersonalesComponent } from './contador-datos-personales/contador-datos-personales.component';
import { ContadorDatosProfesionalesComponent } from './contador-datos-profesionales/contador-datos-profesionales.component';
import { ContadorSeleccionarServiciosComponent } from './contador-seleccionar-servicios/contador-seleccionar-servicios.component';
import { ContadorFinalizarRegistroComponent } from './contador-finalizar-registro/contador-finalizar-registro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RegistrarContadorComponent,
      },
      {
        path: 'contador-datos-personales',
        component: ContadorDatosPersonalesComponent,
      },
      {
        path: 'contador-datos-profesionales',
        component: ContadorDatosProfesionalesComponent,
      },
      {
        path: 'contador-seleccionar-servicios',
        component: ContadorSeleccionarServiciosComponent,
      },
      {
        path: 'contador-finalizar-registro',
        component: ContadorFinalizarRegistroComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContadorRoutingModule {}
