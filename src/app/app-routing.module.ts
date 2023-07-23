import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoClienteComponent } from './pages/necesito-contador/nuevo-cliente/nuevo-cliente.component';
import { MainComponent } from './pages/main/main.component';
import { BuscarContadorComponent } from './pages/necesito-contador/buscar-contador/buscar-contador.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'nuevo-cliente', component: NuevoClienteComponent},
  { path: 'buscar-contador', component: BuscarContadorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
