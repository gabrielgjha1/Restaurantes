import { environment } from 'src/environments/environment';

const url = environment.urlBackend;
export class Comida {


    constructor(

        public nombre:string,
        public contenido?:string,
        public precio?:number,
        public img?:string,
        public id?:string
    ){

    }

    get imagenUrl(){
        if (!this.img){

            this.img='';
       
        }
        if (this.img.includes('https')){
            return this.img;
        }

        if (this.img){
            let ruta = `${url}uploads/${this.img}`

            return `${url}uploads/${this.img}`;
        }else{
            return `${url}uploads/@@@`;
        }
        

    }



}