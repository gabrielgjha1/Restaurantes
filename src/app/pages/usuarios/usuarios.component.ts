import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios:Usuario[]=[];

  constructor(public  usuario:UsuarioService) { 

    

  }

  ngOnInit(): void {
    this.TraerDatos();
  }

  TraerDatos(){

    this.usuario.TraerUsuarios().subscribe((resp:any)=>{

        this.usuarios=resp;
      console.log(this.usuarios)
    })

  }

  actualizarROl(id:string){

    Swal.fire({
      title: 'Esta seguro que desea Actualizar el rol de  este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,Actualizar!'
    }).then((result) => {
      
      this.usuario.ActualizarRol(id).subscribe(resp=>{
      
        Swal.fire(
          'Buen trabajo!',
          'El usuario se actualizo con exito!',
          'success'
        )
        
        this.TraerDatos();
  
      });
  });

  }

  EliminarUsuario(id:string){

    Swal.fire({
      title: 'Esta seguro que desea Eliminar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,Eliminar!'
    }).then((result) => {
      
      this.usuario.EliminarUsuario(id).subscribe(resp=>{
      
        Swal.fire(
          'Buen trabajo!',
          'El usuario se Elimino con exito!',
          'success'
        )
        
        this.TraerDatos();
  
      });
  });
  

  }




}
