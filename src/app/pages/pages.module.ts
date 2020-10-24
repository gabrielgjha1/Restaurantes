import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CrearComidaComponent } from './crear-comida/crear-comida.component';



@NgModule({
  declarations: [InicioComponent, CrearComidaComponent],
  exports:[InicioComponent, CrearComidaComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
