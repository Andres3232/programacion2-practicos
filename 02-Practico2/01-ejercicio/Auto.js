class Auto {
    constructor (marca, modelo, potencia, maxVelocidad) {
      this.marca = marca;
      this.modelo = modelo;
      this.potencia = potencia;
      this.maxVelocidad = maxVelocidad;
   }
  
    calcularTiempo(kilometros){
      return kilometros/this.maxVelocidad;
    }
  }
  
  module.exports = Auto;
  
  