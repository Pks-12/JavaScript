const name = "RHCSA";
const repoCount = 60;

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);//string interploation

const gameName = new String('rhcsa$da$com');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   ramesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rhcsa.com/rhcsaW%20bgmi";

console.log(url.replace('%20','*'));

console.log(url.includes('ramesh'));

console.log(gameName.split('$'));









