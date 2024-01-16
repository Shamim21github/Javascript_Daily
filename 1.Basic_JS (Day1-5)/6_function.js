//Block of code that performs a specific task, can be invoked(called) whenever needed.

//Function Definition : function functionName(){block of code that performs a specific task, can be invoked(called) whenever needed}

//function Calling: functionName()

//function Parameters: functionName(parameters){}

// function parameters are like local variable which is block scope,it is executed in the same block.


// Example-01

function firstFunction(msg){ 
    //parameter -> input
    console.log(msg);
}

// firstFunction();//undefined bcz no value is given in function parameter
firstFunction("I love js");// output : I Love js. this called argument. function call er modde jei value pass kora hoi oita argument. 



//Arrow Functions





//Normal Functions example
function sum(a,b){
    return a + b;
}

var abc = sum(3,5)
console.log(abc); // 8

//Arrow Functions example
const Newsum =(a,b) => {
    console.log(a + b);
}

const Abc= Newsum(5,10); //15
