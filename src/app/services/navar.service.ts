import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class NavarService {
  public menu = [];
  constructor(public usuarioservice:UsuarioService) { 
    this.Traermenu();
    


  }

  Traermenu(){



    if (this.usuarioservice.Usuario.rol==='ADMIN_ROLE'){

      this.menu  = [
  
        {  titulo: 'Comidas',url:''},
        {  titulo: 'Agregar Comida',url:'/comida'},
        {  titulo: 'login',url:'/login'},
        {  titulo: 'Pedidos',url:'/pedidos'},
        {  titulo: 'Usuarios',url:'/usuarios'}
  
      ];

    }else{

      this.menu  = [
  
        {  titulo: 'Comidas',url:''},
        {  titulo: 'login',url:'/login'},
  
      ];

    }

  }
 

}
