import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorRoutingModule } from './contador-routing.module';
import { ContadorDatosPersonalesComponent } from './contador-datos-personales/contador-datos-personales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContadorDatosProfesionalesComponent } from './contador-datos-profesionales/contador-datos-profesionales.component';
import { ContadorSeleccionarServiciosComponent } from './contador-seleccionar-servicios/contador-seleccionar-servicios.component';
import { ContadorFinalizarRegistroComponent } from './contador-finalizar-registro/contador-finalizar-registro.component';

@NgModule({
  declarations: [ContadorDatosPersonalesComponent, ContadorDatosProfesionalesComponent, ContadorSeleccionarServiciosComponent, ContadorFinalizarRegistroComponent],
  imports: [
    CommonModule,
    ContadorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ContadorModule {}
