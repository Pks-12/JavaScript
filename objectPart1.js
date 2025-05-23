

//  object literals

const mySym = Symbol("key1");//    symbol to initialize the value

const JsUser = {
    name: "Ramesh",
    "full name": "Ramesh Choudhary",
    [mySym]: "mykey1",//    symbol to initialize the value
    age:18,
    location: "Dehradun",
    email: "ramesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["M","T","W","Th","F","S","Su"],
}

//  How to access the object
console.log(JsUser.email); //   first to access the object by using the dot.
console.log(JsUser["email"]);// second method to access the object by using the square bracket.
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);//   third one is access the data symbol we used this way.

JsUser.email = "rc@hotmail.com";
// Object.freeze(JsUser);

JsUser.email = "ch@yahoo.com";

//  Object.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User welcome here");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



