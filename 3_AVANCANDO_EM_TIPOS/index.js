"use strict";
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
console.log(numbers);
let names = ["Matheus"];
// names.push(5)
// outra forma de criar array
const nums = [1, 2];
nums.push(100);
console.log(nums[3]);
// any
const arr1 = [1, "teste", true, [], { nome: "Matheus" }];
arr1.push([1, 2, 3]);
console.log(arr1);
// parâmetros tipados
function soma(a, b) {
    return a + b;
}
console.log(soma(4, 5));
// retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Ediberto"));
// funções anonimas
setTimeout(() => {
    const sallary = 1000;
    //console.log(sallary);
}, 2000);
// tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 852 };
passCoordinates(objCoord);
const pessoaObj = { nome: "Ediberto", sobrenome: "Alves" };
// props opcionais
function showNumbers(a, b, c) {
    console.log("A:" + a);
    console.log("B:" + b);
    if (c) {
        console.log("C:" + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// validação de props opcionais
function showGreeting(firstname, lastname) {
    if (lastname) {
        return `Olá ${firstname} ${lastname}`;
    }
    return `Olá ${firstname}`;
}
console.log(showGreeting("Ediberto", "Alves"));
console.log(showGreeting("Ediberto"));
// union types
function showBalance(balance) {
    console.log(`O valor é balance é R$ ${balance}`);
}
showBalance(100);
showBalance("500");
const arrUnionType = [1, "teste", true];
// avançando em Union Types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado.";
    }
    return "Admin";
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O id é ${id}`);
}
showId(1);
showId("200");
showId(123);
function showCoords(obj) {
    console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "Ediberto", age: 44 };
console.log(somePerson);
// type alias não se deixa repetir pois se considera uma constante
// type PersonType = {
//     age: number
// }
// literal type
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é ${direction}`);
}
showDirection("center");
// non null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerText);
// bigint
let n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a"); // definição de variável por inferência
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
