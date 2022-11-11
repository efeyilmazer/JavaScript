            //Arrow Functions


//ES5
let Es5 = function(){
    console.log("Merhaba ES5");
}

Es5();

//ES6
let Es6 = () => {
    console.log("Merhaba ES6");
}

Es6();


//parameters
//ES5
Es5
let paramEs5 = function (a,b){
    return a*b;
}

console.log(paramEs5(2,3));

//ES6
let paramEs6 = (a,b) => {return a*b};
console.log(paramEs6(3,4));
