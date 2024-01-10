
// // #Arithmatic expression is a combination of ....
// //  expression (combination of operands+ operators => a + b where a/b = operands, + is operator)
// //   operands (vales, variables, etc)
// //   operators/sign (+ - */ %)
// //   that can be evoulated to a value 
// //   example: y = x + 5;
// //   here y & x is operands; and + is operators;

// let students = 21;
//                          // augmented assignment operator:  (+=;-=;*=;/=)                        
// students = students + 1; // students +=1; // outputs : 22; add new students
// students = students - 1; // students -=1; // outputs : 20; remove one students
// students = students * 2; // students *=2; // outputs : 42; multiply  students
// students = students / 3; // students /=2; // outputs : 7; divide students

// let extraStudents = students % 2; // % is called modulas

// console.log(extraStudents); // outputs : 0; if divide with modulas answer is 0 but if not divide the answer is 1


// /*   Arithmatic expression another important things :

//             operator precedence
//             1. parenthesis ()
//             2.exponents
//             3.multiplication & division
//             4. addition & subtraction
        
// */

// let result10 = 1 + 2 * (3 + 4 );

// console.log( result10 ); //outputs : 15 //at first work on parenthesis (3+4)=7; then multiplication 7*2=14; then addition 14+1=15

// let result20 = (1 + 2) * (3 + 4 );

// console.log( result20 ); //outputs : 21; // at first work on parenthesis (1+2)=3 * (3 + 4)=7, then multiplication 3*7=21

// //# pre & post increment/ decrement 
    
//     pre(++a); post(++b); // pre er increment age hoi and first line ei print hoi, post er increment first line e same thake porer line e add hoy

// let a = 5;
// let b = 2;

// console.log("++a = ", ++a);// output : 6
// console.log("a++ = ", a++);// output : 5, 2nd line e outpur 6 hobe


//# js e operators er right side e ja thakbe oitar value left side e add hobe ex: a = 5; that means 5er value store holo a te


//# Ternary operator : 3 ti operands er upor kaj kore, (conditions ?  true or false=> a ? b:c) that means a condition jodi sotto hoi tahole b print hobe, ar jodi a condition ti mittha hoi tahole c print hobe.
    // structure : condition ? true output : false output

let age1 = 25;
let age2 = 16;

let result1 = age1 >= 18 ? "adult" :  "not adult"; // jodi age 18 er soman or beshi hoi tahole adult print hobe,otherwise not adult print hobe, that means age er condition sotto hole adult print hobe mittha hole not adult print hobe

let result2 = age2 >= 16 ? "adult" :  "not adult"; // jodi age 18 er soman or beshi hoi tahole adult print hobe,otherwise not adult print hobe, that means age er condition sotto hole adult print hobe mittha hole not adult print hobe

console.log(result1); //output: adult
console.log(result2); //output: not adult


let animals= "lion";
    
let animals2= animals >= 'lion' ? "ok" : "not ok"; //

console.log(animals2);



// program to check pass or fail

let marks = prompt('Enter your marks :');

// check the condition
let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);