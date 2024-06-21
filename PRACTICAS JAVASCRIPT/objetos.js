/* SINTAXIS */

let celular = {
    nombre: 'Moto g70',
    precio: 500
}

/* Modelo key value */
let usuario = {
    edad: 90,
    nombre: 'pepe',
    dinero: 7000,
    celular: {
        nombre: 'Moto g70',
        precio: 500
    }
}
console.log(usuario.celular.precio)


const auto = {nombre: 'Honda civic Ex', precio: 6000}

auto.precio = 7000
auto.anio = 2001

/* auto = {nombre: 'Honda civic Ex', precio: 6000} */

console.log(auto)


let persona = {
    nombre: 'Alejandro',
    edad: 20,
    mejorAmigo: {
        nombre: 'Firulais',
        edad: 2,
    }
}

persona.nombre='pepe'
persona.mejorAmigo.nombre= 'luna'
console.log(persona)