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
/*let numero = parseFloat(prompt("Ingrese un número:"));

if (numero < 10) {
    console.log("Es un número menor que 10");
} else if (numero >= 10 && numero <= 20) {
    console.log("Es un número entre 10 y 20");
} else {
    console.log("Es un número mayor que 20");
}*/

//EJERCICIO 20
/*Escribe un programa que solicite al usuario su género y su edad. Si el usuario
es de género masculino y tiene más de 18 años, muestra un mensaje que
indique que es elegible para el servicio militar; en caso contrario, muestra un
mensaje que diga que no es elegible.*/
/*let genero = prompt("Ingrese su género (Masculino/Femenino):").toLowerCase();
let edad = parseInt(prompt("Ingrese su edad:"));

if (genero === "masculino" && edad > 18) {
    console.log("Eres elegible para el servicio militar.");
} else {
    console.log("No eres elegible para el servicio militar.");
}*/

//EJERCICIO 3
/* VERIFICA SI UNA PERSONA ES MAYOR DE EDAD  O NO (mayor o igual a 18 )e indica cuantos años le faltan*/
/*let edad = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    let añosFaltantes = 18 - edad;
    console.log("Eres menor de edad. Te faltan " + añosFaltantes + " años para ser mayor de edad.");
}*/

//EJERCICIO 4
/*usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let edad = parseInt(prompt("Ingrese su edad:"));

let categoria = (edad >= 18) ? "adulto" : "menor";

console.log("Usted es: " + categoria);*/


/*FUNCIONES
function saludar() {
    document.write("probando estas funciones")
}
saludar();
*/
//ejercicios
/*
function sumar(){
    return 6 + 12;
}
//opcion 1
alert (sumar());
/*opcion 2
const resultado = sumar();
document.write(resultado); */

/*
function getRandomNumber() {
    // recuperamos un número aleatorio entre 0 y 1
    const random = Math.random() // por ejemplo: 0.6803487380457318
  
    // lo multiplicamos por 10 para que esté entre 0 y 10
    const multiplied = random * 10 // -> 6.803487380457318
  
    // redondeamos hacia abajo para que esté entre 0 y 9
    const rounded = Math.floor(multiplied) // -> 6
  
    // le sumamos uno para que esté entre 1 y 10
    const result = rounded + 1 // -> 7
  
    // devolvemos el resultado
    return result
  }
*/
/*
function saludar (nombre){
    alert ("hola " + nombre);
}
saludar ("lorena")*/

/*EVIDENCIA–JAVASCRIPT AVANZADA
FUNCIONES:
¿Que es una Función?: Una función es un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función,
 debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes 
 definirla en algún lugar del ámbito desde el que deseas llamarla. 

DEFINIR FUNCIONES:
Declaración de función
Una definición de función (también denominada declaración de función o expresión de función ) consta de la palabra clave "FUNCTION", seguida de:
El nombre de la función.
Una lista de parámetros de la función, entre paréntesis y separados por comas.
Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }
EJEMPLO:*/
function sumar(a,b) {
    return a + b;
  }
  console.log (sumar(4,3));

  /*TIPOS DE FUNCIONES: 
  FUNCIONES DECLARADAS:las funciones declarativas son aquella funciones donde utilizas la palabra reservada function al inicio de la línea
  Se definen con la palabra clave function.
Se pueden llamar antes de su declaración debido al levantamiento .
Tienen un nombre y pueden ser reutilizados.
  EJEMPLO:*/
  function saludar() {
    console.log("¡Hola!");
}
saludar(); // "¡Hola!"

/*FUNCIONES EXPRESADAS: Las funciones de expresión son aquellas funciones que se guardan en una variable con las palabras reservadas var, const o let
Se asignan a una variable.
No se pueden llamar antes de su definición porque no tienen hoisting.
Pueden ser anónimos o nombradas.
EJEMPLO*/
const numero = function() {
    console.log("564");
};
numero(); 


/*FUNCIONES FLECHA:Las Funciones Flecha o Arrow Functions son una nueva sintaxis para definir funciones anónimas en JavaScript de un modo más conciso.
 Al ser una sintaxis abreviada, nos ahorrará bastante tiempo, además de simplificar el ámbito de la función. 
 Sintaxis más corta ( =>).
No tienen su propio this.
Se usan comúnmente en callbacks y funciones de orden superior .
EJEMPLO:*/
const  nombre= () => {
    console.log("andres");
};
nombre(); 

