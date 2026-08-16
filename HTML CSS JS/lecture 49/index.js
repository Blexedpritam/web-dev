let src ={
    age :22,
    ht :160,
    wt :700,
}

let dest = {};
// cloing  using iteration 
for (let key in src){
    let newKey = key ;
    let newValue = src[key];
    // insert newkey and value in dest and create a clone 
    dest[newKey] = newValue;
}

src.age = 90;
console.log("Src :", src);
console.log("Dest :" ,dest);


// let src2 ={
//     value :101,
//     name :"pritam",
// }
// let dest = Object.assign({},src,src2)
// console.log("Src :", src);
// console.log("Dest :" ,dest);



// let dest = {...src};
// // let dest = src;
// src.age =90;

// console.log("Src :", src);
// console.log("Dest :" ,dest);

// console.log(obj);

// obj.color = "yellow";
// console.log(obj);


