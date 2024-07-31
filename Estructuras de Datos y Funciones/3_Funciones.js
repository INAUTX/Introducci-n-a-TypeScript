"use strict";
// Tarea 1
function determinarMayor(arr) {
    // return Math.max(...arr);
    return arr.reduce((acc, curr) => (acc > curr ? acc : curr), 0);
}
// Tarea 2
// function validarParametros(...args: any[]): string | Error {
//   if (args.length < 2) {
//     throw new Error("Se requieren al menos dos parámetros");
//   }
//   const tipoPrimero = typeof args[0];
//   for (let i = 1; i < args.length; i++) {
//     if (typeof args[i] !== tipoPrimero) {
//       throw new Error("Los parámetros deben ser del mismo tipo");
//     }
//   }
//   return "Todos los parámetros son del mismo tipo";
// }
// console.log(validarParametros(1, 2, 3, 4, 5););
// validarParametros(1, 2, 03, 4, 5); // Todos los parámetros son del mismo tipo (números)
// validarParametros("Hola", "mundo"); // Todos los parámetros son del mismo tipo (cadenas)
// Tarea 3
// const matrizOriginal = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// // console.log(matrizOriginal);
// function rotarMatriz(matriz: number[][]): number[][] {
//   if (
//     !Array.isArray(matriz) ||
//     matriz.length === 0 ||
//     !matriz.every(
//       (fila) => Array.isArray(fila) && fila.length === matriz.length
//     )
//   ) {
//     throw new Error("La entrada debe ser una matriz cuadrada");
//   }
//   const numFilas = matriz.length;
//   const numColumnas = matriz[0].length;
//   const rotada = new Array(numColumnas).fill(0).map(() => new Array(numFilas));
//   for (let i = 0; i < numFilas; i++) {
//     for (let j = 0; j < numColumnas; j++) {
//       rotada[j][numFilas - 1 - i] = matriz[i][j];
//     }
//   }
//   return rotada;
// }
// console.log(rotarMatriz(matrizOriginal));
