            //Map method
let myMap = new Map();

console.log(typeof myMap);

let key1 = "Efe";
let key2 = {a:2,b:3};
let key3 = () => 2;

myMap.set(key1,"X");
myMap.set(key2,"Y");
myMap.set(key3,"Z");

console.log(myMap.get(key3));

myMap.forEach(function(key,value){
    console.log(key,value);
});


// const arr = [key1,"A"],[key2,"B"], [key3,"C"]];

// arr.forEach(function(key,value){
//     console.log(key,value);
// });