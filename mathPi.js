const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const chai = {
    name: "Normal chai",
    price: 150,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni hai");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    //writable:false,
    enumerable:true,
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
        
    }
}


