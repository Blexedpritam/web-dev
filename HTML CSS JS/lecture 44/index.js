// let obj = {
//     name : "pritam",
//     // "full name" : "pritam kumar" 
//     age : 25,
//     weight : 70,
//     height : '6ft 1in',
//     greet: function(){
//         console.log('Hello ji kaise ho sarre..');
//     } // obj ke andar fun 
// };

// console.log(obj);
// obj.greet();
// let obj2 = obj;
// console.log(obj2);  // Reference copy...!!
// obj2.greet();

// // own research...!!
// const original = {
//   name: "Pritam",
//   details: { age: 1 } // Yeh nested object hai
// };

// // Shallow Copy banana
// const shallow = { ...original };

// // Change karna
// shallow.name = "Google";       // Yeh top-level hai, original change nahi hoga
// shallow.details.age = 5;      // Yeh nested object hai, original bhi change ho jayega!

// console.log(original.details.age); // Output: 5 (Problem!)
// console.log(shallow.details.age);  // Output: 5



// const original = {
//   name: "Pritam",
//   details: { age: 1 }
// };

// // Deep Copy banana
// const deep = structuredClone(original);

// // Change karna
// deep.details.age = 5;

// console.log(original.details.age); // Output: 1 (Original safe hai!)
// console.log(deep.details.age);     // Output: 5

// ceration of array
// let arr =[1,2,3,4,5];
// //Array constructor
// let brr =new Array('pritam', 1 , true );

// brr.push('barbar'); //insert at end 
// brr.pop(); //remove at end
// brr.shift(); //left ~ remove ~first item
// brr.unshift('Sumit kumar'); // left ~ add ~ first item
// brr.push(70);
// brr.push(80);
// brr.push(90);

// // console.log(brr.slice(2,4)); // 2se 4 tak mai..4 ko add nhi kiya jata h 

// brr.splice(1,0,'raghav kumar');

// console.log(brr);
// // console.log(typeof(arr));


// let arr = [10,20,30,11,56,78,88,43];

// let evenArray = arr.filter((number) =>{
//     return number %2 == 0;
//     // if(number%2 == 0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// });
// console.log(evenArray);

// let ansArray = arr.map((number) =>{
//     return number*number;
// })

// arr.map((number ,index) =>{
//     console.log(number);
//     console.log(index);
// })   // number ke saath index bhi pata kr sakte hai..

// console.log(ansArray);


// arr =[1,2,'pritam','sumit', null]

// let ans = arr.filter((value) =>{
//     if(typeof(value) == 'number'){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans);

// let arr =[100,20,30]

// let ans = arr.reduce((acc,curr) =>{
//     return acc + curr;
// } ,0); // acc.. intailize kra gya  0..
// console.log(ans);

// let arr =[9,4,6,7,8,1,5];
// arr.sort((a,b) => b-a);  //Descending 
// arr.sort((a,b) => a-b); //Ascending
// console.log(arr);
// console.log(arr.indexOf(5));

// let arr = [10, 20, 25, 30, 40, 50];

// let ans = arr.find((num) => {
//     return num > 40;
// });

// console.log(ans);

// let arr =[10,20,30];

// let length = arr.length;
// console.log('Length :', length);

// //tradtional loop

// for(let index =0; index < length ;index++){
//     console.log(arr[index]);
// }

// let obj = {
//     name : "pritam",
//     // "full name" : "pritam kumar" 
//     age : 25,
//     weight : 70,
//     height : '6ft 1in',
//     greet: function(){
//         console.log('Hello ji kaise ho sarre..');
//     } // obj ke andar fun 
// };

// for(let key in obj){
//     console.log(key," ", obj[key]);
// }

// arr.forEach((value ,index) =>{
//     console.log('number :',value ,'index :',index);
// });
 
// let arr =[10,20,30,40];

// for(let value  of arr){
//     console.log(value);
// }

// let fullName ='pritam kumar';

// for(let val of fullName){
//     console.log(val);
// }

//array with function 

let arr = [10,20,30,40,50];

let getSum =(arr) => {
    // let len = arr.length;
    // let sum =0;
    // for(let index =0; index < len; index++){
    //     sum = sum + arr[index];
    // }
    // return sum;
    let sum = 0;
    arr.forEach((value) => {
        sum = sum + value;
    });
    return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);



