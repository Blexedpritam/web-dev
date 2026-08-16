
// //var Hoisting

// console.log(a);
// var a = 20;    
// //undefined


// // Let Hoisting 
// console.log(b);
// let b = 50;   

// ReferenceError: Cannot access 'b' before initialization


//Const Hoisting 
// console.log(c);
// const c = 40;
// //ReferenceError: Cannot access 'c' before initialization



//Function Hoisting 
// getMyname('pritam');

// function getMyname(finalName){
//     console.log(finalName);
// }

// function hoisting code excute krega

//Function Exppression Hoisting

// greet();

// var greet = function(){
//     console.log('hello world');
// }

// //TypeError: greet is not a function 
// // <<-- Greet variable hoist hua, function nahi  -->>

// class hoisting

// class Human {

// }

// const obj1 = new Human();

// Function in citizens

   // function greetMe(greet,fullName){
   //     console.log('Hello' ,fullName);
   //     greet();
   // }
   // function greet(){
   //     console.log("Gretting for the day");
   // }

   // greetMe(greet,"Pritam");
   // // greet();


   //how to return functions

   // function slove(number){
   //     return  function(number){
   //         return number*number;
   //     }
   // }
   // let ans = slove(5);
   // let fullAns = ans(10);
   // console.log(fullAns);


   //use function in array..!

   // const arr =[
   //     function(a,b){
   //         return a+b;
   //     },
   //     function(a,b){
   //         return a-b;
   //     },
   //     function(a,b){
   //         return a*b;
   //     }
   // ];

   // let first = arr[1];
   // let ans =first(5,10);
   // console.log(ans);


   //obj in fun

   // let obj ={
   //     age :25,
   //     wt :40,
   //     ht : 180,
   //     greet : ()=>{
   //         console.log('Hello jee kaise ho sare ');
   //     }

   // }
   // console.log(obj.age);
   // obj.greet();

   //function expression 
   // var greet;
  // console.log(greet);

   // var greet = function(){
  //     console.log("Namaste jii");
  // }