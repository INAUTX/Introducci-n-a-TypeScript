"use strict";
// 1. Variables y constantes: Tipos, Tipos personalizados
// type producto = {
//     id : number;
//     nombre : string;
//     precio : number;
// }
// ¿Cómo ayuda el tipado estático a prevenir errores en el manejo de variables y constantes?
// R/ Este ayuda en la prevención de errores respecto al manejo de datos ayuda en la claridad y la seguridad de los datos.
// ---------------
// 2. Operadores (aritméticos, booleanos)
// function determinarParImpar (num: number) {
//     const result : number = num % 2
//     const isValid : boolean = result > 0
//     console.log(isValid);
//     if (result) {
//         return `El numero ${num} es un numero impar`
//     }
//     return `El numero ${num} es un numero par`
//     // -------------------
//     // if (result) {
//     //     return `El numero ${num} es un numero impar`
//     // }
//     // return `El numero ${num} es un numero par`
//     // // return result
// }
// console.log(determinarParImpar(3));
// console.log(determinarParImpar(4));
// ¿Qué ventajas ofrece el uso de operadores en un lenguaje tipado como TypeScript?
// R/ al contar con TypeScript al trabajar con operadores, tenemos la ventaja de contar con mayor presicion a la hora de realizar operaciones matematicas.
// ---------------
// 3. Estructura de decisión (if, switch, ternario)
// const num : number = 3
// if (num === 0) {
//     console.log("el numero es 0");
// } else if (num > 0) {
//     console.log(`el numero ${num} es positivo`);
// } else {
//     console.log(`El numero ${num} es negativo`);
// }
// switch (true) {
//     case num === 0:
//         console.log("el numero es 0");
//         break;
//     case (num > 0):
//         console.log(`el numero ${num} es positivo`);
//         break;
//     default:
//         console.log(`El numero ${num} es negativo`);
//         break;
// }
// ¿Cuándo es preferible usar un operador ternario en lugar de una estructura if?
// R/En casos como operaciones matemáticas donde es necesario mayor precision
// ---------------
// 4.Estructuras de iteración (while, for, foreach, map)
// EJM
// const num : number[] = [1,2,3,4,5]
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     console.log(element);
// }
// num.forEach(n => {console.log(n);});
// const squares = num.map(n => n * n)
// PRACTICA
// const nombres : string[] = ["Daniel", "Juan", "Pedro", "Luis"];
// for (let i = 0; i < nombres.length; i++) {
//     const element = nombres[i];
//     console.log(element);
// }
// ¿Qué ventajas tiene el método map sobre un bucle for en TypeScript?
// R/ El método "map" nos permite devolver un nuevo array,a diferencia de el "for".
