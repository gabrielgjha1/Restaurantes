import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pedidos } from '../models/pedidos';
import { UsuarioService } from './usuario.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  public token:string;
  constructor(public http:HttpClient,public _USuarioService:UsuarioService) { 


    this.token = this._USuarioService.token;
  


  }

  transformarDatos(Pedido:any[]):Pedidos[]{

    return  Pedido.map((resp)=>{
      
    return  new Pedidos(resp.pedido,resp.precio,resp.cantidad,resp.usuario,resp.enviado,resp._id);

    })

  } 

  public TraerPedidos(){
     const url = environment.urlBackend+'compras';
     return  this.http.get(url,{headers:{token:this.token}}).pipe(

      map((resp:any)=>this.transformarDatos(resp.compra))

     )
  }

  public GuardarPedido(pedidos:Pedidos){


    const url = environment.urlBackend+'compras';

  return  this.http.post(url,pedidos,{headers:{token:this.token}}).pipe(


      map((resp:any)=>resp.compra)


    )



  }

  public ActualizarPedido(id:string){

    const url = environment.urlBackend+'compras/'+id;
    return this.http.put(url,{},{headers:{token:this.token}});

  }

  public EliminarPedido(id:string){

    const url = environment.urlBackend+'compras/'+id;
    return this.http.delete(url,{headers:{token:this.token}});

  }

}
