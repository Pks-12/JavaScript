//  for of 
//  ["", "", ""]
//  [{}, {}, {}]

const arr = [1,2,3,4,5];
for (const num of arr){
    console.log(num);
}

const greeting = "Hello Ramesh ji";
for(const greet of greeting){
    console.log(greet);
}

//  Maps

const map = new Map()
map.set('IN',"INDIA");
map.set('RU',"RUSSIA");
map.set('FR',"FRANCE");
//  map.set('IN',"India"); Map is only take a unique value in array.

console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Bus Simulator Unlimiate'
// }

// for (const [key,value] of myObject){
//     console.log(key,':-',value);      using "for of" loop this object not iterable.
    
// }
