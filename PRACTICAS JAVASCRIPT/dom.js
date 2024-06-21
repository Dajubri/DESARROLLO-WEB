/* DOM = document object model */

console.dir(document)

const titulo = document.getElementById('titulo') //es un HTMLElement
const subtitulo = document.getElementById('subtitulo')
console.dir(titulo)
console.dir(subtitulo)



titulo.innerText = 'PEPE'



// modifica HTML desde javascript
const caja = document.getElementById('producto')

const producto = {
    precio: 1000,
    nombre: 'tv Philips',
    descripcion: 'lorem ipsum'
}

caja.innerHTML = `
    <h1>${producto.nombre}</h1>
    <p>${producto.descripcion}</p>
    <span>Precio: $${producto.precio}</span>
    <div>
        <input value='${producto.precio}'>
        <button>comprar</button>
    </div>
    <hr>
`


/* const buttonProduct = document.createElement('button')
buttonProduct.innerText = 'comprando'
console.dir(buttonProduct)

caja.appendChild(buttonProduct) */


const user = {
    username: 'pepesito',
    password: '******4',
    adress: 'av siempre viva',
    email: 'pepe@gmail.com'
}

const userInfo = document.getElementById('userinfo')

    userInfo.innerHTML = `
    <h2>Nombre: ${user.username} </h2>
    <span>Contraseña: ${user.password} </span> <br>
    <input type="text" value="${user.adress}"> <br>
    <input type="text" value="${user.email}">
    <hr>
    `;



    const products = [
        {
            precio: 1000,
            nombre: 'tv Samsung',
            descripcion: 'lorem ipsum'
        },
        {
            precio: 1000,
            nombre: 'tv TCL',
            descripcion: 'lorem ipsum'
        },
        {
            precio: 1000,
            nombre: 'tv LG',
            descripcion: 'lorem ipsum'
        },
]
    const productsContainerHTML = document.getElementById('products-container')

    let productsList = ''

for(const producto of products){
    
    productsList = productsList +  `
        <h1>${producto.nombre}</h1>
        <p>${producto.descripcion}</p>
        <span>Precio: $${producto.precio}</span>
        <div>
            <input value='${producto.precio}'>
            <button>comprar</button>
        </div>
        <hr>
    `
}
productsContainerHTML.innerHTML = productsList



const historial = [
    {
        id: '001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
]

const listaHistorialHTML = document.querySelector('#lista-historial')
let itemHistorial = ''

for(const item of historial){
    
    itemHistorial = itemHistorial + `
    <div class='historial-item'>
        <span>
            <b>ID: #${item.id}</b>
        </span>
        <h3>${item.nombre}</h3>
        <span>Fecha: ${item.fecha}</span>
        <br>
    </div>
    <hr>
    `
}
listaHistorialHTML.innerHTML = itemHistorial

//const historialItemHTML = document.getElementsByClassName('historial-item')

const historialItemHTML = document.querySelectorAll('.historial-item')
console.log(historialItemHTML)

for(const item of historialItemHTML){
    const btn = document.createElement('button')
    btn.innerText = 'ver publicacion'
    item.appendChild(btn)
}



const input = document.getElementById('input')

//accedo al valor del input
console.log(input.value)

//Añado la class rojo al elemento input
input.classList.add('rojo')

//eliminamos una clase
input.classList.remove('input')

//hacer un interruptor de clase (si esta la clase la eliminamos si no esta la agregamos)
//input.classList.toggle('mostrar')


/* input.classList.replace('mostrar', 'ocultar') */

/* Alternar entre clases */
if(input.classList.value.split(' ').includes('mostrar')){
    input.classList.replace('mostrar', 'ocultar')
}
else{
    input.classList.replace('ocultar','mostrar' )
}

//accedo al objeto de lista de clases del input
console.log(input.classList)

const modalHTML = document.querySelector('.modal-container')
const btnOpenHTML = document.getElementById('btn-open')

btnOpenHTML.onclick = function () {
    modalHTML.classList.toggle('ocultar')
}