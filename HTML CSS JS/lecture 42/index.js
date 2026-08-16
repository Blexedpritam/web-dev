//  for(let a=1; a<=10; a++){
//      console.log('pritam');
// }



// let i =1;
// do{
//     console.log('pritam');
//     i++;
// }while(i<=10);

// let i = 1;
// while(i<=10){
//     console.log('pritam');
//     i++;
// }

// for (let i=1; i<=5; i++){
//        console.log(i);
// }

// let i =1 ;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// for(let i=5; i>0; i--){
//      console.log(i);
// }

// let i =5;
// do{
    // console.log(i);
    // i--;
// }while(i>0);

// let i =5;
// while(i>0){
//     console.log(i);
//     i--;
// }

// for(let i=1; i<=6;i++){
//     if(i ==4){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

// let i = 1;
// while(i<=6){
//     if(i ==3){
//         break;
//     }
//     else{
//         console.log(i);
//     }
//     i++;
// }

// for(let i=1;  i<=5; i++){
//     if(i == 3){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }

// let i = 1;
// while(i<5){
//     console.log("inside the loop");
//     if(i ==3){
//         i++;
//         continue;
//     }
//     else{
//         console.log(i);
//     }
//     i++; // if i forget to updations.. it become infinite loop..!
// }

// for (;;) {
//      console.log("Hello");  //foor infinite 
// }

// while (true) {
//     console.log("Hi");
// }       // for infinite short cut ..!

//strings

// let name1 ="pritam";  //primitive string
// let name2 = 'kumar';  //primitive string  
// let name3 =`my        
// name  
// is
// pritam
// kumar`;  //primitive string

// let name4 = new String('pritam kumar'); // new string - string object
// console.log(name4);

// let op1 = 'English ';
// let op2 = 'Hindi';

// console.log(op2.length); // for legth

// let ans = op1 + op2;  // concatenation
// console.log(ans);

// let finalAns = `${op1}${op2}`;
// console.log(finalAns);

// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase());

// let str = 'hello babe';
// // console.log(str.substring(2));
// console.log(str.substring(2,10));

// let sentence ="hello ji \"kaise\" ho sarre ";   // sibgle code aur double code combine krkke bhi kr sakte hai.. yrr fhir backslash
// console.log(sentence);

let sentence2 = "Hello \\Jee \\kaise \\ho \\saare";
let words = sentence2.split('');        //study in array 
console.log(words);
console.log(words.join('-'));    // study in array 

