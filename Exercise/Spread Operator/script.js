            //Spread operator

function sum(a,b,c){
    return a+b+c;
}
console.log(sum(10,15,20));

let numbers = [10,15,20];

//ES5
console.log(sum.apply(null,numbers));

//ES6
console.log(sum(...numbers));

let arr1 = [11,12,13];
let arr2 = [10,14,15];
let arr3 = [...arr1,...arr2];

console.log(arr3);
