/* TIPOS DE DATOS: la unidad con la cual se escribe la informacion o el mensaje. Ejemplo:  18 (dato) años (información); 18 (numero) es un tipo de dato, Matias (texto) otro tipo de dato */

/* DATOS PRIMITIVOS:

    Number => numeros tal cual los conocemos
        Ej: 0, 2, -2, 8, , Nan(not a number), Infinity, 3.14 (no es un decimal, sino un flotante "float")

    String (CADENA) => texto, deben ir entre comillas ( "", '', ``)
        Ej: "hola mundo",'pepe', `8`

    Boolean => valores true o false
        Ej: preguntas que solo tengan la opcion de, true o false

    Null => ausencia o nulidad de dato; no es igual a ningun dato
        Ej: null

    Undefined => no hay un dato definido
        Ej: undefined
*/

/* OPERADORES ARITMETICOS:

SIEMPRE DEVUELVE STRING

+: Concatenación: la union de dos string mediante el signo +, cualquier operacion que tenga el + y un string operando.

    Ej: 'hola' + 'mundo' = 'holamundo'
        (proceso interno) 'hola' + String(1)  ===>  'hola' + 1 =  'hola1'    (con que uno de los operadores sea un string, Javascript va a concatenar)  
        
        
SIEMPRE DEVUELVE NUMEROS

+ : suma (no debe haber un string)
    Ej:  1 + 1 = 2
        (proceso interno) 1 + true(1)  ===>  1 + true = 2                    (el valor o formato numerico de true es 1)
        (proceso interno) Number(undefined) + 1  ===>  NaN + 1 = NaN         (no existe una respuesta, si alguno de los dos datos es NaN el resultado siempre sera NaN)
        (proceso interno) null(0) + true ===>   0 + 1 = 1                    (valor numerico de null es 0)

- : resta (El - siempre devuelve un numero, no importa si hay un String)
    Ej:  (proceso interno) Number('3') - 3 ===> 3 - 3 = 0                    (algunos string numericos se pueden transformar a numeros)

* : multiplicación

/ : division

% : resto de la division o modulo

*/

/* CONSTRUCTORES:

String(dato) transforma mi dato a string
Number(dato) transforma mi dato a numero
Boolean(dato) transforma a su formato booleano


*/

/* false  o Truthy 

0
-0
'' (comillas vacias)
false
null (null == 0  ===> false; por que null es ausencia de valor al copararlo con cualquier dato (null==null true; null==undefined true) "excepcion")
undefined
NaN (no puede ser comparado con ningun otro dato)

*/

/* COMPARADORES 

==   : es verdad que este dato es igual
        Ej: 1 == '1' true
===  : es verdad que este dato es estrictamente igual
        Ej: 1 === '1' false (compara el valor y el tipo del dato)
!=   : es verdad que este dato es diferente
        Ej: 1 != true  false
!==  : es verdad que este dato estrictamente diferente
        Ej: 1 != true  true
>    : es verdad que este dato es mayor
        Ej:
<    : es verdad que este dato es menor
        Ej:
>=   : es verdad que este dato es mayor o igual
        Ej:
<=   : es verdad que este dato es menor o igual
        Ej:

*/  

/* FUNCIONES NATIVAS */

/*    typeof()  tipo de dato de un dato */
 /*   isNaN()  devuelve un booleano dependiendo si es un NaN o no (dira true cuando el dato no es un numero) */







/*  for (let i = 0; ; i++) {
        console.log(i);
        if (i > 3) break;
        // more statements
      } */

/*       let i = 0;

        for (;;) {
        if (i > 3) break;
        console.log(i);
        i++;
      } */


/*       for (let i = 0; i < 3; i++) {
        setTimeout(() => {
        console.log(i);
        }, 1000);
      } */

      let i = 0;
      for (; i < 3; i++) {
        setTimeout(() => {
          console.log(i);
        }, 1000);
      }