/*FUNCIONES ANONIMAS:Las funciones anónimas (o funciones lambda) son un tipo de funciones que se declaran sin definir un nombre de función, alojándolas en el interior de una variable y haciendo referencia a dicha variable cada vez que queramos utilizarla.
 En JavaScript, una función anónima es una función que no tiene un nombre específico.
 No tienen nombre.
Se usan en callbacks y funciones de orden superior.
No pueden ser llamadas directamente (solo a través de una variable o callback).
EJEMPLO: */
setTimeout(function() {
    console.log("¡Hola después de 1 segundo!");
}, 1000);

/*FUNCIONES DE ORDEN SUPERIOR:Las funciones de orden superior son aquellas que llaman a otras funciones o que devuelven funciones.
 Estas funciones sirven para esconder el detalle y proporcionan un mayor nivel de abstracción. Algunas funciones de orden superior
  que se utilizan ampliamente en JavaScript son: 
Array.prototype.forEach (), Array.prototype.filter (), Array.prototype.map (), Array.prototype.sort (), Array.prototype.reduce ()
Se usan en métodos como:
El método forEach
El método del mapa
El método de filtrado
El método de reducción
El método de clasificación
El método (cada)
El método some. 
EJEMPLO:
/*Ejemplo con map()*/
const numeros = [2, 4, 6, 8];
const dobles = numeros.map(num => num * 2);
console.log(dobles);

/*función que recibe otra función */
function operar(a, b, operacion) {
    return operacion(a, b);
}
const resta = (x, y) => x - y;
console.log(operar(5, 3, resta)); 

/*FUNCIONES ASÍNCRONAS:Las funciones asíncronas se usan para trabajar con promesas de forma más clara. se declaran con la palabra clave async y permiten el uso de la palabra clave await dentro de ellas. Esto hace que el código sea más legible y fácil de entender, ya que puedes escribir código asíncrono de manera similar al código síncrono.
async: Declara una función asíncrona.
await: Pausa la ejecución de la función asíncrona hasta que la promesa se resuelva.
EJEMPLO:*/
// Declarar una función asíncrona
async function saludar() {
    console.log("Cargando...");
    await new Promise(resolve => setTimeout(resolve, 3000)); 
    console.log("¡Hola, este es un mensaje después de 3 segundos!");
}
saludar();

/*ARREGLOS
¿Que son los arreglos?: Un arreglo (array) es una estructura de datos que permite almacenar varios valores en una sola variable.
Los elementos del arreglo están ordenados y se acceden por su índice, comenzando desde 0
EJEMPLO:*/
// Crear un arreglo de frutas
let frutas = ["Manzana", "Banana", "Naranja", "Uva"];
// Acceder a elementos del arreglo usando su índice
console.log(frutas[0]); // "Manzana"
console.log(frutas[2]); // "Naranja"
// Modificar un elemento del arreglo
frutas[1] = "Pera";
console.log(frutas); // ["Manzana", "Pera", "Naranja", "Uva"];
// Agregar un nuevo elemento al final con push()
frutas.push("Sandía");
console.log(frutas); // ["Manzana", "Pera", "Naranja", "Uva", "Sandía"];
// Eliminar el último elemento con pop()
frutas.pop();
console.log(frutas); // ["Manzana", "Pera", "Naranja", "Uva"];
// Saber la cantidad de elementos con length
console.log("Número de frutas:", frutas.length); // 4
// Recorrer un arreglo con un bucle for
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
// Recorrer un arreglo con forEach (método más moderno)
frutas.forEach(fruta => console.log(fruta));

/*Métodos Importantes para Trabajar con Arreglos
push() – Agrega varios elementos al final del arreglo.*/
let valores = [1, 2, 3];
valores.push(4, 5, 6);
console.log(valores); 

/*shift() – Elimina el primer elemento y lo devuelve.*/
let elementos = ["A", "B", "C", "D"];
let eliminado = elementos.shift();
console.log(eliminado); // "A"
console.log(elementos); 

/*  pop() – Elimina el último elemento y lo devuelve.*/
let colores = ["Rojo", "Verde", "Azul"];
let ultimo = colores.pop();
console.log(colores); // ["Rojo", "Verde"]
console.log(ultimo); // "Azul"

/*unshift() – Agrega varios elementos al inicio. */
let dias = ["Martes", "Miércoles"];
dias.unshift("Lunes");
console.log(dias); // ["Lunes", "Martes", "Miércoles"]

/*length – Devuelve la cantidad de elementos en el arreglo.*/
let letras = ["A", "B", "C", "D"];
console.log(letras.length); // 4

