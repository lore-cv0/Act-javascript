//EJERCICIO 2
/*crea una variable llamada precio y asignale un valor decimal.
 luego crea una variable llamada cantidad y asignale un valor entero.
muestra el tipo de dato de cada variable en la consola*/
/*let precio = 0.5;
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
/*let num1 = 4;
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
    
    /*let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        document.write(numero + " x " + i + " = " + resultado + "<br>");
    }*/
    
        //imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
        /*let usuario = prompt("ingrese su usuario");
        let contraseña = prompt("ingrese su contraseña");
        let usuarioCorrecto = "usuario";
        let contraseñaCorrecta = "contraseña";
        if (usuario == usuarioCorrecto && contraseña == contraseñaCorrecta){
            console.log("bienvenido al sistema");
        } else {
            console.log("usuario o contraseña incorrecta");
        }*/

           /* let finde =false ;
            if(finde=false){
                console.log("puedes salvar al mundo")
            }
            else{
                console.log("sigue descansando, superheroe")
            }*/
//swith
//ejemplo 1: ingresar un programa  que determine en que dia d la semana corresponde hoy,utilizando la funcion prompt

/*const dia = new Date().getDay()

switch (dia) {
  case "lunes":
    console.log("¡Hoy es lunes! 😢")
        break
    }
    case 2:
        console.log("¡Hoy es martes! 😢")
        break
        case 3:
            console.log("¡Hoy es miercoles! 😢")
            break
            case 4:
                console.log("¡Hoy es jueves! 😢")
                break
                case 5:
                    console.log("¡Hoy es viernes! 😢")
                    break
                    case 6:
                        console.log("¡Hoy es sabado! 😢")
                        break
                        case 0:
                            console.log("¡Hoy es domingo! 😢")
                            break
  default:
    console.log("No es lunes, YAY! 🚀")
    break
}*/
/*con swith realizar: el usuario de nombre y edad con la siguiente verificacion
1 a 18 es joven
19 a 40 es adulto
41 a 60 es maduro
61 en adelante anciano*/
/*let nombre = prompt ("ingrese su nombre");
let edad = parseInt(prompt("ingrese su edad"));

switch (true) {
    case (edad <= 18):
        alert("Hola " + nombre + ", eres una persona joven");
        break;
    case (edad <= 40):
        alert("Hola " + nombre + ", eres una persona adulta");
        break;
    case (edad <= 60):
        alert("Hola " + nombre + ", eres una persona madura");
        break;
    default:
        alert("Hola " + nombre + ", eres una persona anciana");
}*/


//Ejercicios - Estructuras de control en JavaScript
//EJERCICIO 2
/* Dada las 3 calificaciones que el estudiante obtuvo en un curso
a) Determinar su promedio
b) Indicar si el estudiante aprobó o no aprobó el curso.
Las notas deben ser de 1 a 10 y aprueba con un promedio mayor de 6*/
/*let nota1 =parseInt(prompt("ingrese la primera nota"));
let nota2 =parseInt(prompt("ingrese la segunda nota"));
let nota3 =parseInt(prompt("ingrese la tercera nota"));
let promedio = (nota1 +nota2 + nota3)/3;
if (promedio >= 6){
    console.log("el promedio del estudiante es: " + promedio + " y ha aprobado el curso");
}else {
    console.log("el promedio del estudiante es: " + promedio + " y no ha aprobado el curso");
}*/

//EJERCICIO 4
//Leer dos números y los imprima en forma ascendente
/*let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));

let numeros = [num1, num2];
numeros.sort((a, b) => a - b);
console.log("Números en orden ascendente: ", numeros);

//EJERCICIO 6
/*Dado un número entre 1 y 7 escriba su correspondiente día de la semana
así:
DIA1 = LUNES
DIA2 = MARTES
DIA3 = MIERCOLES
DIA4 = JUEVES
DIA5 = VIERNES
DIA6 = SABADO
DIA7 = DOMINGO
Si se escribe otro número diferente debe salir el mensaje: ESCRIBIÓ UN
NÚMERO FUERA DEL RANGO. ESCRIBA UN NÚMERO ENTRE 1 Y 7*/

/*const dia = parseInt(prompt("Ingrese un número entre 1 y 7:"));

switch (dia) {
    case 1:
        console.log("DIA1 = LUNES");
        break;
    case 2:
        console.log("DIA2 = MARTES");
        break;
    case 3:
        console.log("DIA3 = MIERCOLES");
        break;
    case 4:
        console.log("DIA4 = JUEVES");
        break;
    case 5:
        console.log("DIA5 = VIERNES");
        break;
    case 6:
        console.log("DIA6 = SABADO");
        break;
    case 7:
        console.log("DIA7 = DOMINGO");
        break;
    default:
        console.log("ESCRIBIÓ UN NÚMERO FUERA DEL RANGO. ESCRIBA UN NÚMERO ENTRE 1 Y 7");
}

//EJERCICIO 8
/*un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.
manera:
a) Si trabaja 40 horas o menos se le paga $16000 por hora
b) Si trabaja más de 40 horas se le paga $20000 por hora*/
/*let horas = parseInt(prompt("Ingrese el número de horas trabajadas en la semana"));
let salario;

if (horas <= 40) {
    salario = horas * 16000;
} else {
    salario = (40 * 16000) + ((horas - 40) * 20000);
}

console.log("El salario semanal del obrero es: $" + salario);*/

