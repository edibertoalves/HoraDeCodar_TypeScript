"use strict";
function showProductDetails(product) {
    console.log(`O produto é ${product.name} e o seu preço é R$ ${product.price}`);
    if (product.isAvailable) {
        console.log(`o produto se encontra disponível`);
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tenis", price: 129.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o email ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}
const u1 = {
    email: "ediberto@gmail.com",
};
const u2 = {
    email: "ediberto@gmail.com",
    role: "An. de Sistemas"
};
showUserDetails(u1);
showUserDetails(u2);
const Fusca = {
    brand: "VW",
    wheels: 4
};
console.log(Fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const ediberto = {
    name: "Ediberto",
    age: 44
};
console.log(ediberto);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["kamehameha", "genki dama"]
};
console.log(goku);
console.log(goku.superpowers[1]);
const Arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(Arnold);
console.log(Arnold.caliber);
// 7 - readonly array
// A ALTERAÇÃO DO ARRAY É SOMENTE POR LEITURA, COMO O FOREACH ou POR MÉTODO.
let myArray = ["laranja", "maçã", "banana"];
//myArray[3] = "Mamao";
myArray.forEach(item => {
    console.log("Fruta: " + item);
});
console.log(myArray);
myArray = myArray.map((item) => { return `Fruta: ${item}`; });
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray6: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const myNumberArray6: fiveNumbers = [1, "2", true, 4, 5, 6]
console.log(myNumberArray);
const anotherUser = ["Ediberto", 44];
console.log(anotherUser);
console.log(anotherUser[0]);
anotherUser[0] = "João";
console.log(anotherUser);
// 9 - tupla com readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
