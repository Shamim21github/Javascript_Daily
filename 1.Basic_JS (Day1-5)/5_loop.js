//Loops are used to execute a piece of code again and again (repeated tasks)

//loop lists : general loop =>(for, while, do-while), 
//             to iterate on special data type using loop => (for of, for in) ,


//For Loop
//for loop formation : initialize, condition check , upgradation, {block of code execution}

//Print apna college 10 times

// for(let a=1; a<=10; a++){
//    console.log("apna College"); //apna college(10)
// }


// Print 2 to 20

// for(let a=2; a<=20; a++){
//    console.log("a =", a); //a=2,a=3,a=4,a=5,a=6,a=7,a=8,a=9,a=10,..............................., a=20;
// }


// Print 1 to 100

// for(let i=1;i<=100; i++){
//     console.log ("i =", i);
// }
 

//Calculate sum of 1 to 10

// let sum= 0;
// for(let a=1;a<=10;a++){
//     sum = sum + a;
// }
// console.log("sum of 1to10 is = ", sum ); // sum of 1to10 is =  55


//calculate the sum of 3 to 30

// let sum3= 0;
// for(let i=1;i<=30;i++){
//     sum3 = sum3 +i;
// }
// console.log ("sum3 of 3 to 30 is = ", sum3); // sum3 of 3 to 30 is =  465


//calculate the sum of 5 to 50

// let sum5= 0;
// let n=50;
// for(let i=1; i <= n; i++){
//     sum5 = sum5 +i;
// }
// console.log ("sum5 of 5 to 50 is = ", sum5); // sum5 of 5 to 50 is =  1275



// Infinite Loop : A loop that never ends, mainly it's stopping condition is always true, infinite loop damange our whole memory and it will hand the computer..

//loop formation i =1(initialize); i>=0(conditions); i++(upgradations)

// for(let i = 1; i >=0; i++){
//     console.log ("i = ", i);
// }
//this loop logic is initially i er value 1, updation e bola holo i er value always barbe(jeikhane i=1,2,3,4,5....eivabe cholte thakbe)ei codintion e i er value always 0 theke boro i thakbe tai eita infinite vabe choltei thakbe..............

// ---------------------------------------------------------------------

//While loop

//formation while(condition) {//do some work or execute it (i++/i--)}

// print 1 to 5

// let i = 1;

// while(i <=5){
//     console.log("i is = " + i)
//     i++;
// }

// -------------------------------------------------------------------------



//do-while loop

//formation do{//do some work or execute it (i++/i--)} while(condition); do-while loop e last e while er por semi-colon(;) must dite hobe


// print 1 to 5
// let i = 1;

// do {
//     console.log("Shamim");
//     i++;
// } while (i <= 10);

//------------------------------------------------------------


//for of loop

//for of loop using for strings & arrays

//formation : for(let variable name of stringvariable) {//do some work/ execute it}

//konw the string 
// let str= "Javascript";
// for(let i of str){ //iterate character
//     console.log("i=", i);
// }

//know the string size
// let size = 0;
// for(let i of str){ //iterate character
//     console.log("i=", i);
//     size ++;
// }

// console.log("string size: ", size);


//for in loop

//for in loop using objects

//formation : for(let key/variable name in objectvalue) {//do some work/ execute it}

// let student = {
//     name: "Shamim",
//     age : 27,
//     roll : 666
// }
// for(let key in student){
//     // console.log("key=", key, "value=", student[key]); //key= name value= Shamim
//     console.log(key, "=",  student[key]); //name=shamim
// }





//Question-1: print all even/odd numbers from 0 to 100

// for(let num = 0; num <=100; num++){
//     // if(num %2 ===0){ //even number condition (where 2 is divied by any number)
//     //     console.log ("even number is =", num); // 0,2,4,6,8,10,.................................,100
//     // }

//     if(num %2 !==0){ //odd number condition(where 2 is not divided by any number)
//         console.log ("even number is =", num); //0,1,3,5,7,9,.................................,100
//     }
// }




//Question-2 : Create a game where you start any random game number. Ask the user to keep guessing the game number untill the user enters correct value.

let gameNumber = 35;

let userNumber = prompt("Enter game number");

while(userNumber != gameNumber){ //prompt er moddde jei number ashe ta muloto string format e ashe, prompt er modde ei jonno double equal deya jabe na. Game number jodi string format("35")thakto tahole !==(double equal) deya jeto

    userNumber = prompt("you entered the wrong number. Guess Again : ")
}
console.log("Congratulations, You entered the correct Number!");
