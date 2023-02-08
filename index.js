// ---Conceptos básicos de Programación---

// 1) Crear una variable de tipo constante cuyo valor sea el siguiente mensaje “Fin del Ejercicio”)

console.log("1)");

const message = "Fin del Ejercicio";
console.log(message)

// 2) Declarar 5 variables de tipo string y concatenarlas en diferente orden (no importa que la oración formada no tenga sentido)

console.log("2)");

let quote1 = "Be ";
let quote2 = "water ";
let quote3 = "my ";
let quote4 = "friend ";
let quote5 = "(─‿‿─)";
let bruceLee = quote1 + quote2 + quote3 + quote4 + quote5;

console.log("Bruce Lee once said: "+ bruceLee);


// 3) Una persona está intentando comprar sus productos en el super, la lista consta de frutas, verduras, carne, comida para su mascota, papel higienico y un paquete de yerba. Declare 5 variables que sean números decimales y realice la sumatoria de todos los productos, devolviendo el resultado final al cliente. 

console.log("3)");

let frutas = 15.50;
let verduras = 12.30;
let carne = 25.90;
let comidaMascota = 20.00;
let papelHigienico = 5.50;
let yerba = 10.00;

let total = frutas + verduras + carne + comidaMascota + papelHigienico + yerba;

console.log("Monto total: $" + total);


// a) Aplicar un descuento del 10% a los productos para mascotas e imprimir el nuevo monto a abonar al cliente.

console.log("a)");

comidaMascota *= 0.9;

total = frutas + verduras + carne + comidaMascota + papelHigienico + yerba;

console.log("Monto total con descuento: $" + total);


// b) Aplicar un recargo de el 18% total del valor de la compra total por pago con tarjeta de crédito, imprimir en consola el monto total a pagar y el precio por cuota (ya que el cliente desea abonar en 3 cuotas)

console.log("b)");

total *=1.18

console.log("Monto total con recargo: $" + total);

let precioPorCuota = total / 3;

console.log("Precio por cuota: $" + precioPorCuota);


// c) Un amigo del cliente llegó al super y decidió abonar la mitad del monto total en efectivo. Al recibir la mitad en efectivo, sólo se deberá aplicar el recargo del 18% al total de la mitad del producto. Imprimir por consola el monto nuevo a abonar y el precio por cuota.

console.log("c)");

let pagoEfectivo = total / 2;

total -= pagoEfectivo;
total *= 1.18;

total += pagoEfectivo;

console.log("Nuevo monto total: $" + total);

precioPorCuota = total / 3;

console.log("Precio por cuota: $" + precioPorCuota);


// 4) Declarar 6 variables de tipo number y aplicar operadores lógicos y de igualdad:

console.log("4)");

let a = 2;
let b = 4;
let c = 8;
let d = 16;
let e = 34;
let f = 68;


// a) Crear una variable dónde preguntemos si una de las variables creadas anteriormente es mayor que otra.

console.log("a)");

let mayor = a > b;

console.log("¿Mayor?: "+mayor);


// b) Crear una variable dónde preguntemos si una de las variables creadas anteriormente es menor que otra.

console.log("b)");

let menor = b < c;

console.log("¿Menor?: "+menor);



// c) Crear 3 variables dónde utilicemos el operador AND usando las variables creadas anteriormente.

console.log("c)");

let and1 = d && e >= f;
let and2 = a && b <= c;
let and3 = c && d > e;

console.log(d + " y " + e + " ¿Son mayores o iguales a " + f + "?: " +and1);
console.log(a + " y " + b + " ¿Son menores o iguales a " + c + "?: " +and2);
console.log(c + " y " + d + " ¿Son mayores a " + e + "?: " +and3);


// d) Crear 3 variables dónde utilicemos el operador OR usando las variables creadas anteriormente.

console.log("d)");

let or1 = a || b <= c;
let or2 = f || a > e;
let or3 = b || e >= a;

console.log(or1);
console.log(or2);
console.log(or3);


// e) Crear una dónde variable dónde utilizaremos el operador AND, elegiremos una de las 6 variables creadas anteriormente, y utilizaremos el operador: si la variable es PAR Y es mayor a 50

console.log("e)");

if (f % 2 === 0 && f > 50) {
    console.log(f + " Es Par y mayor a 50");
  } 
else {
    console.log(f + " No cumple con las condiciones");
  }


// f) Crear una dónde variable dónde utilizaremos el operador OR, elegiremos una de las 6 variables creadas anteriormente, y utilizaremos el operador: si la variable es IMPAR O es mayor igual a 8

console.log("f)");

if (d % 3 === 0 || d >= 8) {
    console.log(d + " Es Impar o Mayor o igual a 8");
} 
else {
    console.log(d + " No cumple con las condiciones");
  }