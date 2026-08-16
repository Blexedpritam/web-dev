//  arithmetic operator

// let a = 2;
// let b = 5;

// console.log(a**b);

// Assignment operator

// let a = 5;
// let b = 10;

// a = a + 10;
// a += 10;
// console.log(a);

// a = a-2;
// a -= 2;
// console.log(a);

// a = a/2;
// a /= 2;
// console.log(a);

// a = a*3;
// a *= 3;
// console.log(a);


// comparison operator

// let a = 10;
// let b = 5;

// console.log(50 >= 5);
// console.log('5' == 5);  // lose equality
// console.log('5' === 5); //strict equality

//Ternary operator
// let age = 36;
// let status1 =(age > 18) ? 'i can vote' : 'i cannot vote';

// console.log(status1);

// let ans = (true && true && true);
// let ans = (false|| false || true ) ;
// let ans = !(true);
// console.log(ans);

//  Non - Boolean 
// console.log( false || 'pritam');
// console.log(false || 3 || 4 || 5 ); // Short circuting

// Bitwise Operator
// console.log(2 & 5);
// console.log( 2 | 5);
// console.log(~(0));
// console.log( 2 ^ 2);
// console.log(10 >> 1);  // right shift
// console.log(10 << 5); // left shift


// conditionals

// let age = 25;
// if(age >= 18){
//     console.log('you can vote');
// }
// else{
//     console.log('you cannot vote');
// }


// let number = 4;
// let age  = 18;

// if(number == 1){
//     console.log('A');
// }
// else if (number == 2){
//     console.log('B');
// }
// else if (number == 3){
//     console.log('C');
// }
// else if(number == 4){
//     if(age >= 18){
//        console.log('I can vote');
//     }
//     console.log('D');
// }
// else if (number == 5){
//      console.log('E');
// }
// else{
//     console.log('F');
// }

let num = 3;

switch(num){
    case 1:console.log('A');
    break;
    case 2:console.log('B');
    break;
    case 3:console.log('C');
    // break;
    case 4:console.log('D');
    break;
    default: console.log('F');
}