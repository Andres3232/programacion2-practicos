class Factura {
    private cliente: Cliente;
    private items : Item [];
    private numero: number
    private fecha: Date;


    constructor( numero: number, fecha:Date, cliente: Cliente){

        if (cliente==null) throw new Error("imposilbe crear una factura sin un cliente asociado");
        
        this.numero = numero;
        this.fecha = fecha;
        this.cliente = cliente
        

    }
    agregarItem (descripcion:string, precio: number, cantidad:number ){
        this.items.push(new Item("guantes de latex",100,24));
            
        }
}

class Item{
    constructor(descripcion:string, precio: number, cantidad:number){}
}

class Cliente{
    constructor(nombre: string, dni: string){}
}




