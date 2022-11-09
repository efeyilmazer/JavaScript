            //Object create
            
let person = {
    calculateAge : function(){
        return 2022-this.yearOfBirth;
    }
}

let efe = Object.create(person);

efe.name = "Efe";
efe.yearOfBirth = 2000;

console.log(efe);
console.log(efe.calculateAge());

let irem = Object.create(person,{
    name : {value:"İrem"},
    yearOfBirth:{value:2002}
});

console.log(irem);
console.log(irem.calculateAge());

