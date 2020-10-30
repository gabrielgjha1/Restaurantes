import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comida } from '../models/comida';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  constructor(public http:HttpClient,public _UsuarioService:UsuarioService) { }


  transformarDatos(Comidas:any[]):Comida[]{

    return  Comidas.map((resp)=>{
      
    return  new Comida(resp.nombre,resp.contenido,resp.precio,resp.img,resp._id);

    })

  }

  TraerComidas(){
    const url = environment.urlBackend+'comidas';


    return this.http.get(url).pipe(


      map((resp:any)=> this.transformarDatos(resp.comidas) )


    )


  }

  AgregarComida(Comida:Comida){
    const url = environment.urlBackend+'comidas';

    return this.http.post(url,Comida,{headers:{token:this._UsuarioService.token}}).pipe(


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


}
