const cuentaBancaria = {
  saldo: 1000,
  toString() {
    return `Saldo: ${this.saldo} €`;
  },
};

console.log(String(cuentaBancaria)); //Saldo: 1000 €
console.log(`${cuentaBancaria}`); //Saldo: 1000 €
console.log("Mi cuenta -> " + cuentaBancaria); //Mi cuenta -> Saldo: 1000 €

//al usar this.saldo si cambia el saldo tambien cambia el texto
cuentaBancaria.saldo = 250;
console.log(String(cuentaBancaria)); //Saldo: 250 €
