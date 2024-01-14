//string is a collection of words

//Sring is a sequence of characters used to represent text

//string create => let string variable name = "string value"  
                    // let     name            =   "Shamim"; // double quote
                    // let     section         =   'Rose';  // single quote 

// all types of string we are create in js have  inbuilt properties(length,index,) or inbuilt functions(methods).

//string length Calculate
//structure => varibale name.length

                //  let a= "Shamim Apon";
                //  let b = a.length;
                //  console.log(b); // 10

                //  let str = "Javascript";
                //  let count = str.length;
                //  console.log(count); // 10


// String postion (origin string postion search) => position/index strating with 0 
//structure => varibale name[postion];

                    // let x= "Shamim Apon";
                    // let y = x[8];
                    // console.log(y); // p

                    // let str = "Javascript";
                    // let count = str[6];
                    // console.log(count); // r




//Template Literals : A way to have embedded expressions in strings
// Template literals e string bujate single/double quote('/"") er poriborte backtick(` `) use hoi.
// Template literals is also called special type of string

                    
                    // let specialString = `This is a Template Literal`;
                    // console.log(specialString); // This is a Template Literal
                    // console.log(typeof specialString); // string


//Why we are using backtick or template literals

//                     let obj = {
//                         item  : "Football",
//                         price : 1000,
//                     }
// console.log("the cost of", obj.item, " is", obj.price, "Taka"); //the cost of Football  is 1000 Taka(1000 eikhane number)
//Traditional using double quotes.This way amra bar bar amra choto string ("the cost of") banacchi then object(obj.item) then abar string (",") then abar object(obj.item) then ...


//uporer object k amra single string e print korbo, ar ei single sting e print korte backtick/template literal use hobe
// console.log(`the cost of ${obj.item} is ${obj.price} Taka`); //the cost of Football  is 1000 Taka(1000 eikhane string)

//Note : template literal syntax => `string text ${expression} string text` curly r moode r value/placeholder k eikhane string interpolation bola hoi

                    // console.log(`Today is a very special day : ${1+2+4} january it is`);



//escape characters : \n (for new line); \t (for tab space); escape characters length always count 1 as \n or \t are 2charactes

// console.log(`Today is a very special day : \n${1+2+4} january it is`);
// console.log(`Shamim Apon \t ${1} is on fire!`);
// let Name =(`Shamim\nApon`);
// let count = Name.length;
// console.log(count);// 11 shamimapon 10 characters & \n=1; that means 11


// String Methods(function) : method muloto kono kaj kore thake. A method is like a block of code ja muloto amader kichu kaj kore dei.

//str.toUpperCase(convert Uppercase), str.toLowerCase(convert lowercase), str.trim(remove whitespaces), str.slice(start,end),
// str.toUpperCase(convert Uppercase),str.concat(str2), str.replace(searchVal,newVal),str.charAt(index)


// let life= "life is too tough to handle!";
// let upperConvert= life.toUpperCase();
// console.log(upperConvert);

// str.toLowerCase(convert lowercase)
// let fruits= "Jack-fruits";
// let lowercase= fruits.toLowerCase();
// console.log(lowercase);

// str.trim(remove starting point & last point  whitespaces)
// let bigDay= '       Today is a very special day for everyone in the world!       '
// let remove= bigDay.trim();
// console.log(remove);


//str.slice(start,end) remove part of string => mainly it count starting value and ending value it will not count/include

// let number = '0123456789';
// console.log(number.slice(3,7));//3456 it will start the index number 3 and not count the end number 7 

             // 0123456789....index number
// let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXY';
// console.log(alphabet.slice(5,10)); // FJ


//str.concat(str2) => Connect two strings 
// let str1 = "Shamim";
// let str2 = "Apon";


// let str3 =str1.concat(str2) // or, str1 + str2
// console.log(str3);



// str.replace(searchVal,newVal) => at first searching the string value then adding the new value 

// let str = "Hello Warld!";

// console.log(str.replace("a","o"));// Hello World

// let str = "Hello";
// console.log(str.replace("lo","p"));// Help


// str.charAt(index) => character indexing 
// let str5 = "Twenty Century";
// console.log(str5.charAt(9))//n




//Questions-1 : Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length. ex: user name = "abcdefghijkl" username should be "@bcdefghijk13"

let name1 = prompt('Enter your name without space');
let newName = "@" + name1 + name1.length;

console.log(newName);





//string is immutable/not changeable