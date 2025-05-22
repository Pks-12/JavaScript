//  Dates

let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025,0,23);
let myCreatedDated = new Date(2025,0,23,5,3);
let mCreatedDated = new Date("01-14-2025");
console.log("lets Start");

console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDated.toLocaleString());
console.log(mCreatedDated.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//  `${newDate.getDay()} and the time ` String interpolation
newDate.toLocaleString('default',{
    weekday: "long",
})









