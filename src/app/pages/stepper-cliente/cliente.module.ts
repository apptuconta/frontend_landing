import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { SeleccionarActividadMonoComponent } from './alta-monotributo/seleccionar-actividad-mono/seleccionar-actividad-mono.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VentasMonotributoComponent } from './alta-monotributo/ventas-monotributo/ventas-monotributo.component';
import { IdentificarseComponent } from './identificarse/identificarse.component';
import { FormDatosPersonalesComponent } from './form-datos-personales/form-datos-personales.component';

@NgModule({
  declarations: [SeleccionarActividadMonoComponent, VentasMonotributoComponent, IdentificarseComponent, FormDatosPersonalesComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ClienteModule {}
