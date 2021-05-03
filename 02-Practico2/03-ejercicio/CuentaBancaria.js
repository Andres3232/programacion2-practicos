class CuentaBancaria {
    constructor (fondos){
      this.fondos = fondos;
    }
  
    asignarFondos(monto){   
      try{   
        if (monto>=500000) throw "Monto muy elevado para depositar"
        return this.fondos += monto
      }   
      catch(err)
      {
        console.error(err);
      } 
     
    }
  
    retirarFondos(monto){
      try{
        if (monto>=100000) throw "No puedes retirar tanto dinero, solicita permiso";
        if (monto > this.fondos) throw `Fondos insuficientes, no puedes retirar ${monto} tu saldo es de ${this.fondos} `;
        return this.fondos -= monto 
      } 
      catch(err){
        console.error(err);
      } 
    
    }
  }
  
  
  module.exports = CuentaBancaria;
  