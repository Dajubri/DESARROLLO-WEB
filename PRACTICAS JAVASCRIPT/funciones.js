/* SINTAXIS */

/* 
function sumar(a, b){
    a = a + 2
    console.log('el resultado de la suma es ' + (a + b))
}

sumar(2,3);  //resultado en consola seria 7 
 */



function saludar(nombre){
    alert("Hola " + nombre)
} 




/* 
function obtenerNumero(){
    let num = prompt('ingrese un numero')
    while(!num || isNaN(num)){
        num = prompt('Error: vuelve a ingresar el numero')
    }
    num = Number(num)
    return num;
}
 */

/*  
function calcularIva(precio) {
    return precio * 0.21;
}
*/



// EJERCICIOS
 
function devolverString(str) {
    // "Return" la string provista: str
    // Tu código:
    return str;
}
let string1 = devolverString('hola')
console.log(string1);

 
function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    return x + y;
}
const sumatoria = suma(4, 7)
console.log(sumatoria);

 
function resta(x, y) {
    // Resta "y" de "x" y devuelve el valor
    // Tu código:
    return x - y;
}
let resultado = resta(12, 2);
console.log(resultado);

 
function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    return x * y;
}
let producto = multiplica(4, 20);
console.log(producto);

 
function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    return x / y;
}
let diferencia = divide(80, 10);
console.log(diferencia);

 
function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    return x === y;
}
let igualdad = sonIguales(5, 4 + 1);
console.log(igualdad);

 
function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    return x % y;
}
let resto = obtenerResto(20, 5)
console.log(resto);

 
function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    return num ** 3;
}
let alCubo = elevarAlCubo(3)
console.log(alCubo);

 
function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    return Math.pow(num, exponent);
}
let exponente = elevar(3, 4)
console.log(exponente);

 
function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    return Math.round(num);
}
let redondeo = redondearNumero(2.9)
console.log(redondeo);

 
function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    return Math.ceil(num);
}
let redondeoArriba = redondearHaciaArriba(9.3)
console.log(redondeoArriba);

 
function numeroRandom(max) {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    return Math.floor(Math.random() * max); 
}
let numeRandon = numeroRandom()
console.log(numeroRandom(10));

 
/* function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    return "str!";
}
let exclamacion = agregarSimboloExclamacion()
console.log(exclamacion); */

 
function combinarNombres(nombre, apellido){
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    // Tu código:
    console.log(nombre, apellido);
}
combinarNombres('david ventura');

 
function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    console.log("hola"+ " " + nombre);
}
obtenerSaludo("pepe")

 
function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
    return(alto * ancho);
}
let areaRectangulo = obtenerAreaRectangulo(18, 10)
console.log(areaRectangulo);

 
function retornarPerimetro(lado){
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    return(lado * 4);
}
let perimetroCuadrado = retornarPerimetro(20)
console.log(perimetroCuadrado)

 
function areaDelTriangulo(base, altura){
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    return((base / 2) * altura);
}
let areaTriangulo = areaDelTriangulo(20, 15)
console.log('area' + ' ' + areaTriangulo);

 
function deEuroAdolar(euro){
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    return(euro * 1.20);
}
let cambioADolar = deEuroAdolar(500)
console.log(cambioADolar);




















