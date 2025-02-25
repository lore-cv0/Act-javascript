//EJERCICIO 2
/*crea una variable llamada precio y asignale un valor decimal.
 luego crea una variable llamada cantidad y asignale un valor entero.
muestra el tipo de dato de cada variable en la consola*/
let precio = 0.5;
let cantidad = 125;
console.log (typeof precio); // imprime en consola 
document.write (typeof cantidad);// imprime en el navegador
alert (typeof cantidad) // imprime en una ventana emergente

//ACTIVIDAD EJERCICIOS EN JAVASCRIPT
//ejercicio 1 
//Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea saber cuánto deberá pagar por su compra.
// Definir el precio original de la compra
let precioOriginal = 500; 
// Definir el porcentaje de descuento
let porcentajeDescuento = 25;
// Calcular el monto del descuento
let descuento = (precioOriginal * porcentajeDescuento) / 100;
// Calcular el precio final
let precioFinal = precioOriginal - descuento;

// Mostrar los resultados en consola
console.log("Precio original: $" + precioOriginal);
console.log("Descuento: $" + descuento);
console.log("Precio final a pagar: $" + precioFinal);

//ejercicio 2
//Suponga que un individuo desea invertir su capital en un banco y desea sabercuánto dinero ganara después de un mes si el banco paga a razón de 2% mensual.
// Definir el capital inicial
let capital = 3000; 
let tasaInteres = 2; // 2% mensual
// Calcular interés ganado
let interesGanado = (capital * tasaInteres) / 100;
// Calcular total después de un mes
let totalFinal = capital + interesGanado;
// Mostrar resultados en consola
console.log("Capital invertido: $" + capital);
console.log("Interés ganado: $" + interesGanado);
console.log("Total después de un mes: $" + totalFinal);

//ejercicio 3
//Un alumno desea saber cuál será su calificación final en la materia de Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
//a. 55% del promedio de sus tres calificaciones parciales.
//b. 30% de la calificación del examen final.
//c. 15% de la calificación de un trabajo final.
// Notas del estudiante
let parcial1 = 80;
let parcial2 = 75;
let parcial3 = 90;
let examenFinal = 85;
let trabajoFinal = 88;
// Calcular promedio de parciales
let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
// Calcular nota final
let notaFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);
// Mostrar resultado en consola
console.log("Calificación final: " + notaFinal.toFixed(2));

//ejercicio 4
//El dueño de una tienda compra un artículo a un precio determinado. Obtener el precio en que lo debe vender para obtener una ganancia del 30%.
// Precio de compra 
let precioCompra = 50000; 
// Calcular precio de venta con 30% de ganancia
let precioVenta = precioCompra * 1.30;
// Mostrar resultado en consola
console.log("Precio de compra: $" + precioCompra );
console.log("Precio de venta con 30% de ganancia: $" + precioVenta );

//ejercicio 5
//Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por minuto. Determine el monto a pagar por una carrera.
// Datos del viaje
let kilometros = 1;
let minutos = 10;
// Tarifas en pesos colombianos
let tarifaKilometro = 15000; // COP por kilómetro
let tarifaMinuto = 2000; // COP por minuto
// Calcular costo total
let costoTotal = (kilometros * tarifaKilometro) + (minutos * tarifaMinuto);
// Mostrar resultado en consola
console.log("Kilómetros recorridos: " + kilometros);
console.log("Minutos de viaje: " + minutos);
console.log("Costo total del viaje: $" + costoTotal );

//ejercicio 6
//Realizara un programa en el cual se van a leer tres números y determinar el cuadrado de cada uno de ellos.
// Números a calcular
let num1 = 4;
let num2 = 7;
let num3 = 3;
// Calcular cuadrados
let cuadrado1 = num1 ** 2;
let cuadrado2 = num2 ** 2;
let cuadrado3 = num3 ** 2;
// Mostrar resultados en consola
console.log("Cuadrado de " + num1 + " : " + cuadrado1);
console.log("Cuadrado de " + num2 + " : " + cuadrado2);
console.log("Cuadrado de " + num3 + " : " + cuadrado3);