//EJERCICIO 10
/*Hacer un programa que calcule el total a pagar por la compra de camisas. Si
se compran tres camisas o mas se aplica un descuento del 20% sobre el total
de la compra y si son menos de tres camisas un descuento del 10%.*/
/*let cantidad = parseInt(prompt("ingrese la cantidad de camisas que desea comprar"));
let precio = parseInt(prompt("ingrese el precio de cada camisa"));
let total = cantidad * precio;
let descuento;
if (cantidad >= 3) {
    descuento = total * 0.20; // 20% de descuento
} else {
    descuento = total * 0.10; // 10% de descuento
}

let totalPagar = total - descuento;

console.log("El total a pagar por las camisas es: $" + totalPagar);*/

//EJERCICIO 12 
/*Realizar una calculadora con las operaciones básicas suma, división,
multiplicación y división.*/
/*let num1 = parseFloat(prompt("Ingrese el primer número"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));
let operacion = prompt("Ingrese la operación a realizar (+, -, *, /)");

let resultado;

if (operacion === "+") {
    resultado = num1 + num2;
} else if (operacion === "-") {
    resultado = num1 - num2;
} else if (operacion === "*") {
    resultado = num1 * num2;
} else if (operacion === "/") {
    if (num2 !== 0) { // Evitar división por cero
        resultado = num1 / num2;
    } else {
        resultado = "Error: No se puede dividir por cero.";
    }
} else {
    resultado = "Operación no válida.";
}

console.log("El resultado es: " + resultado);*/

//EJERCICIO 14 
/*Crea un programa que calcule el índice de masa corporal (IMC) de una
persona y muestre un mensaje indicando si la persona está bajo peso, peso
normal, sobrepeso u obesidad.*/
/*let peso = parseFloat(prompt("Ingrese su peso en kg:"));
let altura = parseFloat(prompt("Ingrese su altura en metros:"));

if (peso > 0 && altura > 0) { // Verifica que los valores sean válidos
    let imc = peso / (altura * altura); // Fórmula del IMC
    let mensaje;

    if (imc < 18.5) {
        mensaje = "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        mensaje = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        mensaje = "Sobrepeso";
    } else {
        mensaje = "Obesidad";
    }

    console.log("Su IMC es: " + imc.toFixed(2) + ". Clasificación: " + mensaje);
} else {
    console.log("Error: Ingrese valores válidos para peso y altura.");
}*/

//EJERCICIO 16
/*16.Desarrolla un programa que solicite la nota final de la materia de algoritmos
y generar el criterio de la nota, de acuerdo a la siguiente tabla.*/
/*let nota = parseFloat(prompt("Ingrese su nota final (1.0 - 5.0):"));
let criterio;

if (nota >= 4.5 && nota <= 5.0) {
    criterio = "Desempeño Superior";
} else if (nota >= 3.9 && nota < 4.5) {
    criterio = "Desempeño Alto";
} else if (nota >= 3.4 && nota < 3.9) {
    criterio = "Desempeño Básico";
} else if (nota >= 1.0 && nota < 3.4) {
    criterio = "Desempeño Bajo";
} else {
    criterio = "Error: Nota fuera de rango. Ingrese un valor entre 1.0 y 5.0.";
}

console.log("Su nota es: " + nota.toFixed(2) + ". Criterio: " + criterio);*/

//EJERCICIO 18
/*18.Escribe un programa que imprima "Es un número menor que 10" si el número
ingresado es menor que 10, "Es un número entre 10 y 20" si el número
ingresado está entre 10 y 20, y "Es un número mayor que 20" si el número
ingresado es mayor que 20.*/
let numero = parseFloat(prompt("Ingrese un número:"));

if (numero < 10) {
    console.log("Es un número menor que 10");
} else if (numero >= 10 && numero <= 20) {
    console.log("Es un número entre 10 y 20");
} else {
    console.log("Es un número mayor que 20");
}

//EJERCICIO 20
/*Escribe un programa que solicite al usuario su género y su edad. Si el usuario
es de género masculino y tiene más de 18 años, muestra un mensaje que
indique que es elegible para el servicio militar; en caso contrario, muestra un
mensaje que diga que no es elegible.*/
let genero = prompt("Ingrese su género (Masculino/Femenino):");
let edad = parseInt(prompt("Ingrese su edad:"));

if (genero === "masculino" && edad > 18) {
    console.log("Eres elegible para el servicio militar.");
} else {
    console.log("No eres elegible para el servicio militar.");
}