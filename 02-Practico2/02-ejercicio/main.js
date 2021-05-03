const Escuela = require("./Escuela");
const Alumno = require("./Alumno");
const Carrera = require("./Carrera");


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


sistemas.mostrarAlumnos();
medicina.mostrarAlumnos();



