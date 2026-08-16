// class Human {

//     //property
//     age; //public 
//     #ht = 180; //private 
//     wt;

//     constructor(newAge,newHeight,newWeight){
//         this.age = newAge;
//         this.#ht =newHeight;
//         this.wt =newWeight;
//     }

//     //Behaviour
//     walking(){
//         console.log("I am walking" ,this.#ht);   //class ke  andar obj ko acces krne ke THIS keyword ka use kkrte haii..
//     }
//     running(){
//         console.log("I am runninng");
//     }

//     get fetchHeight(){
//         return this.#ht;
//     }
//     set modifyHeight(val){
//         this.#ht  = val;
//     }
// }

// let obj = new Human(50,180,70);
// console.log(obj.fetchHeight);

// obj.walking();




// function sayName(myName ="Sumit kumar"){
//     console.log("My name is :" ,myName);
// } 

// sayName("pritam kumar.");


// function sayName(fName ="Bhagat",lName ="Singh"){
//     console.log("My name is :",fName," ",lName);
// }
// sayName("pritam");

// function sayName(fName ="Bhagat",lName = fName.toUpperCase()){
//     console.log("My name is :",fName," ",lName);
// }
// sayName("pritam");

// function slove(value ={age: 15, wt : 70, ht : 180,}){
//     console.log("Hello Jii",value);
// }
// slove();

// function slove(value =["pritam" ,"rahul","rose"]){
//     console.log("Hello Jii",value);
// }
// slove();

// function slove(value ="Rahul"){
//     console.log("Hello Jii -->",value);
// }
// slove(undefined);


function getAge(){
    return 180;
}

function utility(name ="pritam" ,age =getAge()){
    console.log(name , " " , age);
}
utility("rose" ,35);