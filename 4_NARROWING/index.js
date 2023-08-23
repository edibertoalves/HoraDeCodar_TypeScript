"use strict";
// 1: type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("impossível realizar a operação");
    }
}
sum("1", "2");
sum(1.20, 2.5);
sum("5", 6);
// 2 - checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const mult = arr.reduce((i, total) => i * total);
            console.log(mult);
        }
    }
    else {
        console.log("por favor defina uma operação");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 6], "multiply");
// 3 - instanceof
class User {
    constructor(pName) {
        this.name = pName;
    }
}
class SuperUser extends User {
    constructor(pName) {
        super(pName);
    }
}
const John = new User("John");
const Paul = new SuperUser("Paul");
console.log(John);
console.log(Paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name} deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(John);
userGreeting(Paul);
// operador in
class Dog {
    constructor(pName, pBreed) {
        this.name = pName;
        if (pBreed) {
            this.breed = pBreed;
        }
    }
}
const turca = new Dog("Turca");
const Bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`o cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log(`o cachorro é SRD`);
    }
}
showDogDetails(turca);
showDogDetails(Bob);
