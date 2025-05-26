const user = {
    username: "ramesh",
    price: 399,
     
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}


//  user.welcomeMessage() global browswer ==> window object
// user.username = "sam"; global node.js ==> {} or global
//  user.welcomeMessage()

console.log(this);

function willow(){
    let username = "ramesh"
    console.log(this.username);
}

willow()

// const willow = function () {
//     let username = "ramesh"
//     console.log(this.username); 
// }

const lulu = () =>{
    let username= "ramesh"
    console.log(this);
}

lulu()

// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }

// const addTwo = (num1,num2)=> num1 + num2

const addTwo = (num1,num2)=>({username:"ramesh"})

console.log(addTwo(3,5));


// const myArray = [2,3,4,5,6,7,8];
// myArray.forEach()