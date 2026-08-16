
// let name = "raj";
// function init() {
//   let name = "pritam"; // let -> block Scoped
//   function displayName() {
//     let name = "kumar";
//     console.log(name);
//   }
//   displayName();
// }
// init();





function outerFunction (){
    let name = "pritam";

    function innerFunctiom(){
        console.log(name);
    }
    return innerFunctiom;
}

let inner = outerFunction();

inner();