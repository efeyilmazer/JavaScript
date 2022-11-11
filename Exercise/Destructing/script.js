            //Destructing arrays

var x,y, other;

[x,y] = [1,2];

console.log(x);
console.log(y);

[x,y,other] = [1,2,3,4,5,6];
console.log(x);
console.log(y);
console.log(other);

[x=2, y=3] = [1,2];
console.log(x);
console.log(y);

let x=3, y=4;
[x,y]=[y,x];

console.log(x);
console.log(y);


function dizi(){
    return [1,2,3];
}

let [a]=dizi();
console.log(a);
console.log(b);