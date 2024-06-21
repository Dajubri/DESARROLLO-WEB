/* [ ] LOS ARRAYS (lista,coleccion,arreglos,matriz) SE USAN PARA LISTAR (enlistar) ELEMENTOS, en el fondo son objetos y tiene un orden (index) */

/* SINTAXIS */

const nombres = [
    //indice/index: 0, 1, 2, 3, 4, 5, 6, 7 //length: 8
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex',
    'oscar',
    'david'
]


const productos = [
    {
        nombre: 'tv samsung',
        marca: 'Samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'celular samsung',
        marca: 'samsung',
        id: 4,
        precio: 1100
    },
    {
        nombre: 'tv LG',
        marca: 'LG',
        id: 2,  
        precio: 2900
    },  
    {
        nombre: 'tv noblex',
        marca: 'Noblex',   
        id: 3,  
        precio: 2300
    },
]


let notaTrimestre1 = 9
let notaTrimestre2 = 10
let notaTrimestre3 = 6

        //indice/index: 0, 1,  2
const notasTrimestre = [9, 10, 6]

console.log('el segundo trimestre te sacaste un:' /*.trim() metodo*/ + ' ' + notasTrimestre[1]);

console.log(typeof []);

console.log(Object(notasTrimestre)); //el array se transforma en un objeto

notasTrimestre[1] = 4 //cambiamos el valor

console.log(notasTrimestre.length); //.length es una propiedad



nombres[5] = 'alexis' //cambiamos el nombre 'alex' por 'alexis'
nombres[nombres.length - 1] = 'alejandro'

//metodos mutables que modifican el array original
nombres.pop() //elimina el ultimo elemento y lo retorna
nombres.shift() //elimina el primer elemento y lo retorna
nombres.push('leonel') //agrega un elemento al final y me retorna la nueva cantidad de elementos
nombres.unshift('javier') //agrega un elemento al inicio y retorna la nueva cantidad de elementos
nombres.indexOf('maria') //busca el elemento en el array y devuelve la posicion, sino devuelve -1

let posicionDeValentina = nombres.indexOf('valentina')
nombres.splice(posicionDeValentina, 1)


let posicionMaria = nombres.indexOf('maria')
nombres[posicionMaria] = 'marianela'

console.log(nombres);

let nombre = 'maria'
//metodo no mutable que no modifica el array original, necesita crear una variable
nombre = nombre.toUpperCase()
console.log(nombre);


let eliminado = nombres.shift() //podriamos guardar en una variable para utilizarlo despues
console.log(eliminado);

// funcion para eliminar dos elementos 'juan' y 'maria'
/* function sumar (a, b){
    return a + b */
function eliminarNombre(listaDeNombres, nombreAEliminar){
    listaDeNombres.splice(listaDeNombres.indexOf(nombreAEliminar), 1)
}


const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 30,
    },
    {
        nombre: 'maia',
        apellido: 'perez',
        edad: 18,
    },
    {
        nombre: 'sabri',
        apellido: 'lopez',
        edad: 16,
    }
]



// bucle for
for(let i = 0; i < personajes.length; i = i + 1){
    console.log(personajes[i])
}


// bucle for...of (LO USAREMOS PARA RECORRER TODO EL ARRAY, ES MEJOR QUE EL FOR A MENOS QUE QUISIERAMOS RECORRERLO AL REVES O DESDE LA MITAD DEL ARRAY)
for(const personaje of personajes){ // por detras hace lo mismo que personajes [i]
    console.log(personaje)
}

for(let nombre of nombres){ // let por que estoy recorriendo un string
    console.log(nombre)
}


// METODOS AVANZADOS(por que recibe una callback)

// FIND puede retornar el elemento o undefined
const pepe = personajes.find(function(personaje){
    return personaje.nombre === 'pepe'
})

// sintaxis de funcion anonima
personajes.forEach(function (personaje){
    console.log(personaje)
})
/* 
for.. of hace exactamente lo mismo
for(const personaje of personajes){
    console.log(personaje)
}
*/


//FILTER SIEMPRE RETORNARA UN ARRAY
// como me retorna algo, puedo guardarlo en una variable
const personajesMayoresDeEdad = personajes.filter(function(personaje){
    return personaje.edad >= 18
})

// Con for..of
const personajesMayores = []
for(const personaje of personajes){
    if(personaje.edad >= 18){
        personajesMayores.push(personaje)
    }
}
console.log(personajesMayores)
console.log(personajesMayoresDeEdad)



const productosPrecio = productos.filter(function(producto){
    return (producto.precio < 2950) //precio menor a 2950
})
console.log(productosPrecio)

const productosMarca = productos.filter(function(producto){
    return (producto.marca.toLowerCase() === "noblex".toLowerCase()) //productos Noblex & toLowerCase() para que busque siempre en minuscula
})
console.log(productosMarca)

const productosIncluyenTv = productos.filter(function(producto){
    return (producto.nombre.toLowerCase().includes("Tv".toLowerCase())) //productos que tengan el string 'tv'
})
console.log(productosIncluyenTv)

const samsung = productos.find(function(producto){
    return (producto.marca.toLowerCase() === 'samsung'.toLowerCase())
})
console.log(samsung) 



/* MAP, retorna siempre un array, crea un array en base a otro array */

const objetos = [
    {
        nombre: 'vaso'
    },
    {
        nombre: 'tornillo'
    },
    {
        nombre: 'computadora'
    }
]


const nombresObjetos = ['vasito', 'tornillito', 'computador']

const arrayInverso = nombresObjetos.map(function(nombre){ // 1
    return {nombre: nombre}
})

const listaDeObjetosHTML = objetos.map(function(objeto){ // 2
    return '<div>'+ objeto.nombre + '</div>'
})

const resultadoX = objetos.map(function(objeto){ // 3
    return 'pepe'
})
console.log(listaDeObjetosHTML)









































































