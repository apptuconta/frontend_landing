import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PreguntasFrecuentesRoutingModule } from './preguntas-frecuentes-routing.module';
import { InternaPreguntaComponent } from './interna-pregunta/interna-pregunta.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes.component';

@NgModule({
  declarations: [InternaPreguntaComponent, PreguntasFrecuentesComponent],
  imports: [CommonModule, PreguntasFrecuentesRoutingModule],
})
export class PreguntasFrecuentesModule {}
