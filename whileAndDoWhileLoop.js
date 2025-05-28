let index = 0;
while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index = index + 3;
}

let myArray = ["B", "C", "P", "D"];
let n = myArray.length;
console.log(`Length of myArray is: ${n}`);

let arr = 0;
while (arr < n) {
  console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}

console.log("Next line start with do/while loop");

//  do-while
let score = 1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 20);


let myMultipleArray = [1,2,3,["a","B","C","D","E"],4,5,6,"RAMESH","SAM","ROY",["isLoggedIn"]];
let num = myMultipleArray.length
console.log(`Lets check the length of array ${num}`);
let c = myMultipleArray[3];
if(myMultipleArray[3][0] =='P'){
    console.log("founded the value");
}
else{
    console.log("Not Founded value");
}
let d = myMultipleArray[10];
console.log([c,d]);


