class Escuela {
    constructor(nombre, direccion){
      this.nombre = nombre;
      this.direccion = direccion;
      this.carreras = [];
      
    }
  
    anotarCarrera(carrera){
      return this.carreras.push(carrera);
  
      }
  }
  
  module.exports = Escuela;
  