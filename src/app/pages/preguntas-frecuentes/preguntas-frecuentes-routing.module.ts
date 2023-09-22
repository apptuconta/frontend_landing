import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes.component';
import { InternaPreguntaComponent } from './interna-pregunta/interna-pregunta.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PreguntasFrecuentesComponent,
      },
      {
        path: 'interna-contador',
        component: InternaPreguntaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreguntasFrecuentesRoutingModule {}
