/* BUCLE WHILE */
/*  sintaxis   */


/*
let nombre = prompt('ingrese su nombre')

while(!nombre){
    alert("ERROR: DATO NO VALIDO")
    nombre = prompt("Ingresa nuevamente el valor")
}
alert('dato correcto') 
*/


/* 
let cantidad_de_repeticion = prompt('Ingresa cuantos numeros vas a sumar')
while(!cantidad_de_repeticion || isNaN(cantidad_de_repeticion)){
    cantidad_de_repeticion = prompt('ERROR: vuelve a ingresar el numero')
}
*/


/* BUCLE FOR */
/*  sintaxis  */


/*  
for(let iterador = valor_inicial; limite "mientas mi iterador sea menor o igual a 3"; actualizacion )

for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    console.log('me ejecuto' + i)}
*/

/* for(let iterador = 1; iterador<=10; iterador = iterador +1){
    alert (iterador)
} 
*/

/* for (let i = 0; i >= 0; i++) {
    console.log(i);
} 
*/


/* 
let sumatoria = 0 
let cantidad_de_repeticion = prompt('Ingresa cuantos numeros vas a sumar')
while(!cantidad_de_repeticion || isNaN(cantidad_de_repeticion)){
    cantidad_de_repeticion = prompt('ERROR: vuelve a ingresar el numero')
}
for(let iterador = 1; iterador <= cantidad_de_repeticion; iterador = iterador + 1){
    let numero = prompt('ingrese un numero')
    while(!numero || isNaN(numero)){
        numero = prompt('ERROR: vuelve a ingresar el numero')
    }
    numero = Number(numero)
    sumatoria = sumatoria + numero

}

alert('Resultado: ' + sumatoria)
alert('gracias por usar nuestra pagina')
*/



const nombres = ['pepe', 'juan', 'maria', 'ezequiel']


for(let index = 0; index < nombres.length; index = index + 1){
    let nombre = nombres[index]

    console.log('Hola ' + nombre)
}


//for...of
for(let nombre of nombres){
    //console.log(nombre)
    console.log('hola' + ' ' +nombres[2]) // Hola maria
}



const carrito = [
    {
        nombre: 'tv samsung',
        precio: 300,
        cantidad: 3
    },
    {
        nombre: 'patineta',
        precio: 30,
        cantidad: 1
    },
]

for(let index = 0; index < carrito.length; index = index + 1){
    const producto = carrito[index] 
    
  //console.log(producto)
    console.log('Has comprado el producto ' + producto.nombre + ' x ' + producto.cantidad + ' a un precio unitario de ' + producto.precio)
    // Has comprado el producto tv samsung x 3 a un precio unitario de 300
}



const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: 20
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodrigez',
        edad: 35
    },
]

let sumatoriaEdad = 0
for(let index = 0; index < personajes.length; index = index + 1){
    const personaje = personajes[index] 
    console.log('Hola mi nombre es ' + personaje.nombre + ' ' + personaje.apellido + ' y tengo ' + personaje.edad + ' años')
    sumatoriaEdad = sumatoriaEdad + personaje.edad
}
console.log('La sumatoria de edades es ' + sumatoriaEdad)



for(let index = 0; index < personajes.length; index = index + 1){
    console.log(personajes[index]) //personajes con for
}

for(const personaje of personajes){
    console.log(personaje) //personajes con for...of
}



const datos = {
    'nombre': 'pepe',
    'apellido': 'suarez',
    'dni': '54543565'
}

let resultado = ''

//for...in
for(let propiedad in datos){
    resultado = resultado + '\n<span>' + propiedad + ':</span> ' + '<span>' + datos[propiedad] + '</span>' 

}
console.log(resultado) 


// EJERCICIOS

 


















  








































































/*  
Solicitar al usuario la cantidad de personas en la clase (numero)
Dependiendo de la cantidad de alumnos de la clase van a solicitar a cada uno el nombre
(
    Si la cantidad de personas de clase es 5, van solicitar 5 nombre
)
Luego de solicitar los nombres mostrarlos en este formato:

'
Lista de alumnos: 
-juan
-pepe
-maria
-carla
-julieta
'

alert('lista: \n-pepe\n-juan') */

