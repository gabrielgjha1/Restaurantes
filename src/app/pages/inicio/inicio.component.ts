import { Component, OnInit } from '@angular/core';
import { ComidasService } from 'src/app/services/comidas.service';
import { Comida } from 'src/app/models/comida';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/services/usuario.service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public Comidas:Comida[]=[];
  public Carrito:any[]=[];
  public iterador:number=0;
  constructor(public _comidaService:ComidasService,public _UsuarioService:UsuarioService) { 

    if (JSON.parse(localStorage.getItem('carrito'))){


      this.Carrito=JSON.parse(localStorage.getItem('carrito'));


    }

    this.TraerDatos();

  }

  ComprobarLogin(){
    




  }

  GuardarCarrito(){

    localStorage.setItem('carrito',JSON.stringify(this.Carrito));

  }

  TraerDatos(){

    this._comidaService.TraerComidas().subscribe((resp:any)=>{

      this.Comidas=resp;

      
    })
    

  }


  Prueba(e,id:String){

     
  return this._UsuarioService.ValidarToken().subscribe(resp=>{

  

       if (resp===false){
          
         
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes estar registrado para comprar!',
        })

        return false
     
      }else{


        let Imagen = e.target.parentElement.parentElement;
        let contenido = e.target.parentElement;
    
       let comprobar  =  this.Carrito.some((valor,i)=>{
      
        if (valor.id===id){
    
          this.iterador=i;
          return true;
    
          }
        
        })
      
        if (comprobar===true){
    
          this.Carrito[this.iterador].cantidad+=1;
          console.log(this.Carrito);
          this.GuardarCarrito();
        }else{
              
              let Almacenar={
                imagen:Imagen.querySelector('img').src,
                precio:parseInt(contenido.querySelector('.precio').textContent),
                nombre:contenido.querySelector('.nombre').textContent,
                cantidad:1,
                id
              }
              
              this.Carrito.push(Almacenar);
              console.log(this.Carrito);
              this.GuardarCarrito();
        }
    
    
        Swal.fire(
          'Buen trabajo!',
          'Se agrego al carrito!',
          'success'
        )


      }


     })

  }

  ngOnInit(): void {
  }

}
