//JavaScript has 8 Datatypes : 1. String; 2. Number; 3. Bigint; 4. Boolean;5. Undefined;6. Null; 7. Symbol; 8. Object

//JavaScript mainly 2datatypes. 1. Premitive/Simple Datatype(string,number,integer,boolean,undefined); 2.Non-Premitive/ Compound Datatype(object=>array & functions) or (object & array)


// Declare a variable and assign a string value
let str1 = "Hello, world!"; // using double quotes
let str2 = 'JavaScript is fun!'; // using single quotes
let str3 = `My name is ${name}.`; // using backticks for template literals


// Declare a variable and assign a numeric value
let num1 = 10; // positive integer
let num2 = -5; // negative integer
let num3 = 3.14; // decimal number



// Declare a boolean variable
let isStudent = true;
let isTrue = true; // boolean true value
let isFalse = false; // boolean false value


// Declare a undefined variable
let undefinedVariable; // undefined variable
console.log(undefinedVariable); // Output: undefined
let x;
console.log(x); // Output: undefined 
typeof x; // Output: undefined



// Declare a null variable (null means absebnce of object)
let nullVariable = null; // null variable
console.log(nullVariable); // Output: null


// Declare a BigInt variable ()
let a = BigInt(123);
console.log(a); // Output: 123n (bigInt variable e last e n thake)
typeof(a); // Output:(bigInt variable)

// Declare a Symbols variable
let sym1 = Symbol(); // create a new symbol
let sym2 = Symbol("foo"); // create a new symbol with a description
console.log(sym1 === sym2); // Output: false

let sym3 = Symbol("foo");
let sym4 = Symbol("foo");

console.log(sym3 === sym4); // Output: false : Symbols are often used as property keys in objects, since they are guaranteed to be unique and cannot be accidentally overwritten.


//#objects : Collections of values. Example: kono student er name(string),age(number),gender(string),marks(number),isPass(boolean) eisob data gula holo premitive types er. eigula k jokhn eksathe collection banano hobe students er jonno tokhn tak e objects bola hoi. objects er modde key & value thake. (Key:Value=> name: 'shamim', age:27; address:"Kallyanpur");
//#obejct er key access korar ways 2 ti => 1. object.keyname => ; 2. object['keyname'] 

// Declare an object with properties
let person1 = {
  name: "John",
  age: 30,
  hobbies: ["reading", "swimming", "hiking"],
  isStudent: true
};
console.log(person1["age"]); // outpur 30 
//               or
// console.log(person1.age);  // outpur 30

let person2 = {
    name: "hafiz",
    age: 28,
    city: "New York"
  };
  console.log(person2.name); // Output: "hafiz"

let person3 = {
    name: "Azad",
    roll: 20,
    class: IV,
    section: "Butterfly"
}
 console.log(person3.section); // Output: " butterfly"  


let batch1= {
  flowername: "Rose",
  flowername2: "Tulip",
  flowername3: "Lily" 
}
console.log(batch1["flowername"]);
console.log(batch1.flowername2);

const product = {
  penName : "parkar",
  price : 300,
  rating : 5,
  offer: 20,
}
console.log(product);






 // Declare an array of strings
let hobbies     = ["reading", "swimming", "hiking"];
let divisions   = ["Dhaka","Ctg","Rajshahi","Khulna","Barishal","Sylhet","Rangpur","Mymensingh"];
let fruits      = ["apple", "banana", "orange"];
// console.log(fruits[1]); // Output: "banana"

//  console.log(divisions[4]);// Output: "Barishal"
 console.log(fruits,"Favourite");










