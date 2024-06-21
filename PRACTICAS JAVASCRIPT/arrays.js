const nombres = [
                'pepe',
                'juan',
                'maria',
                'pedro',
                'valentina',
                'alex',
                'oscar',
                'david'
                ]

//Por cada nombre quiero que aparezca un mensaje por consola diciendo 'hola {nombre}'
/*
console.log('Hola ' + nombres[0])
console.log('Hola ' + nombres[1])
console.log('Hola ' + nombres[2])
console.log('Hola ' + nombres[3])
*/
//Quiero un contador del 0 al 3 */

for(let index = 0; index < nombres.length; index = index + 1){
    let nombre = nombres[index]

    console.log('Hola ' + nombre)
}



const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000,
        cantidad: 2
    },
    {
        nombre: 'celular samsung',
        marca: 'samsung',
        id: 4,
        precio: 1100,
        cantidad: 1
    },
    {
        nombre: 'tV LG',
        marca: 'LG',
        id: 2,  
        precio: 2900,
        cantidad: 3
    },  
    {
        nombre: 'tv noblex',
        marca: 'noblex',   
        id: 3,  
        precio: 2300,
        cantidad: 1
    },
]


/* 
Por cada elemento de mi carrito mostrar por consola
Has comprado el producto {producto.nombre} x {producto.cantidad} a un precio unitario de ${producto.precio}
*/
for(let i = 0; i < productos.length; i = i + 1){
    const producto = productos[i] 
    
    //console.log(producto)
    console.log('Has comprado el producto ' + producto.nombre + ' x ' + producto.cantidad + ' a un precio unitario de ' + producto.precio)
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
        apellido: 'rodriguez',
        edad: 35
    },
]

/* 
Por cada personaje mostrar el siguente mensaje por consola
'Hola mi nombre es {personaje.nombre} {personaje.apellido} y tengo {personaje.edad} años'

Opcional:
Al finalizar el recorrido mostar por consola 'total de edades: {sumatoria de las edades de los usuarios}'
*/

let sumatoriaEdad = 0
for(let i = 0; i < personajes.length; i = i + 1){
    const personaje = personajes[i] 
    console.log('Hola mi nombre es ' + personaje.nombre + ' ' + personaje.apellido + ' y tengo ' + personaje.edad + ' años')
    sumatoriaEdad = sumatoriaEdad + personaje.edad
}
console.log('La sumatoria de edades es ' + sumatoriaEdad)


