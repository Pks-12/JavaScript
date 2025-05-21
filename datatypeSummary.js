//  Primitive

//  7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id=== anotherId);

//  const bigNumber = 2332323232323n;

//  Reference (Non primitive)

//  Array, Object, Functions

const heros = ["shaktiman", "B","C"];

let myObj = { 
    name: "rhcsa",
    age:23,
}

const myFunction = function(){
    console.log("jai hind");
    
}

console.log(typeof anotherId);
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof userEmail);
console.log(typeof outsideTemp);
console.log(typeof id);
console.log(typeof heros);
console.log(typeof myFunction);
console.log(typeof myObj);

/*

symbol
number
number
boolean
undefined
object
symbol
object
function
object
*/