/* indexOf() – Encuentra la posición de un elemento. */
let ciudades = ["Bogotá", "Lima", "Santiago"];
console.log(ciudades.indexOf("Lima")); // 1
console.log(ciudades.indexOf("Madrid")); // -1 (No encontrado)

/*includes() – Verifica si un elemento está en el arreglo. */
let animales = ["Perro", "Gato", "Elefante"];
console.log(animales.includes("Gato")); // true
console.log(animales.includes("León")); // false

/* splice() – Elimina y reemplaza elementos. */
let meses = ["Enero", "Febrero", "Marzo"];
meses.splice(1, 1, "Abril"); // Reemplaza "Febrero" con "Abril"
console.log(meses); // ["Enero", "Abril", "Marzo"]

/* Programación Orientada a Objetos (POO) en JavaScript */

/*
CONCEPTO:
La Programación Orientada a Objetos (POO) es un paradigma de programación basado en la organización del código en "objetos", 
que combinan datos (propiedades) y funcionalidades (métodos). 
JavaScript es un lenguaje basado en prototipos, pero permite el uso de clases para implementar la POO.
*/

/*
CARACTERÍSTICAS PRINCIPALES DE POO:
1. **Clases**: Plantillas para crear objetos con características similares.
2. **Objetos**: Instancias de una clase que contienen propiedades y métodos.
3. **Encapsulamiento**: Oculta los detalles internos de un objeto, exponiendo solo lo necesario.
4. **Herencia**: Permite que una clase herede propiedades y métodos de otra.
5. **Polimorfismo**: Permite que una función o método se comporte de manera diferente según el objeto que lo llame.
*/

// EJEMPLO DE POO EN JAVASCRIPT

// Definición de una Clase
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método de la clase
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Creación de un objeto (instancia de la clase Persona)
const persona1 = new Persona("Carlos", 25);
persona1.saludar(); // "Hola, mi nombre es Carlos y tengo 25 años."

/*
MÉTODOS IMPORTANTES EN POO:
- **Constructor:** Método especial para inicializar objetos.
- **Métodos de instancia:** Métodos que pertenecen a un objeto creado a partir de una clase.
- **Métodos estáticos:** Métodos que pertenecen a la clase y no a una instancia específica.
*/
// Ejemplo de método estático
class Matematica {
    static sumar(a, b) {
        return a + b;
    }
}
console.log(Matematica.sumar(5, 3)); // 8
/*
TIPOS DE POO SEGÚN SU IMPLEMENTACIÓN:
1. **POO Clásica**: Se basa en clases y objetos (como en Java, C++, Python).
2. **POO basada en prototipos**: JavaScript usa prototipos en lugar de clases tradicionales.
*/
// Ejemplo de POO con Prototipos en JavaScript
function Animal(nombre) {
    this.nombre = nombre;
}
Animal.prototype.hablar = function () {
    console.log(`${this.nombre} hace un sonido.`);
};
const perro = new Animal("Firulais");
perro.hablar(); // "Firulais hace un sonido."

/* MANEJO DE EVENTOS Y EL DOM (Document Object Model) */

/*
CONCEPTO:
El DOM (Document Object Model) es una representación en forma de árbol de los elementos de una página web.
JavaScript permite acceder, modificar y manipular estos elementos dinámicamente.
El manejo de eventos permite responder a interacciones del usuario en la página.
*/

/*
CARACTERÍSTICAS PRINCIPALES DEL DOM:
1. **Estructura Jerárquica**: Los elementos de la página están organizados en una estructura de árbol.
2. **Accesibilidad**: Podemos acceder a cualquier elemento del HTML mediante JavaScript.
3. **Manipulación**: Permite modificar contenido, atributos y estilos dinámicamente.
4. **Eventos**: Se pueden asignar eventos a elementos para reaccionar a interacciones del usuario.
*/

// SELECCIÓN DE ELEMENTOS EN EL DOM
// Obtener un elemento por su ID
document.getElementById("miElemento").innerText = "¡Hola desde JavaScript!";

// Obtener elementos por clase
document.getElementsByClassName("miClase")[0].style.color = "red";

// Obtener elementos por selector
document.querySelector("#miElemento").style.fontSize = "20px";

document.querySelectorAll(".miClase").forEach(el => el.style.backgroundColor = "yellow");

