import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoClienteComponent } from './pages/necesito-contador/nuevo-cliente/nuevo-cliente.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'nuevo-cliente', component: NuevoClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
