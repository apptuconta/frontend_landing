import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionarNecesidadComponent } from './seleccionar-necesidad/seleccionar-necesidad.component';
import { AvisoComponent } from './aviso/aviso.component';
import { SeleccionarActividadMonoComponent } from './alta-monotributo/seleccionar-actividad-mono/seleccionar-actividad-mono.component';
import { VentasMonotributoComponent } from './alta-monotributo/ventas-monotributo/ventas-monotributo.component';
import { IdentificarseComponent } from './identificarse/identificarse.component';
import { FormDatosPersonalesComponent } from './form-datos-personales/form-datos-personales.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SeleccionarNecesidadComponent,
      },
      {
        path: 'aviso',
        component: AvisoComponent,
      },
      {
        path: 'seleccionar-actividad-mono',
        component: SeleccionarActividadMonoComponent,
      },
      {
        path: 'ventas-monotributo',
        component: VentasMonotributoComponent,
      },
      {
        path: 'identificacion',
        component: IdentificarseComponent,
      },
      {
        path: 'datos-personales',
        component: FormDatosPersonalesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
