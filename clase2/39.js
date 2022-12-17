class CuentaBancaria {
  #saldoEnLaCuenta = 0
  nombre

  constructor(nombre) {
    this.nombre = nombre
  }

  verUsuario() {
    return this.nombre
  }

  agregarSaldo(cantidad) {
    this.#saldoEnLaCuenta = this.#saldoEnLaCuenta + cantidad
    return `Agregaste ${cantidad} pesos a la cuenta de ${this.nombre} `
  }

  verSaldo() {
    return this.#saldoEnLaCuenta
  }
}

const mate = new CuentaBancaria('Mateo')
mate.verSaldo()
mate.agregarSaldo(100)
mate.verSaldo()
console.log(mate.saldoEnLaCuenta, 'no la veo porque la variable es privada')