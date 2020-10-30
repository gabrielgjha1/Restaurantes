import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public comprobarSesion:boolean=false;

  createFormGroup(){

    return new FormGroup({

      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required])

    })

  }

  contactForm:FormGroup;



  constructor(public _UsuarioService:UsuarioService,public route:Router) {

    
    console.log(this.comprobarSesion)
   }


  ngOnInit(): void {

    this.contactForm = this.createFormGroup();

    if(this._UsuarioService.token){

      this.comprobarSesion=true;

    }else{
      this.comprobarSesion=false;
    }


  }


  GuardarDatos(){


    if(this.contactForm.invalid){

     return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al ingresar los datos, verifique!',
      })

    }

    console.log( this.contactForm.value)

    var usuario = new Usuario(
      this.contactForm.value.email,
      this.contactForm.value.password,
    );
    console.log(usuario)


    this._UsuarioService.Login(usuario).subscribe(resp=>{


      Swal.fire(
        'Buen trabajo Ahora puedes realizar pedidos!',
        'Continuar',
        'success'
      )
      this.comprobarSesion=true;
        
      

      
    })

  }

  get email() { return this.contactForm.get('email'); }

  get password() { return this.contactForm.get('password'); }

}
