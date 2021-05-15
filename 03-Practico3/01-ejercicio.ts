class Auto {
    _marca: string;
    _modelo: string;
    _potencia: number;
    _maxVelocidad: number;
  
    constructor (marca:string, modelo:string, potencia:number, maxVelocidad:number){
      this._marca = marca;
      this._modelo = modelo;
      this._potencia = potencia;
      this._maxVelocidad = maxVelocidad;
    }
  
    calcularTiempo (kilometros:number):number{
      return kilometros/this._maxVelocidad
    }
  }

const a1 = new Auto ("Peugeot", "207", 60, 160);
const a2 = new Auto ("Fiat", "uno", 50, 150);
const a3 = new Auto ("Renault", "Clio", 40, 140);
const a4 = new Auto ("Volskwagen", "Gol", 30, 130);
const a5 = new Auto ("Toyota", "Corola", 20, 180);

let arrayAutos: object[] =[a1,a2,a3,a4,a5]

function TiempoDeCadaAuto (array:any[], kilometros: number ):void{
  let calculotiempo:number = 0;
  for (let i in array){
    calculotiempo = array[i].calcularTiempo(kilometros);
    console.info (`El auto ${array[i]._marca} se va a demorar ${calculotiempo} hs`)

  }

}

function MostrarAutos(array:object[]):void{
    for (let i in array){
      console.info( JSON.stringify (array[i]))
    
    }
      
}
MostrarAutos(arrayAutos)
TiempoDeCadaAuto(arrayAutos, 2000)

//EJERCICIO NUMERO 2 EN TS
class Alumno {
  public nombre:string;
  public edad: number;

  constructor(nombre:string, edad:number) {
    this.nombre = nombre;
    this.edad = edad
  }
}

class Carrera {
  public nombre: string;
  public alumnos: Alumno[]
  constructor(nombre:string) {
    this.nombre = nombre
    this.alumnos = [];
  }

  inscribirAlumnos(alumno: Alumno){
    return this.alumnos.push(alumno);
  }

  mostrarAlmunos(){
    console.info (`Los alumnos de la carrera ${this.nombre}`)
    for (let alumno in this.alumnos){
      console.info(`Nombre: ${this.alumnos[alumno].nombre } Edad ${this.alumnos[alumno].edad}`)
    }
  }
}

class Escuela {
  public nombre:string;
  public direccion:string;
  public carreras : Carrera[];

  constructor(nombre:string, direccion:string) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.carreras = [];
  }
  anotarCarrera (carrera){
    return this.carreras.push(carrera);
  }
}

const escuela1 = new Escuela ("IES", "Maipu");

const sistemas = new Carrera ("Sistemas informaticos");
const medicina = new Carrera ("Medicina");

const jorge = new Alumno ("Jorge", 32);
const andres = new Alumno ("Andres", 29);
const karen = new Alumno ("Karen", 27);
const maria = new Alumno ("Maria", 33);


escuela1.anotarCarrera(sistemas);
escuela1.anotarCarrera(medicina);
sistemas.inscribirAlumnos(jorge)
medicina.inscribirAlumnos(maria)
sistemas.inscribirAlumnos(andres)
medicina.inscribirAlumnos(karen)


sistemas.mostrarAlmunos();
medicina.mostrarAlmunos();






//EJERCICIO NUMERO 3 EN TS

class CuentaBancanria {
  constructor(public fondos: number) {
    
  }

  asignarFondos(monto:number):number{
    try {
      if (monto >= 500000) throw "Monto muy elevado para depositar" ;
      return this.fondos += monto;

    } catch (error) {
      console.error(error);
    }
  }

  retirarFondos(monto:number):number{
    try {
      if (monto >= 100000) throw "No puedes retirar tanto dinero, solicita permiso";
      if (monto > this.fondos) throw `Fondos insuficientes, no puedes retirar ${monto} tu saldo es de ${this.fondos}`;
      return this.fondos -= monto;
    } catch (error) {
      console.error(error);
      
    }
  }

}
const cb1 = new CuentaBancanria (500)

console.info(cb1.fondos)

cb1.asignarFondos(500000);

cb1.asignarFondos(5000);
cb1.asignarFondos(5000);
cb1.asignarFondos(5000);
cb1.asignarFondos(5000);

cb1.retirarFondos(2000000);

cb1.retirarFondos(100);

cb1.retirarFondos(22200);

console.info(cb1.fondos);