            //Error handling , Try Catch

//RefferenceError
//TypeError
//SyntaxError
//UriError



try {
    console.log(newFunction());
}

catch(e){
     console.log(e);
     console.log(e.name);
}

let person = {
    name : "Efe"
}

try {
    console.log(person.name);
    if(!person.age){
        throw new Error("Person has no age");
    }
    console.log(NewFunction());
}

catch(e){
    console.log(e);
    console.log(e.name);
}

finally{
    console.log("finally block");
}