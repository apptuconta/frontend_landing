import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoClienteComponent } from './pages/necesito-contador/nuevo-cliente/nuevo-cliente.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { BuscarContadorComponent } from './pages/necesito-contador/buscar-contador/buscar-contador.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoClienteComponent,
    NoPageFoundComponent,
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    QuienesSomosComponent,
    FooterComponent,
    MainComponent,
    BuscarContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
