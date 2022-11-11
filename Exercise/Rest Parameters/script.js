            //Rest parameters

function x(a,b,c){
    return a*b*c;
}

console.log(x(1,2,3));
console.log(x(1,2));
console.log(x(1,2,3,4,5));

function y(...numbers){
    return numbers.reduce((x,y) => x*y);
}

console.log(y(1,2));
console.log(y(1,2,3));
console.log(y(1,2,3,4,5,6,7));
