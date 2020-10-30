interface Usuario{

    nombre:string,
    direcion:string,
    email:string

}

export class Pedidos {

    constructor(


        public pedido:string,
        public precio?:number,
        public cantidad?:string,
        public usuario?:Usuario,
        public enviado?:boolean,
        public id?:string


    ){



    }

}