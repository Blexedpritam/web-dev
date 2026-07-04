



let firstPromise = new Promise ((resolve , reject) => {
    console.log("pritam");
    resolve(1001);
});

let firstPromise2 = new Promise ((resolve , reject) => {
    console.log("pritam");
    reject(new Error ("Internal Server Error"));
});

let firstPromise3 = new Promise ((resolve , reject) => {
    setTimeout(function sayMyName() {
        console.log("My Name is Pritam Kumar");
    } , 15000);
    return 1;
    // resolve(1);
});


let promise1 = new Promise ((resolve, reject) => {
    let sucess = true;
    // let sucess = false;
    if(sucess){
        resolve(10);        // resolve("Promise Fulfilled");
    }
    else{
        reject("Internal Server Error ");  //reject(-1);
    }
});

// promise1.then((message) =>{
//     console.log("Then ka message is :" + message);
// }).catch((error) =>{
//     console.log("Error :" + error);
// })

// Multiple then() 
// Term -> Chaning Promise
promise1.then((message) =>{
    console.log("First msg  :" + message);
    return 20;//return "Promise fulfilled second message"; // This Message will print on Second
}).then((message) =>{
    console.log("Second msg :" + message);
    return 30;//return "Promise fulfiled  third message"; // This Message willl print on Third 
}).then((message) =>{
    console.log("Third msg  :" + message);
}).catch((error) =>{
    console.error(error);
}).finally((message)=>{
    console.log("Mai to Final hu , Chalunga pakaa ");
})


//Multiple Promises

let multiPromise1 = new Promise((resolve , reject)=>{
    setTimeout(resolve,1000,"First");
})
let multiPromise2 = new Promise((resolve , reject)=>{
    setTimeout(resolve,1000,"Second");
})
let multiPromise3 = new Promise((resolve , reject)=>{
    setTimeout(reject,1000,"Third");// setTimeout(resolve,1000,"Third");
})
Promise.all([multiPromise1,multiPromise2,multiPromise3]) // All create a new promise ye jab reslove mark hoga iske andar ke sare ke sare Promises reslove ho jayenge ...! if any promises fail then All is aslo fail
.then((values) =>{
    console.log(values);
})
.catch((error)=>{
    console.error("Internal Server Error  :" + error);
})