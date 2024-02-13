
// RETO 1
// Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por 
// consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del array 
// y lo saque por consola.

// const cuentaArray = (array) => {

//     return array.length;

// }

// const aleatorio = (array) => {

//     let numero = 0
//     numero = parseInt(Math.floor(Math.random() * array.length))
//     return array[numero];
// }

// let resultado = cuentaArray(["A", "B", "C", "D", "E", "F", "G", "H", "I"])
// console.log(resultado)
// let resultado2 = aleatorio(["A", "B", "C", "D", "E", "F", "G", "H", "I"])
// console.log(resultado2)



// RETO 2
// Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que 
// los liste y los saque por consola.

// const planetas = (array) => {

//     for (let i = 0; i < array.length; i++) {

//         console.log(array[i])
//     }
// }


// planetas(["mercurio", "venus", "tierra", "marte", "jupiter", "saturno", "urano", "neptuno", "pluton"])


// RETO 3
// Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del 
// array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en su 
// lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los últimos dos 
// elementos. Obtén el índice del elemento "Funciones".

// let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"]
// let javascript2 = []

// //Eliminar el primer elemento
// javascript1.shift();
// console.log(javascript1);

// //Añade en el primer elemento
// javascript1.unshift("objetos");
// console.log(javascript1);

// //Elimina el ultimo elemento
// javascript1.pop();
// console.log(javascript1);

// //Elimina el ultimo elemento
// javascript1.push("ArraysDifíciles");
// console.log(javascript1);

// //Nuevo array
// javascript2.push(javascript1.slice(2,4))
// console.log(javascript2)




//RETO 4
// Crea una string, pásala a array y saca por consola la versión invertida de la original. 
// Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

// let stringOriginal = "Hola"

// let arrayString = []
// let arrayString2 = []
// console.log(stringOriginal)

// for (let i = 0; i < stringOriginal.length; i++) {

//     arrayString.push(stringOriginal[i])
// }
// for (let i = 0; i < stringOriginal.length; i++) {

//     arrayString2.push(stringOriginal[i])
// }
// console.log(arrayString)
// let prueba = arrayString2.reverse()
// console.log(prueba)
// let prueba2 = arrayString.reverse().join('')
// console.log(prueba2)



// RETO 5
// Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale 
// sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2, 3] 
// y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]


// const intercale = (array1, array2) => {
//     let arrayFinal = []

//     while (array1.length != 0) {

//         arrayFinal.push(array1[0], array2[0])

//         array1.shift();
//         array2.shift();
//     }
//     return arrayFinal;
// }
// let resultado = intercale([1, 2, 3], [4, 5, 6])
// console.log(resultado)



// RETO 6
// Crea un array con al menos 10 números y una función que los divida en otros dos arrays: 
// uno para pares y otro para impares. A continuación, saca por consola ambos arrays 
// resultantes concatenados.


// const separaArray = (array) => {
//     let arrayPar = []
//     let arrayImpar = []
//     let arrayFinal = []

//     for (let i = 0; i < array.length; i++) {

//         if (array[i] % 2 === 0) {

//             arrayPar.push(array[i])
//         }else{
//             arrayImpar.push(array[i])
//         }
//     }
//     return arrayFinal = arrayPar.concat(arrayImpar)
// }

// let resultado = separaArray([1, 5, 4, 8, 6, 2, 5, 7, 9, 3, 1, 4, 5, 6])
// console.log(resultado)



// RETO 7
// Utilizando el array del ejercicio anterior, crea una función que saque por consola 
// únicamente los números mayores que 5.

// const separaMayores = (array) => {
// let arrayFinal = []

//     for (let i = 0; i < array.length; i++) {

//         if (array[i] >= 5) {

//             arrayFinal.push(array[i])
//         }

//     }
//     return arrayFinal;
// }


// let resultado = separaMayores([1, 5, 4, 8, 6, 2, 5, 7, 9, 3, 1, 4, 5, 6])
// console.log(resultado)




// RETO 8 
// Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 = 
// ["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún elemento 
// y lo saque por consola.


// const repiteArray = (array1, array2) => {

//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array1.length; j++) {

//             if(array1[i]===array2[j]){

//                 console.log(array1[i])
//             }
//         }
//     }
// }
// repiteArray(["DOM", "BOM", "Funciones", "Arrays"], ["BOM", "Arrays", "ParseInt"])





// RETO 9

// Imagina que estamos en una carrera y los nombres de las personas que van llegando a la 
// meta se van almacenando en un array (el primero quedaría en la primera posición del array, 
// el segundo en la segunda, etc.). Crea un array con por lo menos cinco nombres. 
// Desestructura el array utilizando el operador rest de manera que puedas llamar al ganador, 
// al segundo y al resto de competidores por separado.



















