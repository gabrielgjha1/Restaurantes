import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import {tap, map, catchError} from 'rxjs/operators'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { throwError, of } from 'rxjs';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public Usuario:Usuario;
  public token:string;
  public rol:string;
  constructor(public http:HttpClient,private route:Router) { 
    this.ComprobarLogin();
  }

  

  ValidarToken(){

   const  url = environment.urlBackend+'login';

    console.log('el token es'+this.token)
   return this.http.get(url,{headers:{token:this.token}}).pipe(


    tap(resp=>{

    }),

    map((resp)=>true),

    catchError(error=>{
      this.route.navigateByUrl('login')
      this.Salir();
      return of(false);
      
    })


   )

  }

  ValidarTokenAdmin(){

    const  url = environment.urlBackend+'login/admin';
 
     console.log('el token es'+this.token)
    return this.http.get(url,{headers:{token:this.token}}).pipe(
 
      
     tap(resp=>{
 
     }),
 
     map((resp)=>true),
 
     catchError(error=>{
       this.route.navigateByUrl('login')
       this.Salir();
       return of(false);
       
     })
 
 
    )
 
   }
 


  GuardarDatos(usuario:Usuario,token:string){
    this.token=token;
    this.Usuario=usuario;
    localStorage.setItem('token',token);
    localStorage.setItem('usuario', JSON.stringify(usuario))

  }

  ComprobarLogin(){

    if(!localStorage.getItem('token')){

        this.Usuario=null;
        this.token="";

    }

    this.token=localStorage.getItem('token');
    this.Usuario=JSON.parse(localStorage.getItem('usuario'));


  }


  Salir(){
    localStorage.removeItem('token');
  }

  Login(usuario:Usuario){

    let url = environment.urlBackend+'login';
    return this.http.post(url,usuario).pipe(


      tap((resp:any)=>{


       this.rol=resp.usuario.rol;
       console.log(this.rol)
       this.GuardarDatos(resp.usuario,resp.token)

        // this.route.navigateByUrl('');

      }),

      catchError(error=>{

        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.mensaje,
          footer: '<a href>Why do I have this issue?</a>'
        })
        return throwError(error);

      })


    )
  }


  TraerUsuarios(){
    let url = environment.urlBackend+'usuarios';

   return this.http.get(url,{headers:{token:this.token}}).pipe(


    map((resp:any)=>{

      return resp.usuarios

    })


   )
    

  }

  CrearUsuario( usuario:Usuario){
    
    let url = environment.urlBackend+'usuarios';

    return this.http.post(url,usuario).pipe(

      tap(resp=>{
        Swal.fire(
          'Buen trabajo!',
          'Ahora inicie sesión!',
          'success'
        )
        this.route.navigateByUrl('/login');
      }),

      catchError(error=>{
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.mensaje,
          footer: '<a href>Why do I have this issue?</a>'
        })
        return throwError(error);

      })

    )


  }


  ActualizarRol(id:string){

    let url = environment.urlBackend+'usuarios/'+id;

    return this.http.put(url,{},{headers:{token:this.token}})

  }

  EliminarUsuario(id:string){

    let url = environment.urlBackend+'usuarios/'+id;

    return this.http.delete(url,{headers:{token:this.token}})

  }



}
