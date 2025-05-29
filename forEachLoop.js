const coding = ["js","ruby","java","python","cpp","c","jsx"];

coding.forEach( (iramesh)=>{
    console.log(iramesh);
} )

coding.forEach( (item)=>{
    console.log(item);
} )

function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe);

coding.forEach((item,index,arr)=>{
    console.log(item,
        index,arr
    );
    
})


const myCoding = [
    {
        languageName : "javaScript",
        languageFileName: "Js"
    },
    {
        languageName : "reactJs",
        languageFileName: "jsx"
    },
    {
        languageName : "python",
        languageFileName: "py"
    },
    {
        languageName : "java",
        languageFileName: "Java"
    },
    {
        languageName : "C",
        languageFileName: "c"
    },
    {
        languageName : "C++",
        languageFileName: "cpp"
    },
]