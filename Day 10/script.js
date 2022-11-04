//Object Literals

let firstName = "Efe";
let lastName = "Yılmazer";
let firstName1 = "İrem";
let lastName1 = "Taş";

let Efe = ["Efe","Yılmazer",22];
let İrem = ["İrem","Taş",21];

let val;
let person = {
    firstName : "Efe",
    lastName : "Yılmazer",
    age : 22,
    hobbies : ["Müzik","Csgo"],
    adress : {
        city : "İstanbul",
        country : "Türkiye"
    },
    getBirthYear : function(){
        return 2022-this.age;
    }
}

val = person;
val = person.firstName;
val = person.lastName;
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.adress;
val = person.adress.city;
val = person.adress.country;
val = person.getBirthYear();



let people = [
     {
    firstName : "Efe",
    lastName : "Yılmazer"

    },
   {
    firstName : "İrem",
    lastName : "Taş"
   } 
]

val = people

console.log(people);
console.log(typeof person);