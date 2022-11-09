            //Function types

//function declaration
function sum(a,b){
     let c = a + b;
     return c;
}
console.log(sum(10,20));



//function expression
const sum = function(a=0,b=0){

    // if(typeof a === "undefined"){
    //     a = 0;
    // }
    // if(typeof b === "undefined")
    //     b = 0;

    let c  = a + b;
    return c;
}
console.log(sum(10,20));
console.log(sum(10));