var c= 300;
let a = 300;
const b = 20;
if(true){
    let a = 10;
    const b = 20;
    console.log("INNER: ",a);
    
}
console.log("outerLoop");

console.log(a);
console.log(b);
console.log(c);



function one(){
    const username  = "ramesh";
    function two(){
        const website =  "google"
        console.log(username);
    }
   // console.log(website); // we cannot access the value of function two. Because that function block is change. while function two() can access that function one value 
    two()   
}
one()

if(true){
    const username = "ramesh";
    if(username === "ramesh"){
        const website = "spotify"
        console.log(username + website);   
    }
   // console.log(website); //  Same thing happens here. not function a but yeah block
}

//  console.log(username);


//  ++++++++++++++++++++Interesting++++++++++++++++++++++++

console.log(addone(5)); //  in this case we print the value before that function definition. its natural in js. we not store the value of function to another variable.

function addone(num){
    return num + 1;
}

//  addTwo(5) //    In this case we declare the function but function store the value to another variable so i cannot access or print them

const adTwo = function(num){
    return num + 2;
}


