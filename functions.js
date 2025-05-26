console.log("R");
console.log("A");
console.log("M");
console.log("E");
console.log("S");
console.log("H");

console.log("New Array print");


function callName(){
    console.log("R");
    console.log("A");
    console.log("M");
    console.log("E");
    console.log("S");
    console.log("H"); 
}

callName()

function addTwoVariables(num1,num2) {
    let result = num1 + num2;
    //  return result;
    return num1 + num2;
}

const result = addTwoVariables(4,5)

console.log("Result ", result);

function loginUserMessage(username = "harry") {
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("ramesh"));
console.log(loginUserMessage("ramesh"));


function calculateCartPrice(val1,val2,...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,599,900,2000));

const user = {
    username: "ramesh ",
    price: 300
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//  handleObject(user)

handleObject({
    username: "sam",
    price: 599
})

const myNewArray = [200,400,500,800];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,500,1000]));

