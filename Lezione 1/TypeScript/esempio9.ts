/**
 * DECORATORI
 */

function Raddoppia() {
  return function (target: Object, propertyKey: string) {
    let value: number;
    const getter = function () {
      return value;
    };
    const setter = function (newVal: number) {
      value = newVal * 2;
    };
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

class Numeri {
  @Raddoppia()
  numero: number = 4;

  getNumero() {
    return this.numero;
  }
}

var istanza = new Numeri();

console.log(istanza.numero);
