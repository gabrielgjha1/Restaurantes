import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public comprobarSesion:boolean=false;
  CrearFormGroup(){

    return new FormGroup({

      nombre:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      direccion:new FormControl('',[Validators.required]),
      usuario:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      password2:new FormControl('',[Validators.required]),

    });

  }

  FormularioReactivo:FormGroup;

  constructor(public _UsuarioService:UsuarioService,public route:Router) {

    this.FormularioReactivo=this.CrearFormGroup();

   }

  ngOnInit(): void {

    if(this._UsuarioService.token){

      this.comprobarSesion=true;

    }else{
      this.comprobarSesion=false;
    }
  }

  GuardarRegistro(){
    console.log(this.FormularioReactivo.value.password)
    console.log(this.FormularioReactivo.value.password2)


    
    
    if(this.FormularioReactivo.invalid){
      
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al ingresar los datos, verifique!',
      })
      
    }
    
    
    if (this.FormularioReactivo.value.password != this.FormularioReactivo.value.password2 ){
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas deben ser iguales!',
      })

    }

    var usuario = new Usuario(

      this.FormularioReactivo.value.email,
      this.FormularioReactivo.value.password,
      this.FormularioReactivo.value.nombre,
      this.FormularioReactivo.value.usuario,
      this.FormularioReactivo.value.rol,
      this.FormularioReactivo.value.direccion,
    )

    console.log(usuario);
    
      this._UsuarioService.CrearUsuario(usuario).subscribe(resp=>{
        console.log(resp)
      })

    console.log(this.FormularioReactivo)

  }

  get nombre() { return this.FormularioReactivo.get('nombre'); }
  get email() { return this.FormularioReactivo.get('email'); }
  get direccion() { return this.FormularioReactivo.get('direccion'); }
  get usuario() { return this.FormularioReactivo.get('usuario'); }
  get password() { return this.FormularioReactivo.get('password'); }
  get password2() { return this.FormularioReactivo.get('password2'); }
  


}
