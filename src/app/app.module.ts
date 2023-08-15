import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { BuscarContadorComponent } from './pages/stepper-cliente/buscar-contador/buscar-contador.component';
import { RegistrarContadorComponent } from './pages/soy-contador/registrar-contador/registrar-contador.component';
import { AvisoComponent } from './pages/stepper-cliente/aviso/aviso.component';
import { SeleccionarNecesidadComponent } from './pages/stepper-cliente/seleccionar-necesidad/seleccionar-necesidad.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundComponent,
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    QuienesSomosComponent,
    FooterComponent,
    MainComponent,
    BuscarContadorComponent,
    RegistrarContadorComponent,
    AvisoComponent,
    SeleccionarNecesidadComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
