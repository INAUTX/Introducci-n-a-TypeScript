"use strict";
// Tarea 1
const car1 = {
    marca: "Toyota",
    modelo: "Camry",
    año: 2022
};
console.log(`${car1.marca} ${car1.modelo} ${car1.año}`);
// Tarea 2
class carInfo {
    static getInfo(car) {
        return `el modelo del carro es ${car.modelo} marca ${car.marca} del año ${car.año}`;
    }
}
console.log(carInfo.getInfo(car1));
// Tarea 3
function sumarAño(car) {
    car.año += 1;
    return `el modelo del carro es ${car.modelo} marca ${car.marca} del año ${car.año}`;
}
console.log(sumarAño(car1));
// ¿Qué ventajas ofrece el uso de tipos personalizados en objetos?
// Lo cual ayuda a prevenir errores y a documentar el código de manera efectiva
