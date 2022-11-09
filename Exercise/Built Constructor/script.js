               //Built in constuctor

//String
let str1 = "Efe";
let str2 = new String("Efe");

console.log(str1);
console.log(str2);
console.log(typeof str1);
console.log(typeof str2);

String.prototype.repeat = function(n){
     return new Array(n+1).join(this);
};

console.log("Efe".repeat(5));


//Number
let num1 = 10;
let num2 = new Number(10);

console.log(num1);
console.log(num2);



//Boolean
let bool1 = false;
let bool2 = new Boolean(true);

console.log(bool1);
console.log(bool2);



//Object
let obj1 = {
     name : "Efe",
     age : 22
};

let obj2 = new Object({
     name : "Efe",
     age : 22
});

console.log(obj1);
console.log(obj2);



//Array
let ar1 = ["Efe",22];
let ar2 = new Array("Efe",22);

console.log(ar1);
console.log(ar2);