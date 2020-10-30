import { Component, OnInit, ɵConsole } from '@angular/core';
import Swal from 'sweetalert2';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedidos } from 'src/app/models/pedidos';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public carrito:any[]=[];
  public PrecioTotal:number=0;
  public CantidadTotal:number=0;
  public Itmbs:number=0;
  
  constructor(public _PedidoService:PedidosService) { }

  actualizarCarro(){
    localStorage.setItem('carrito',JSON.stringify(this.carrito));
  }

  ngOnInit(): void {

    this.carrito = JSON.parse(localStorage.getItem('carrito'));
   
    this.CalcularCostos();
  }




  GuardarElemento(){
    console.log(this.carrito)
    let nombre:string="";
    let cantidad:string="";
    this.carrito.map(element => {
    
    nombre +=element.nombre.toString()+','
    cantidad +=element.cantidad.toString()+','
  });
    
    const pedido = new Pedidos(nombre,this.PrecioTotal,cantidad)
  

    Swal.fire({
  title: 'Esta seguro que desea realizar el pedido?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si,Pedir!'
}).then((result) => {
  
  this._PedidoService.GuardarPedido(pedido).subscribe(resp=>{
  
    Swal.fire(
      'Buen trabajo!',
      'Su pedido se realizo con exito!',
      'success'
    )

    localStorage.removeItem('carrito')
    this.carrito = JSON.parse(localStorage.getItem('carrito'));
    this.PrecioTotal=0;
    this.CantidadTotal=0;
    this.Itmbs=0;
    
  })

})  





  }



  CalcularCostos(){
    this.PrecioTotal=0;
    this.CantidadTotal=0;
    this.Itmbs=0;

    this.carrito.forEach(valor => {
  

      
      this.PrecioTotal+=Math.round(valor.precio*valor.cantidad)
      this.CantidadTotal+=valor.cantidad;
      

    });
    this.Itmbs = Math.round ((this.PrecioTotal*0.07)+this.PrecioTotal);

  }


  EliminarElemento(id:string){

    Swal.fire({
      title: 'Esta seguro que desea eliminar este producto?',
      text: "Este cambio no es revertible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar !'
    }).then((result) => {
      if (result.isConfirmed) {


        this.carrito.forEach( (valor,i) => {


          if (id===valor.id){
            
            if(i===0){
    
              this.carrito.splice(0,1);
              this.actualizarCarro();
              this.CalcularCostos();
              return
            }
    
            this.carrito.splice(i,i);
            this.actualizarCarro();
            this.CalcularCostos();
            return;
          }
    
    
        });
  
        Swal.fire(
          'Borrado!',
          'Ve a comida si deseas agregar otra.',
          'success'
        )
      }
    })





  }



}
