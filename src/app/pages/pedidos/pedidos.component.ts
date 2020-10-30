import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  public pedidos=[];
  constructor(public _PedidoService:PedidosService) { }

  ngOnInit(): void {

  this.TraerDatos();
  console.log(this.pedidos)

  }

  TraerDatos(){
    this._PedidoService.TraerPedidos().subscribe((resp:any)=>{

      this.pedidos=resp;
      console.log(resp)
    })
  }


  CambiarEstado(id:string,estado:boolean){
    let texto="";

    estado==true? texto="enviar":texto="cancelar";

    Swal.fire({
      title: 'Esta seguro que desea '+texto+' el pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,Pedir!'
    }).then((result) => {
      
      this._PedidoService.ActualizarPedido(id).subscribe(resp=>{
      
        Swal.fire(
          'Buen trabajo!',
          'El '+texto+' se envio con exito!',
          'success'
        )
        
        this.TraerDatos()

      });
  });
}

EliminarPedido(id:string){


  Swal.fire({
    title: 'Esta seguro que desea Eliminar el pedido?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si,Pedir!'
  }).then((result) => {
    
    this._PedidoService.EliminarPedido(id).subscribe(resp=>{
    
      Swal.fire(
        'Buen trabajo!',
        'El pedido se Elimino con exito!',
        'success'
      )
      
      this.TraerDatos()

    });
});

}


}