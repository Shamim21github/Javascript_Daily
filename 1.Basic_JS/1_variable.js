
// A variable is a container for storing Data
// A variable behaves as if it was the value that it contains


// two types of variables. 1) Simple variable : one data; 2) Compound variable : more than one data.

// Two steps of a variable :
// 1. Declaration (var,let{best use}, const)
// 2. Assignment (=assignment operator)

// 1. Assignemt variable er kaj hocche right side er value ta k left side e save kora. 
// 	example: a=b; that means b er jei value hobe ta a er modde save thakbe. 
// 		name = "Shamim"; eikhane shamim er value ta name er modde save thakbe.
// 		variable er nam k bola hoi identifier. eikhane name holo identifier.
// 	assignment means assign kora/value deya/value assign kora/value save kora.
    
// 2. Dynamically  Typed language:  c, c++ ,java eisob e variable er modde string/number/boolean          jai store kora hok first ei bola lage kintu js e bola lage na,even jokhn khusi data type                   change o kora jai. js only execute last time store data. 
// 	      example : firstName="Shamim"; lastName="Apon";age=26; 
// 	      firstName=1; console.log(firstName); ->output: 1. bcz js always execute the  last value.


//#1. we have declare unique variable names age & it contains no value(undefined)
let age;

console.log(age);  //undefined
console.log("age"); //age (""= string)


//2. we have declare unique variable years  & it contains number value in assignment operator
let years=36;

console.log(years);

//3. we have declare unique variable birthday  & it contains number value and add arithmetic expression
let birthday=25;

birthday=birthday+1 // or, birthday++;

console.log(birthday); 

//4. we have declare unique variable paragraph  & it contains string value 
let paragraph="As a frontend designer you have to learn js";

console.log(paragraph);

//5. we have declare unique variable hasaaAge as string value and add arithmetic expression(bcz of string value it concatenated number value and add arithmetic expression)
hasanAge="22"
hasanAge=hasanAge+1 // or, hasanAge++;
console.log(hasanAge); //221= 22 is string there and 1 is concatenated

//6. we have declare unique variable truth/dare  & it contains true/false value
let jobSeeker=true; // I am a jobSeeker
let students=false; //I am not a student

console.log(jobSeeker);
console.log(students);


//# any kind of storing data in variable  is called literal.example : var x =10 :meaning number literal; var y= "happy":  meaning string literal; var z= "true": meaning boolean literal; var w : meaning undefined literal; var n=null: meaning null literal;

//# variable name is called identifier. example : var x = 10; var name = "happy"; these two x & name are identifiers.

//#var, let, const differences : ES6 introduced let & const in 2015

//# var: ekta same name e var diye jotto bar khusi totto var value assign kora jai. 
// 	example: var age=36; var age=47; var age= 57; console.log(age) ->output: 57;variable can be re-declared & updated. Var is a global scope variable
		
//# let: ekta same name er variable ekbar just nam likhle hobe var bar nam likha lage na, 
// 	example : let age=44;age=77;age=98;console.log(age);->output:98.let e bar bar let age likhle error dekhabe,but variable e dekhai na.let can be re-declared & updated. Let is a  block scope variable.

//#const: fixed value er variable.ekta variable er value ekbar assign korle oita always same thakbe oita never been changed.
	// example: const age=33;age=88; eita kokhono hobe na,,age er value 33 fixed hoye memory te save theke jabe always.const can be re-declared & updated. Const is a  block scope variable.

//# block bolte bujhai curly braces{} er modde ja thake. { eita holo ekta block }  { eita arekta block }

//# Data Types : Primitive(fixed data types: string,number,boolean,null,undefined,bigInt,symbol ) & Non-Primitive(objects[arrays, functions])









