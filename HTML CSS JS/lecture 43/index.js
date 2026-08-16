
// // function definition



// function sayMyName(){
//     console.log('pritam');
// }
// //function use - function call 
// sayMyName();

// function printcount(){
//     for(let i =1; i <=100; i++){
//         console.log(i);
//     }
// }
// printcount();

// function printNumber(num){
//     console.log('printing number:',num);
// }
// printNumber(5);

// function getAverage(num1 , num2){
//     let avg = (num1 + num2)/2;
//     console.log('Average number is:',avg);
// }
// getAverage(3,7);

// Return function

// function getSum(a,b,c){
//     let sum = a + b + c;
//     return sum;
// }
// let ans = getSum(5,6,7);
// console.log('Printing Sum is :', ans);

// function getMyName(firstName, secondName){
//     // let fullName = firstName + " " + secondName;  // local variable
//     let fullName = firstName + secondName; // ab ye int ho gye .. toh ye kudh int ko ab plus kr dega.. 
//     return fullName;
//     //unreachable statements
//     // let a = 10;
//     // let b = 5;
//     // let sum = a + b;
//     // console.log(sum);
// }
// let fullName = getMyName( 7, 7);     //function ko batya nhi hai ko vo integer hai ya string hai " too usko string treat kr lega ".....// global/block scope variable
// console.log('Full Name:' ,fullName);


// function getMultiplication(a,b){
//     // let ans = a*b;
//     return a*b;
// }
// console.log(getMultiplication(7,10));

// const getMultiplications = function (a,b){
//     return a*b;
// }    // const use kro var ke liye debugging mai issue nhi aane ke liye ...!
// let ans =getMultiplications(7,10);
// console.log(ans);

// Arrow functions 

let getExp =(x,y) =>{
    let ans = x**y;
    return ans;
}
console.log(getExp(2,10));




// Traditional Function
function getSum(a, b, c) {
    return a + b + c;
}

// Function Expression
const getMultiplication = function(a, b) {
    return a * b;
}

// Arrow Function
const getExp = (x, y) => {
    return x ** y;
}
console.log(getExp(2, 10)); // 1024