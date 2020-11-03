import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedidos } from 'src/app/models/pedidos';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.css']
})
export class MisPedidosComponent implements OnInit {
 public pedido:Pedidos[]=[]
  constructor(public _usuarioService:UsuarioService,public _PedidoService:PedidosService) { 

   

  }


  ngOnInit(): void {


    setInterval(()=>{
      
      this.TraerPedidos();

    },2000)

  }


  TraerPedidos(){


    this._PedidoService.TraerPedidosUsuario(this._usuarioService.Usuario._id).subscribe((resp:any)=>{

      this.pedido=resp; 
      console.log(this.pedido)
    })



  }


}
