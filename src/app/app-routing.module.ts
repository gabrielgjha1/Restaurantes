import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComidaComponent } from './pages/crear-comida/crear-comida.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AdminROleGuard } from './guards/admin-role.guard';


const routes: Routes = [
{path:'',component:InicioComponent},
{path:'comida',component:CrearComidaComponent,canActivate:[AdminROleGuard]},
{path:'login',component:LoginComponent},
{path:'registro',component:RegistroComponent},
{path:'carrito',component:CarritoComponent},
{path:'pedidos',component:PedidosComponent,canActivate:[AdminROleGuard]},
{path:'usuarios',component:UsuariosComponent,canActivate:[AdminROleGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
