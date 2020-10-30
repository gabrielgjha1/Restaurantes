import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Comida } from 'src/app/models/comida';
import { ComidasService } from 'src/app/services/comidas.service';
import { FileUploadsService } from 'src/app/services/file-uploads.service';

@Component({
  selector: 'app-crear-comida',
  templateUrl: './crear-comida.component.html',
  styleUrls: ['./crear-comida.component.css']
})
export class CrearComidaComponent implements OnInit {

  public ImagenSubir:File;
  public ComprobarImagen:boolean=false;
  public comidaGuardada:boolean=false
  FormReactive(){


    return new FormGroup({

      nombre:new FormControl('',[Validators.required]),
      precio:new FormControl('',[Validators.required]),
      contenido:new FormControl('',[Validators.required]),

    });


  }

  formReactive:FormGroup;


  constructor(public _ComidaService:ComidasService,public  _FileUploadsService:FileUploadsService) { 
    this.formReactive=this.FormReactive();


  }

  ngOnInit(): void {
  }


  cambiarImagen(file:File){

    this.ImagenSubir=file;
    this.ComprobarImagen=true;

  }


  

  subirImagen(id:string){
 
   this._FileUploadsService.actualizarFoto(this.ImagenSubir,id).then(img=>console.log(img))

  }
  

  EnviarDatos(){

    if(this.formReactive.invalid){

      return Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Error al ingresar los datos, verifique!',
       })
 
     }
     var comida = new Comida (

      this.formReactive.value.nombre,
      this.formReactive.value.contenido,
      this.formReactive.value.precio,

     )
     
     console.log(comida);
    this._ComidaService.AgregarComida(comida).subscribe((resp:any)=>{


    if (this.ComprobarImagen){
    
      this.subirImagen(resp.comidas._id)

      Swal.fire(
        'Buen trabajo!',
        'Comida agregada con exito!',
        'success'
      )

    }
    


    });



  }

  get nombre() { return this.formReactive.get('nombre'); }
  get precio() { return this.formReactive.get('precio'); }
  get contenido() { return this.formReactive.get('contenido'); }

}
