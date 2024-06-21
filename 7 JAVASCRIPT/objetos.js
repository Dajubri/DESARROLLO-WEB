/* { } LOS OBJETOS NOS AYUDAN A TRABAJAR DE FORMA MAS ORDENADA Y TRANSPORTAR INFORMACION DE MANERA MAS COMODA, se accede a la informacion dentro del objeto a travez del punto (.), ademas tiene que ser una constante (const) */

/* Modelo key value */
const persona = {
    edad: 90,
    nombre: 'pepe',
    dinero: 7000,
    mejorAmigo: {
        nombre: 'Firulais',
        edad: 2,
    }
}
console.log(persona.edad); // me devolvera 90


const auto = {
    nombre: 'Honda civic Ex', 
    precio: 6000
}
// No puedo reasignar mi objeto por otro string u otro objeto, si podria cambiar una propiedad 

auto.precio = 7000 // cambio la propiedade 6000 a 7000
auto.anio = 2007 // puedo agregar una propiedad nueva 


const persona2 = {
    nombre : "Jose",
    apellido : "Perez",
    edad : "30",
    amigo : {
        nombre : "Alberto",
        apellido : "Garcia",
        edad : "28"
    }
}
console.log(persona2);

persona2.telefono = "+5491136713835" //entre comillas por que no nos interesa operar con estos numeros
persona2.dni = "97709896" //agregamos 2 propiedades telefono y dni 
persona2.amigo.nombre = "Pepe" //cambiamos el nombre de amigo


const persona3 = {
    nombre : "Briana",
    //o tambien puede venir de otra manera
    'nombre completo' : "Briana Ventura"
}
console.log(persona3['nombre completo']);



const datos = {
    nombre: 'pepe',
    apellido: 'suarez',
    dni: '54543565'
}

let resultado = ''
// bucle for...in (recorre un objeto)
for(let propiedad in datos){
    resultado = resultado + '\n<span>' + propiedad + ':</span> ' + '<span>' + datos[propiedad] + '</span>' 
}
console.log(resultado) 
















//const amigo = {...persona2.amigo}













































































































//