const score = 500;
console.log(score);

console.log(Number);

const balance = new Number(300);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(4));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));


/*+++++++++++++++++Maths++++++++++++++++++++*/ 
console.log(Math);
console.log(Math.abs(-43));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(34,22,21,90,5));
console.log(Math.max(90,110,12,1));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 30;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

console.log("Lets break down the line");

let n=10;
for(let i =0 ;i<n;i++){
    console.log(Math.floor(Math.random()*10 +1));

    
}











