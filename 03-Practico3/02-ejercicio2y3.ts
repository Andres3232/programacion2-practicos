function imprirArray (array: string[] ): void{
    console.info(array)
  }
  
  let array:string []= ["azul", "verde", "rojo"];
  
  //agrego amarillo entre azul y verde
  array.splice(1,0,"amarillo");
  
  imprirArray(array);
  
  //agrego naranja entre verde y rojo
  array.splice(3,0,"naranja");
  
  imprirArray(array);
  
  //elimino el color verde
  array.splice(2,1);
  
  imprirArray(array);
  