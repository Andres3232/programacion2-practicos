const CuentaBancaria = require("./CuentaBancaria");


const cb1 = new CuentaBancaria (500)

console.info(cb1.fondos)

cb1.asignarFondos(500000)

cb1.asignarFondos(5000)
cb1.asignarFondos(5000)
cb1.asignarFondos(5000)
cb1.asignarFondos(5000)

cb1.retirarFondos(2000000)

cb1.retirarFondos(100)

cb1.retirarFondos(22200)

console.info(cb1.fondos)


