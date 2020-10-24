import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComidaComponent } from './pages/crear-comida/crear-comida.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';


const routes: Routes = [
{path:'',component:CrearComidaComponent},
{path:'inicio',component:InicioComponent},
{path:'login',component:LoginComponent},
{path:'registro',component:RegistroComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
