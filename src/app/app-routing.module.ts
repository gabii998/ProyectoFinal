import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { ComerciosComponent } from './componentes/comercios/comercios.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { AdministrarComponent } from './componentes/administrar/administrar.component';
import { AdministrarArticuloComponent } from './componentes/administrar-articulo/administrar-articulo.component';
import { AdministrarComercioComponent } from './componentes/administrar-comercio/administrar-comercio.component';
import { AdministrarHistorialVentasComponent } from './componentes/administrar-historial-ventas/administrar-historial-ventas.component';

const routes: Routes = [
  {path:"articulos", component: ArticulosComponent},
  { path:"comercios", component: ComerciosComponent},
  {path:"registro",component:RegistroComponent},
  {path: "pedidos",component:PedidosComponent},
  {path:"administrar",component:AdministrarComponent,children:[
    {path:"adminArticulos", component:AdministrarArticuloComponent},
    {path:"adminComercio",component:AdministrarComercioComponent},
    {path:"adminHistorial",component:AdministrarHistorialVentasComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
