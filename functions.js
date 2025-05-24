console.log("R");
console.log("A");
console.log("M");
console.log("E");
console.log("S");
console.log("H");


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


