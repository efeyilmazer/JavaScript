            //Dizi ve nesneleri döngüyle kullanmak
let cars = ["BMW", "Mercedes", "Audi"];
let people = [
    {firstName : "Efe", lastName : "Yılmazer"},
    {firstName : "İrem", lastName : "Taş"},
];

console.log(people);

for(let i = 0; i < people.length; i++){
    console.log(people[i].firstName);
}

console.log(typeof people);

for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}


//Array for-in
for(let i in cars) {
    console.log(`index : ${i}, value : ${cars[i]}`);
}

console.log(typeof cars);

for (let i in people) {
    console.log(`index : ${i}, value : ${people[i].firstName}`);
}

Object
For-each
    cars.forEach(function(item){
        console.log(item);
});

people.forEach(function(item){
    console.log(item.firstName);
});