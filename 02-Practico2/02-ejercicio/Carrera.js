
class Carrera {
    constructor (nombre){
      this.nombre = nombre;
      this.alumnos = [];
    }
  
  
    inscribirAlumnos(alumno){
      
      return this.alumnos.push(alumno);
  
      }
  
    mostrarAlumnos(){
      console.info(`Alumnos de la carrera: ${this.nombre} `)
      for( let alumno in this.alumnos){     
        console.info(`Nombre: ${this.alumnos[alumno] .nombre} Edad: ${this.alumnos[alumno].edad}  `)
      }
    }
  
  }
  
  module.exports = Carrera;