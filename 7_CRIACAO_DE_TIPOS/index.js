"use strict";
// 1 - Generics
function showData(arg) {
    return `o dado é ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(showData([]));
console.log(showData(["teste"]));
// 2 - constraints em generics
function showProductName(obj) {
    return `o nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", color: "Branca" };
const myObj2 = { name: "Carro", wheels: 4, engine: 1.0 };
const myObj3 = { price: 19.9, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showProductName(myObj2));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "azul" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32 GB"
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Ediberto",
    age: 44,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// 6 - typeof type operator
const userName = "Ediberto";
const userName2 = "Joao";
console.log(userName2);
const userName3 = "Maria";
console.log(userName3);
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem a KM de: ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 2500,
    kg: 3000
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