//ejercicio 7
// En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El presupuesto anual del hospital se reparte conforme a la sig. tabla:
//Área Porcentaje del presupuesto Ginecología 40% Traumatología 30% Pediatría 30%
//Obtener la cantidad de dinero que recibirá cada área, para cualquier monto presupuestal.
// Presupuesto total
let presupuesto = 50000000;
// Calcular distribución
let ginecologia = presupuesto * 0.40;
let pediatria = presupuesto * 0.30;
let traumatologia = presupuesto * 0.30;
// Mostrar resultados en consola
console.log("Presupuesto total: $" + presupuesto );
console.log("Ginecología: $" + ginecologia );
console.log("Pediatría: $" + pediatria );
console.log("Traumatología: $" + traumatologia );

//ejercicio 8
//Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.
// Inversiones
let inversion1 = 5000000; 
let inversion2 = 3000000; 
let inversion3 = 2000000; 
// Calcular total invertido
let totalInversion = inversion1 + inversion2 + inversion3;
// Calcular porcentajes
let porcentaje1 = (inversion1 / totalInversion) * 100;
let porcentaje2 = (inversion2 / totalInversion) * 100;
let porcentaje3 = (inversion3 / totalInversion) * 100;
// Mostrar resultados en consola
console.log("Total invertido: $" + totalInversion );
console.log("Socio 1: " + porcentaje1.toFixed(2) + "%");
console.log("Socio 2: " + porcentaje2.toFixed(2) + "%");
console.log("Socio 3: " + porcentaje3.toFixed(2) + "%");

//ejercicio 9
//Realizar una calculadora con las operaciones básicas suma, división, multiplicación y división.
// Definir dos números
let numA = 20;
let numB = 8;

// Realizar operaciones
let suma = numA + numB;
let resta = numA - numB;
let multiplicacion = numA * numB;
let division = numB !== 0 ? numA / numB : "Error: División por cero";

// Mostrar resultados en consola
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);

//ESTRUCTURA DE CONTROLES
//EJEMPLO 1
// declarar dos variables y declarar una que sea  nombre y la otra edad y mostrar si es mayor de edad o no
/*let nombre = prompt ("ingrese su nombre");
let edad = parseInt(prompt("ingrese su edad"));

if (edad <= 18) {

    alert ("hola " + nombre + "  eres una persona joven");
} else if (edad <=40){
    alert("hola: " + nombre + "  eres una persona adulta");
} else if (edad <=60){
    alert("hola: " + nombre + "  eres una persona  madura");
} else {
    alert("hola: " + nombre + "  eres una persona anciana");
}*/

//EJEMPLO 2 
//CICLO WHILE
//declarar variable numerica que muestre la cuenta regresiva a llega a 0
// iniciamos la variable fuera del bucle
/*let cuentaAtras = parseInt(prompt ("ingrese un numero"));

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
  document.write  (cuentaAtras + '<br>')
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}

document.write('¡Despegue! 🚀'*/
//ejemplo 3
/*const NUMERO_REVISIONES = 3
let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás
  document.write(cuentaAtras)

  // creamos una variable para contar las revisiones realizadas
  // y la inicializamos a cero
  let revisionesRealizadas = 0

  // hasta que no hayamos realizado las 3 revisiones...
  while (revisionesRealizadas < NUMERO_REVISIONES) {
    // y sumamos 1 a las revisiones realizadas
    revisionesRealizadas = revisionesRealizadas + 1
    document.write(revisionesRealizadas + ' revisiones realizadas... ')
  }

  // ahora podemos restar 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}*/
//do while
//imprimir 5 edades de diferentes y determinar si son mayores de edad
/*let persona = 0
do {
    let nombre = prompt ("ingrese su nombre");
 let edad = parseInt(prompt("ingrese su edad"));
if (edad >= 18) {
    alert (nombre + "es mayor de edad");
}else {
    alert (nombre + "es menor de edad");
}
persona++;
}while (persona < 5)
    alert ("se registraron " + persona + "personas");
    alert ("fin del programa");*/

    //ciclo for 
    //imprimir las tablas de multiplicar del numero que el usuario digite hasta el numero 10, mostrar en pantalla la siguiente sintaxis 
    /*5 x 1 = 5
    5 x 2 = 10
    5 x 3 = 15
    5 x 4 = 20
    5 x 5 = 25
    5 x 6 = 30
    5 x 7 = 35
    5 x 8 = 40
    5 x 9 = 45
    5 x 10 = 50*/
    
    let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        document.write(numero + " x " + i + " = " + resultado + "<br>");
    }
    