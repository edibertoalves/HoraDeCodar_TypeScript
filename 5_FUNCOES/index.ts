// 1 - VOID
function withoutReturn() {
    console.log("Esta função não tem retorno")
}
withoutReturn()

// 2 - callback como argumento
function greeting(name: string): string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, username: string) {
    console.log("preparando a função")

    const greet = f(username)

    console.log(greet)
}
preGreeting(greeting, "Ediberto");

// 3 - generics
function firstElement<T>(arr: T[]): T {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}
const newObject = mergeObjects({ name: "Ediberto" }, { age: 44, job: "Systems Analyst" })
console.log(newObject);


// 4 - constaints
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if (+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}
console.log(biggestNumber(2, 3))
console.log(biggestNumber("12", "5"))


//  5 - especificar o tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testando"]))


// 6 - parâmetros opcionais
function modernGreeting(name: string, greet?: string) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`
    } else {
        return `Olá ${name}, tudo bem?`
    }
}
console.log(modernGreeting("Ediberto", "Sr."));
console.log(modernGreeting("Ediberto"));


// 7 - parâmetros default
function somaDefault(n: number | string, m: number = 1): number {
    if (typeof n == "number") {
        return n + m
    } else {
        return (parseFloat(n) + m);
    }
}
console.log(somaDefault(10));
console.log(somaDefault(10, 15));
console.log(somaDefault("5"))
console.log(somaDefault("12", 10)); // com narrowing


// 8 - unknown
function doSomething(x: unknown) {
    if (Array.isArray(x)) {
        console.log(x[0])
    } else if (typeof x === "number") {
        console.log("X é um número")
    }
}
doSomething([1, 2, 3]);
doSomething(5);


// 9 - never
function showErrorMessage(msg: string): never {
    throw new Error(msg);
}
//showErrorMessage("um erro apareceu")


// 10 - rest operator
function sumAll(...n: number[]) {
    return n.reduce((number, sum) => number + sum)
}
console.log(sumAll(1, 2, 3, 4, 5, 6))
console.log(sumAll(5, 348, 2348))

// 11 - destructuring como parâmetro
function showProductDetail({ name, price }: { name: string, price: number }): string {
    return `O nome do produto ${name} custa R$ ${price}`
}
const shirt = { name: "Camisa", price: 29.90 }

console.log(showProductDetail(shirt))
// console.log(showProductDetail({name: "Ediberto", age: 44}))
// console.log(showProductDetail([1, 2])



// TESTES

function showIsObject(obj: object) {
    if (typeof obj == "object") {
        return "é um do tipo object"
    } else {
        return "não é um do tipo object"
    }
}

let qualquerUm: any;

console.log(showIsObject(qualquerUm));
