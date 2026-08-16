// function changeText(event){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent ="pritam kumar"
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click',changeText);

// fpara.removeEventListener('click',changeText);

// function anchorAction(event){
//     event.preventDefault();
//     let anchorElement = document.getElementById('fanchor');
    
//     anchorElement.textContent ="Click done Bade Bhaiya"
// }

// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click' ,anchorAction);


// let paras = document.querySelectorAll('p');

function alertPara(){
    if(event.target.nodeName =="SPAN"){
    alert('You have click on para :' + event.target.textContent);
    }
}

// for (let i = 0; i <paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click' ,alertPara)
// }

let myDiv = document.getElementById('wrapper');
myDiv.addEventListener('click' ,alertPara)