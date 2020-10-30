
export class Usuario{

    constructor(

        public email:string,
        public password:string,
        public nombre?:string,
        public usuario?:string,
        public rol?:string,
        public direccion?:string,
        public pedido?:boolean
    ){

        
    }


}