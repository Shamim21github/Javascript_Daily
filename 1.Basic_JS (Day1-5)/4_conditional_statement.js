// var studentMarks = 70;

// only one condition

// if(studentMarks<=49){
//     console.log('Fail');
// }else if(studentMarks<=59){
//     console.log('Grade D')
// }else if(studentMarks<=69){
//     console.log('Grade C');
// }else if(studentMarks<=79){
//     console.log('Grade B')
// }else if(studentMarks<=89){
//     console.log('Grade A');
// }

//Practise 02

// if(studentMarks<=49){
//     console.log('Fail');
// }else if(studentMarks>=50 && studentMarks<=59){
//     console.log('Grade D')
// }else if(studentMarks>=60 && studentMarks<=69){
//     console.log('Grade C');
// }else if(studentMarks>=70 && studentMarks<=79){
//     console.log('Grade B')
// }else if(studentMarks>=80 && studentMarks<=100){
//     console.log('Grade A');
// }


//Practise 03
let studentMarks= prompt('enter your score (0-100)');
let grade;


if(studentMarks<=49){
    grade="F";
}else if(studentMarks>=50 && studentMarks<=59){
    grade="D"
}else if(studentMarks>=60 && studentMarks<=69){
    grade="C"
}else if(studentMarks>=70 && studentMarks<=79){
    grade="B"
}else if(studentMarks>=80 && studentMarks<=100){
    grade="A"
}

console.log("according to your marks, your grade was:" , grade);