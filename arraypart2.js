const hero1 = ["A","B","C","D"];
const hero2 = ["E","F","G","H","I"];

hero1.push(hero2);
console.log(hero1);
console.log(hero1[3][1]);
console.log("Here i see the result");

const allHero = hero1.concat(hero2)
console.log(allHero);

const all_new_hero = [...hero1, ...hero2];// spread operator

console.log(all_new_hero);

const another_array = [1,2,3,[4,5,6],7,[6,7,[7,8]]];
const real_another_array = another_array.flat(Infinity);// if we calculated or find the array, if they use multiple array of them. we use the flat method.
console.log(real_another_array);

console.log(Array.isArray("RHCSA"));
console.log(Array.from("RHCSA"));
console.log(Array.from({name:"ramesh"}));

let score1 = 300;
let score2 = 330;
let score3 = 400;

console.log(Array.of(score1,score2,score3));

const newArray = [1,2,"A","B",["ramesh","ravi","yash"],[20,30,40],"isLoggedIn", "true"];// this variable store multiple array inside them.

console.log(newArray);

const newArrayFirst = [1,2,3,4,5,6,7,8,9,10];
const n = newArrayFirst.length;
let sum = 0;
for (let i = 0; i < n; i++) {
    let redeclared = newArrayFirst.shift();
    sum = sum + redeclared;
     console.log(`Removed: ${redeclared}`);
    console.log(`Remaining array: [${newArrayFirst}]`);
    console.log(`Current sum: ${sum}`);
}

const arrayPartOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n1 = arrayPartOne.length;
let greaterValue = 0;
let smallerValue = 0;
for (let i = 0; i < n1; i++) {
    if (arrayPartOne[i] % 2 == 0) {
        console.log(`Print the even number ${arrayPartOne[i]}`);
        greaterValue = arrayPartOne[i];
    } else {
        console.log(`Print the Odd value ${arrayPartOne[i]}`);
        smallerValue = arrayPartOne[i];
    }

    if(greaterValue> smallerValue){
        console.log("Greater value",greaterValue, "and smaller value", smallerValue);
    }
}

const arrayPartTwo = [1,2,3,4,5,6,7,8,9,10];

let n2 = arrayPartTwo.length;
for(let i=0;i<n2;i++){
    let subarray = [];//    without slice function
    for(let j=i;j<n2;j++){
        // let subarray = arrayPartTwo.slice(i, j + 1); with slice function. 
         subarray.push(arrayPartTwo[j]*2);//  without slice function
        console.log(subarray);
        
    }
}


//console.log(arrayPartTwo);
