
async function getFake() {
    setTimeout(function(){
        console.log("I am inside the set Timeout block");
    },3000);
}
let output = getFake();

//Await - ? 

//Fetch API ?

// NOTE : FOR USING AWAIT CONDITION YOU HAVE TO MARK "AYNC" FIRST THEN YOU CAN USE "AWAIT"
async function getData(){
    // get request - async 

    let respone1 =  await fetch('https://jsonplaceholder.typicode.com/todos/1');

    let respone2 =  await fetch('https://jsonplaceholder.typicode.com/posts');

    let respone3 =  await fetch('https://jsonplaceholder.typicode.com/photos');

    // Pare json - sync 
    let data1 = await respone1.json();
    let data2 = await respone2.json();
    let data3 = await respone3.json();

    console.log(data1);
    console.log(data2);
    console.log(data3);
}
getData();

//Scenario :
// Pepare url / API endpoint -> sync 
//await // fetch data -> network call -> async 
// process data -> sync

//Post 
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
  method: "POST",
  body: JSON.stringify({ username: "Pritam Kumar" }),
  headers: myHeaders,
};

async function  getData2(){
    const otherResponse = await fetch(url)
    let data = await otherResponse.json();
    console.log("Get data response :" ,data);
}

async function postData1(){
    const otherResponse = await fetch(url , options);
    let data = await otherResponse.json();
    console.log("Post data response :" , data);
}
async function processData() {
    await postData1();
    await getData2();
}
processData();
