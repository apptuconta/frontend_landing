import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BuscarContadorComponent } from './pages/stepper-cliente/buscar-contador/buscar-contador.component';
import { RegistrarContadorComponent } from './pages/soy-contador/registrar-contador/registrar-contador.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'cliente',
    loadChildren: () =>
      import('./pages/stepper-cliente/cliente.module').then(
        (m) => m.ClienteModule
      ),
  },
  /*  { path: 'nuevo-cliente', component: NuevoClienteComponent },
  { path: 'buscar-contador', component: BuscarContadorComponent },
  { path: 'registrar-contador', component: RegistrarContadorComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
