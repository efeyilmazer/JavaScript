               //Prototype inheritance

let Person = function(name,yearOfBirth){
     this.name = name;
     this.yearOfBirth = yearOfBirth;
}

Person.prototype.calculateAge = function(){
     return 2020-this.yearOfBirth;
}

let Engineer = function(name,yearOfBirth,phoneNumber){
     this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.phoneNumber = phoneNumber;
     Person.call(this,name,yearOfBirth);
     this.phoneNumber = phoneNumber;
}

Engineer.prototype = Object.create(Person.prototype);
Engineer.prototype.constructor = Engineer;


let efe = new Engineer("efe",2000,5398973875);

console.log(efe);
console.log(Engineer.prototype.constructor);
console.log(efe.calculateAge());