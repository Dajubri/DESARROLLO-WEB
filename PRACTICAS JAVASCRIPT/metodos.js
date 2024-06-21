/* JAVASCRIPT ES UN LENGUAJES BASADO EN PROTOTIPOS por que los distintos datos tienen su propio prototipo*/

/* 
METODOS STRING:

.toLowerCase()            = pasa a minuscula
.toUpperCase()            = pasa a mayuscula
.trim()                   = eliminar espacios
.includes(string_buscado) = verificar si el string buscado esta dentro del string (retorna un boolean)
.replaceAll(string_a_replazar, valor_nuevo)
.repeat(string_a_repetir)



PROPIEDADES:

.length = longitud del string (toma espacios)
.typeof() = tipo de dato de un dato



METODOS NUMERICOS

Number.isInteger() = numero entero
Number.isNaN()     = devuelve un booleano dependiendo si es un NaN o no (dira true cuando el dato no es un numero)



CONSTRUCTORES:

String(dato) transforma mi dato a string
Number(dato) transforma mi dato a numero
Boolean(dato) transforma a su formato booleano



METODOS DE ARRAYS

.pop()              = elimina el ultimo elemento y lo retorna
.shift()            = elimina el primer elemento y lo retorna
.push()             = agrega un elemento al final y me retorna la nueva cantidad de elementos
.unshift()          = agrega un elemento al inicio y retorna la nueva cantidad de elementos
.indexOf()          = busca el elemento en el array y devuelve la posicion, sino devuelve -1 (solo busca string)
.lastIndexOf()      = busca el elemento en el array y devuelve la posicion empezando desde el final (solo busca string)
.splice(posicion,cuantosElementosElimino?, nuevo elemento) = quita o agrega elemento
.forEach()          = ejecuta la funcion indicada una vez por cada elemento del array
.find()             = devuelve el valor del primer elemento del array que cumple la funcion
.includes('string') = busca un elemento(string) en el array, si lo encuentra devuelve "true" de lo contrario "false"
.filter()           = crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
.map()              = 
.some()             = sirve si algun elemento cumple alguna condicion
.every()            = sirve para saber si tdoso los elementos cumplen una condicion
.find.Index()       = sirve para buscar el index /indice de x elemento



EXPRESIONES REGULARES:














camelCase    = holaMeLlamoMati 
snake_case   = hola_me_llamo_mati

Español las funciones las hago con snake_case y las variables en camelCase
Ingles las funciones con camelCase y las variables con snake_case
solicitarYGuardar() // solicitar_y_guardar()

funcion requestAndSaveHTML() 

*/

// tanto los arrays y los objetos tienen sus propios prototipos


// SOLUCIONES A USAR ANTE UNA PROBLEMA

// busquen por id = find
// traiganme todos los alumnos que esten aprobados = filter
// por cada alumno quiero que se envie un email = forEach

