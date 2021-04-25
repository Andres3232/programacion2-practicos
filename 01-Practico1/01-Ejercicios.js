//A. Dado los equipos de futbol Boca, River, Racing, Independiente, Velez
// crear una función que reciba por parámetros el nombre de un equipo y verifique si es uno de esos equipos dados.

function equiposGrandes(equipo) {
    switch (equipo) {
        case "Boca":
            console.info("equipo Grande!!");
            break;
        case "River":
            console.info("equipo Grande!!");
            break;
        case "Racing":
            console.info("equipo Grande!!");
            break;
        case "Independiente":
            console.info("equipo Grande!!");
            break;
        case "Velez":
            console.info("equipo Grande!!");
            break;
        default:
            console.info("equipo chico!!");

        
    }
    
}
equiposGrandes("Boca");

//B. Crear una función que me convierta de m a Km

function ConversorAkm(numero) {
    let resultado =numero / 1000;
    return  resultado;
    
}
console.info("tu num pasado a km es: "+ConversorAkm(1000) + " km");

// C. Dado el arreglo (2,5,7,8,9)
// 1. Crear una función que cuente la cantidad de elementos en el arreglo
// 2. Crear una función que sume todos los elementos de arreglo
// 3. Crear una función que me devuelva los elementos ordenados del arreglo

//1-C
let arr = [2, 5, 7, 8, 9];

function cantidadElementos(arr) {
    return arr.length;
} 
    
console.info(cantidadElementos(arr));

//2-C
function Total(arr) {
    let sum = 0 
    for (let i = 0; i < arr.length; i++) {
        
        sum = sum + arr[i];
    }
        return sum
}
console.info(Total(arr));

//3-C
let arr1 = [5, 5, 2, 8, 9];

function OrdenarArray(arr) {
    return arr1.sort();
    
}
console.info(OrdenarArray(arr1));
