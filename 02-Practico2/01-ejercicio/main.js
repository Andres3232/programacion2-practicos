const Auto = require("./Auto");

const a1 = new Auto ("Peugeot", "207", 60, 160);
const a2 = new Auto ("Fiat", "uno", 50, 150);
const a3 = new Auto ("Renault", "Clio", 40, 140);
const a4 = new Auto ("Volskwagen", "Gol", 30, 130);
const a5 = new Auto ("Toyota", "Corola", 20, 180);

let arrayAutos = [];
arrayAutos.push(a1,a2,a3,a4,a5);


function TiempoDeCadaAuto(array, kilometros){
  let calculoTiempo = 0
  for (i in array){
    calculoTiempo = array[i].calcularTiempo(kilometros)
    console.info (`El auto ${array[i].marca} se va a demorar ${calculoTiempo} hs`)

  }
}

function MostrarAutos(array){
    for (i in array){
      console.info( JSON.stringify (array[i]))
    
    }
      
}
MostrarAutos(arrayAutos)
TiempoDeCadaAuto(arrayAutos, 2000)