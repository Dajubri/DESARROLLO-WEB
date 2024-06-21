/* SINTAXIS */

/* 
if(condicion)
  {bloque de codigo}

else{} 
*/



/* let amigo = prompt('ingrese su edad')

if(amigo>=25){
    alert('podes ingresar')
}
else{
    alert('no podes ingresar')
} */



/* let dato = prompt('dime algo')

if(!dato){
    alert('ERROR: DATO NO VALIDO')
}
else{
    alert('Todo esta bien')
} */



/* let puntos = prompt('ingresa tus puntos')

if(puntos >= 0 && puntos <= 1000){
    alert('principiante')
}
else if(puntos > 1000 && puntos <= 3000){
    alert('avanzado/a')
}
else if(puntos > 3000){
    alert('experimentado/a')
}
else{
    alert("ERROR: dato no valido")
} */


//EJERCICIOS

 
/* function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if(str1.length === str2.length){
        return true;
    }
    return false;
}
let igual = tienenMismaLongitud(gato, pepe);
console.log(igual); */

 
function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    if(num < 90){
        return true;
    }
    return false;
}
let menor = menosQueNoventa(80)
console.log(menor);

 
function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    if(num > 50){
        return true;
    }
    return false;
}
let mayor = mayorQueCincuenta(25)
console.log(mayor);

 
function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    if((num % 2) == 0){
        return true;
    }
    return false;
}
let numerPar = esPar(40)
console.log(numerPar);

 
function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    if(!(num % 2) == 0){
        return true;
    }
    return false
}
let numerImpar = esImpar(90)
console.log(numerImpar);

 
function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    return num * num;
}
let alCuadrado = elevarAlCuadrado(3)
console.log(alCuadrado)

 
function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    if( numero > 0 ){
        return "Es positivo"
    }
    if( numero < 0){
        return "Es negativo"
    }
    return false
}
let positivos = esPositivo(0)
console.log(positivos);

 
function esVocal(letra){
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //Escribe tu código aquí
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return('Es vocal')
    } else if (letra.length !== 1) {
    return('Dato incorrecto')
    }
}
let noEsConsonate = esVocal('e')
console.log(noEsConsonate);

   
function isVocal(char){
    if(["a", "e", "i", "o", "u"].includes(char.toLowerCase())&& char.length === 1){
    console.log("Es vocal")
    }else {
        console.log('Dato incorrecto')  
    }
}
isVocal("i");

   
function isVowel (vowel) {
    if (typeof vowel === 'string' && vowel.length === 1) {
    return vowel.match(/[aeiou]/) ? 
    console.log('Es vocal') : 
    console.log('No es Vocal')
    } else {
    console.log('Dato incorrecto')
    }
}
isVowel('bo');

if (1 + 1 === 2) {
    console.log('La expresión es verdadera');
}

 
function obtenerMayor(x, y) {
    // "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
    if(x > y) {
        return x;
}
    return y;
    }
let mayor2 = obtenerMayor(14, 15)
console.log(mayor2);

 
function mayoriaDeEdad(edad) {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
    if(edad >= 18){
        return("podes ingresar")
    }
    return("no podes ingresar")
}
let mayoriaEdad = mayoriaDeEdad(10)
console.log(mayoriaEdad);

 
function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
    if(status === 1){
        return("Online");
    }
    else if(status === 2){
        return("Away");
    }
    else{
    return("Offline");
}
}
let conexion = conection(1)
console.log(conexion);

 
function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:
    if(idioma === "aleman"){
        return("Guten tag!");
    }
    else if(idioma === "mandarin"){
        return("Ni Hao!");
    }
    else if(idioma === "english"){
        return("Hello!");
    }
}
let saludos = saludo("mandarin")
console.log(saludos);

 
function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuleve --> "This is blue"
    //En caso que el color recibido sea "red", devuleve --> "This is red"
    //En caso que el color recibido sea "green", devuleve --> "This is green"
    //En caso que el color recibido sea "orange", devuleve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    switch(color){
        case "blue":
    return("Thi is blue");
    break;
        case "red":
    return("Thi is red");
    break;
        case "green":
    return("Thi is green");
    break;
        case "orange":
    return("Thi is orange");
    break;
        default:
    return("Color not found")
}
}
let colores = colors("rosa")
console.log(colores);

 
function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    
/*     return numero === 5 || numero === 10;
}
esDiezOCinco(20); */

if (numero === 10 || numero === 5)
    console.log ("true")
    else if (!(numero === 10 || numero === 5)) {
    console.log ("false")
    }
}
esDiezOCinco(20);

 
function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    if(numero < 50 || numero > 20){
        return("true");
    }
        return("false");
}
let rango = estaEnRango(31)
console.log(rango);

 
function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:
    if(Number.isInteger()){
        return("true");
    }
    return("false");
}
let entero = esEntero(2.5)
console.log(entero);

 
function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if (numero % 3 === 0 && numero % 5 === 0) {
    return('Fizzbuzz');
} 
    else if (numero % 5 === 0) {
    return('Bizz');
} 
    else if (numero % 3 === 0) {
    return('Fizz');
}
    else if(!(numero % 5 === 0 || numero % 3 === 0)) {
    return(numero)
}
}
let numeDivisible = fizzBuzz(45);
console.log(numeDivisible);

 function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
}

 
function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
}

 
function esVerdadero(valor){
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí

}

 
function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí   
    
}

 
function tieneTresDigitos(numero){
    //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
    //Escribe tu código aquí
    
}

 
function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
}






























































/*
Crea una variable llamada "tieneHijos" y asígnale "true" si tienes hijos o "false" si no los tienes. A continuación, escribe una línea de código para mostrar el valor de la variable en una alerta.

Crea una variable llamada "salario" y  solicita un salario actual como valor. A continuación, escribe una línea de código que calcule el salario anual multiplicando el salario mensual por 12 y muestre el resultado en una alerta.

Escribe un condicional que verifique si una variable llamada "edad" es mayor o igual a 18. Si es mayor o igual a 18, imprime "Eres mayor de edad" en la consola. Si no es mayor de edad, imprime "Eres menor de edad" en una alerta.

De un empleado se sabe su sueldo y los años de antigüedad. el sector de contabilidad nos pide hacer un programa que lea los datos y nos muestre.
1)	Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
2)	Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
3)	Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.
*/






/* const button = document.querySelector("button");

button.onclick = function () {
  let name = prompt("¿Cuál es tu nombre?");
  alert("¡Hola " + name + ", encantado de verte!");
}; */


