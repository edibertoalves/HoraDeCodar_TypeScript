"use strict";
// 1 - VOID
function withoutReturn() {
    console.log("Esta função não tem retorno");
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, username) {
    console.log("preparando a função");
    const greet = f(username);
    console.log(greet);
}
preGreeting(greeting, "Ediberto");
// 3 - generics
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Ediberto" }, { age: 44, job: "Systems Analyst" });
console.log(newObject);
// 4 - constaints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(2, 3));
console.log(biggestNumber("12", "5"));
//  5 - especificar o tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ["teste", "testando"]));
// 6 - parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    else {
        return `Olá ${name}, tudo bem?`;
    }
}
console.log(modernGreeting("Ediberto", "Sr."));
console.log(modernGreeting("Ediberto"));
// 7 - parâmetros default
function somaDefault(n, m = 1) {
    if (typeof n == "number") {
        return n + m;
    }
    else {
        return (parseFloat(n) + m);
    }
}
console.log(somaDefault(10));
console.log(somaDefault(10, 15));
console.log(somaDefault("5"));
console.log(somaDefault("12", 10)); // com narrowing
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
doSomething([1, 2, 3]);
doSomething(5);
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("um erro apareceu")
// 10 - rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => number + sum);
}
console.log(sumAll(1, 2, 3, 4, 5, 6));
console.log(sumAll(5, 348, 2348));
// 11 - destructuring como parâmetro
function showProductDetail({ name, price }) {
    return `O nome do produto ${name} custa R$ ${price}`;
}
const shirt = { name: "Camisa", price: 29.90 };
console.log(showProductDetail(shirt));
// console.log(showProductDetail({name: "Ediberto", age: 44}))
// console.log(showProductDetail([1, 2])
// TESTES
function showIsObject(obj) {
    if (typeof obj == "object") {
        return "é um do tipo object";
    }
    else {
        return "não é um do tipo object";
    }
}
let qualquerUm;
console.log(showIsObject(qualquerUm));
