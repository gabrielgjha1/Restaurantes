import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CrearComidaComponent } from './crear-comida/crear-comida.component';


import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { EnvioPipe } from '../pipes/envio.pipe';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [InicioComponent, CrearComidaComponent, CarritoComponent, PedidosComponent,EnvioPipe, UsuariosComponent],
  exports:[InicioComponent, CrearComidaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
