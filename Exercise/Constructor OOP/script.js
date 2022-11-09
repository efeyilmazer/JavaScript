            //Constructor

// function Person(name,yearOfBirth){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.calculateAge = function(){
//         return 2022-this.yearOfBirth;
//     }
// }

let Person = function(name,yearOfBirth){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.calculateAge = function(){
        return 2022-this.yearOfBirth;
    }
}

let efe = new Person("Efe",2000);
let irem = new Person("İrem",2002);



console.log(efe);
console.log(irem);
console.log(efe.calculateAge());
console.log(irem.calculateAge());