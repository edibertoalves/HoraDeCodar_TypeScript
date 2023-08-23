let numbers: number[] = [1, 2, 3];

numbers.push(5);

console.log(numbers[2]);
console.log(numbers);

let names: string[] = ["Matheus"]
// names.push(5)

// outra forma de criar array
const nums: Array<number> = [1, 2]
nums.push(100);
console.log(nums[3]);

// any
const  arr1: any = [1, "teste", true, [], {nome: "Matheus"}]
arr1.push([1,2,3])
console.log(arr1);

// parâmetros tipados
function soma(a: number, b: number){
    return a + b 
}
console.log(soma(4, 5))

// retorno de função
function greeting(name: string): string{
    return `Olá ${name}`
}
console.log(greeting("Ediberto"))

// funções anonimas
setTimeout(() => {
    const sallary: number = 1000;
    //console.log(sallary);
}, 2000); 

// tipos de objeto
function passCoordinates(coord: {x: number, y: number}){
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = {x:329, y:852};
passCoordinates(objCoord); 

const pessoaObj: {nome: string, sobrenome: string} = { nome: "Ediberto", sobrenome: "Alves"}

// props opcionais
function showNumbers(a: number, b: number, c?: number){
    console.log("A:" + a);
    console.log("B:" + b);
    
    if (c) {
        console.log("C:" + c);
    }
}
showNumbers(1,2,3);
showNumbers(1,2);

// validação de props opcionais
function showGreeting(firstname: string, lastname?: string){
    if (lastname) {
        return `Olá ${firstname} ${lastname}`;
    }

    return `Olá ${firstname}`;

}

console.log(showGreeting("Ediberto", "Alves"));
console.log(showGreeting("Ediberto"));


// union types
function showBalance(balance: number | string){
    console.log(`O valor é balance é R$ ${balance}`)
}
showBalance(100);
showBalance("500");

const arrUnionType: Array<number | string | boolean> = [1 ,"teste", true];

// avançando em Union Types
function showUserRole(role: boolean | string) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado."
    }

    return "Admin"
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// type alias
type ID = string | number;
function showId(id: ID) {
    console.log(`O id é ${id}`);
}
showId(1)
showId("200");
showId(123);

// interfaces
interface Point {
    x: number,
    y: number,
    z: number
}

function showCoords(obj: Point){
    console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`)
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj);


// Interface X Type Alias
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = { name: "Ediberto", age: 44}
console.log(somePerson);

type PersonType = {
    name: string
}

// type alias não se deixa repetir pois se considera uma constante
// type PersonType = {
//     age: number
// }


// literal type
let test: "testando"
test = "testando";
console.log(test);

function showDirection(direction: "left" | "center" | "right"){
    console.log(`A direção é ${direction}`)
}
showDirection("center");


// non null assertion operators
const p = document.getElementById("some-p")
console.log(p!.innerText);

// bigint
let n: bigint
// n = 1
n = 1000n
console.log(n);
console.log(typeof n)
console.log(n + 100n)

// Symbol
let symbolA:  symbol = Symbol("a")
let symbolB = Symbol("a") // definição de variável por inferência

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)