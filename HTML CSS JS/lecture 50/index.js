//Compile time error 

//synntax error 

// let a = ;

//Runtime error 

//Reference error 
// console.log(x);


// try{
//     console.log("Try block start here");
//     // error -> reference error 
//     console.log(x);
//     console.log("Try block ends here");
 
// }
// catch(err){
//     //define krte h,error k saath aap kya krna chate h
//     //retry logic 
//     //fallback machansim 
//     // logging 
//     //custom error
//     console.log("I am inside the catch block");
//     console.log("Your error is here :" ,err);
// }
// finally{
//     console.log("i will run everytime , as i am finally block");
// }


// try{
//     //Refernece error 
//     console.log(x);
// }
// catch(err){
//     throw new Error("Bhai phele declare kro , fhir print krna");

// }

let errorCode = 100;
if (errorCode == 100){
    throw new Error ('Invalid json');
}