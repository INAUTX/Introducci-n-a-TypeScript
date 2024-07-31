"use strict";
// TAREA 1
// const t1 : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const suma : number = t1.reduce((acc, curr) => acc + curr, 0);
// console.log(suma);
// TAREA 2
// const strg : string[] = ["la", "casa", "es", "roja"];
// function concatenarJoin (arr : string[]): string {
//     return arr.join(' ')
//     // console.log(arr);
// }
// function concatenarReduce (arr : string[]): string {
//     return arr.reduce((acc, curr) => acc + " " + curr)
// }
// console.log(concatenarJoin(strg));
// console.log(concatenarReduce(strg));
// TAREA 3
// type user = {
//     id : number;
//     name : string;
// }
// const users: user[] = [
//     {
//         id: 1,
//         name: "Daniel"},
//     {
//         id: 2,
//         name: "Eduardo"},
//     {
//         id: 3,
//         name: "Carlos"},
//     {
//         id: 4,
//         name: "Luis"}
// ]
// users.forEach(user => {
//     console.log(`${user.name} id :${user.id}`);
// });
// TAREA 4
// const t1 : number[] = [1, 2, 3, 44, 55, 6, 7, 8, 9, 10];
// function determinarMayor (arr : number[]): number {
//     // return Math.max(...arr);
//     return arr.reduce((acc, curr) => acc > curr ? acc : curr ,0)
// }
// console.log(determinarMayor(t1));
// ¿Cómo se puede asegurar el tipo de datos en un array en TypeScript?
// R/ Estas son dos formas de hacerlo:
// const numeros: number[] = [1, 2, 3, 4, 5];
// const nombres: string[] = ["Alice", "Bob", "Charlie"];
// console.log("---------------------");