/*
MANEJO DE EVENTOS EN JAVASCRIPT:
Los eventos permiten ejecutar código cuando el usuario interactúa con la página.
Algunos eventos comunes son:
- click: Cuando el usuario hace clic en un elemento.
- mouseover: Cuando el usuario pasa el mouse sobre un elemento.
- keydown: Cuando el usuario presiona una tecla.
- load: Cuando la página ha terminado de cargar.
*/

// ASIGNAR EVENTOS
// Método 1: HTML Inline (No recomendado)
// <button onclick="alert('¡Hola!')">Click aquí</button>

// Método 2: addEventListener (Recomendado)
const boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
    alert("¡Botón clickeado!");
});

// Evento para cambiar el color de un div al pasar el mouse
const caja = document.getElementById("miCaja");
caja.addEventListener("mouseover", function() {
    caja.style.backgroundColor = "blue";
});
caja.addEventListener("mouseout", function() {
    caja.style.backgroundColor = "white";
});

/*
MODIFICACIÓN DEL DOM:
Podemos modificar el contenido, agregar o eliminar elementos en tiempo real.
*/

// Cambiar el contenido de un elemento
document.getElementById("titulo").innerText = "Nuevo título desde JavaScript";

// Crear un nuevo elemento y añadirlo al DOM
const nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Este párrafo fue agregado dinámicamente.";
document.body.appendChild(nuevoParrafo);


/* MÓDULOS EN JAVASCRIPT */

/*
CONCEPTO:
Los módulos en JavaScript permiten dividir el código en archivos reutilizables y organizados.
Se utilizan las palabras clave `export` y `import` para compartir código entre archivos.
*/

// Exportar una función desde un módulo (archivo llamado modulo.js)
export function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// Exportar una constante
export const PI = 3.1416;

// Exportar una clase
export class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    presentarse() {
        return `Hola, mi nombre es ${this.nombre}`;
    }
}

// Importar la función en otro archivo
import { saludar, PI, Persona } from "./modulo.js";

console.log(saludar("Carlos")); // "Hola, Carlos!"
console.log(`El valor de PI es ${PI}`);

const juan = new Persona("Juan");
console.log(juan.presentarse()); // "Hola, mi nombre es Juan"

/*
TIPOS DE EXPORTACIÓN:
1. **Exportación nombrada**: Se exportan múltiples elementos con sus nombres específicos (`export { algo }`).
2. **Exportación por defecto**: Se exporta un solo valor como predeterminado (`export default algo`).
*/

// Exportación por defecto (modulo.js)
export default function despedirse(nombre) {
    return `Adiós, ${nombre}!`;
}

// Importación por defecto
import despedirse from "./modulo.js";
console.log(despedirse("Carlos")); // "Adiós, Carlos!"

/* PROGRAMACIÓN ASÍNCRONA EN JAVASCRIPT */

/*
CONCEPTO:
La programación asíncrona permite ejecutar tareas sin bloquear el flujo del programa.
Es útil cuando se trabaja con operaciones que toman tiempo, como solicitudes a servidores o lectura de archivos.
Se maneja principalmente con **callbacks**, **promesas** y **async/await**.
*/

/*
CARACTERÍSTICAS:
1. **No bloqueante**: No detiene la ejecución del código mientras espera una respuesta.
2. **Eficiencia**: Permite que múltiples tareas se ejecuten en paralelo.
3. **Manejo de eventos**: Ideal para responder a eventos del usuario o solicitudes de red.
*/

/* CALLBACKS */
// Una función que recibe otra función como parámetro y se ejecuta después de un tiempo
function operacionAsincrona(callback) {
    setTimeout(() => {
        console.log("Operación completada");
        callback();
    }, 2000);
}

function mensaje() {
    console.log("Ejecutando callback después de la operación");
}

operacionAsincrona(mensaje);

/* PROMESAS */
// Una promesa representa una operación que puede completarse (resolve) o fallar (reject)
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let exito = true; // Simulamos éxito o fallo
            if (exito) {
                resolve("Datos obtenidos correctamente");
            } else {
                reject("Error al obtener datos");
            }
        }, 3000);
    });
}

// Manejo de la promesa con .then() y .catch()
obtenerDatos()
    .then(respuesta => console.log(respuesta))
    .catch(error => console.error(error));

/* ASYNC/AWAIT */
// Permite escribir código asíncrono de forma más clara
async function obtenerDatosAsync() {
    try {
        console.log("Cargando...");
        let respuesta = await obtenerDatos();
        console.log(respuesta);
    } catch (error) {
        console.error(error);
    }
}

obtenerDatosAsync();







