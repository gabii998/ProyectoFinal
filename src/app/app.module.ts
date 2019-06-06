import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { ComerciosComponent } from './componentes/comercios/comercios.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ModalLoginComponent } from './componentes/modal-login/modal-login.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { AdministrarComponent } from './componentes/administrar/administrar.component';
import { AdministrarArticuloComponent } from './componentes/administrar-articulo/administrar-articulo.component';
import { AdministrarComercioComponent } from './componentes/administrar-comercio/administrar-comercio.component';
import { AdministrarHistorialVentasComponent } from './componentes/administrar-historial-ventas/administrar-historial-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticulosComponent,
    ComerciosComponent,
    RegistroComponent,
    ModalLoginComponent,
    PedidosComponent,
    AdministrarComponent,
    AdministrarArticuloComponent,
    AdministrarComercioComponent,
    AdministrarHistorialVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
