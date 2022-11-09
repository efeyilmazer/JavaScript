            //Prototype

let Person = function(name,yearOfBirth){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    // this.calculateAge = function(){
    //     return 2020-this.yearOfBirth;
    // }
}

Person.prototype.calculateAge = function(){
    return 2022-this.yearOfBirth;
}

person.prototype.getYearOfBirth = function(){
    return this.yearOfBirth;
}
let efe = new Person("Efe",2000);

console.log(efe);