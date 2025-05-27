(function bgmi(){
    //  named IIFE

    console.log(`DB CONNECTED`);
    
})();

//  without named IIFE
(() =>{
    console.log(`DB CONNECTED TWO`);
    
})();

// with paramter IIFE
((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})('ramesh')
/*  IIFE : IIFE is a function which immediately executes after it's creation . It is written as one parentheses for wrapping the function and other for execution ()();
2. Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other variables or functions (global scope pollution). Means IIFE keeps variables and functions private in it.
3. IIFE written with function name is named IIFE and not with name are unnamed/anonymous. 
4.We can use parameter inside first parentheses.
5. To write two or multiple IIFE one should be end with semicolon ;*/

