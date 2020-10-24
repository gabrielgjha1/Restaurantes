import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComidaComponent } from './pages/crear-comida/crear-comida.component';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
{path:'inicio',component:InicioComponent},
{path:'',component:CrearComidaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
