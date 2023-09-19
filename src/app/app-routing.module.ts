import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BuscarContadorComponent } from './pages/stepper-cliente/buscar-contador/buscar-contador.component';
import { RegistrarContadorComponent } from './pages/stepper-contador/registrar-contador/registrar-contador.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'stepper',
    loadChildren: () =>
      import('./pages/stepper/stepper.module').then((m) => m.StepperModule),
  },
  {
    path: 'cliente',
    loadChildren: () =>
      import('./pages/stepper-cliente/cliente.module').then(
        (m) => m.ClienteModule
      ),
  },
  {
    path: 'contador',
    loadChildren: () =>
      import('./pages/stepper-contador/contador.module').then(
        (m) => m.ContadorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
