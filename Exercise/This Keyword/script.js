            //This Keyword

//ES5
// let obj = {
//     category : "person",
//     names : ["efe","irem","ayşe"],
//     call : function(){
//         let obj2 = this;
//         this.names.map(function(name){
//             console.log(`${obj2.category} ${name}`);
//         });
//     }
// }

// obj.call();

//ES6
let obj = {
    category : "person",
    names : ["efe","irem","ayşe"],
    call : function(){
        this.names.map((name)=>{
            console.log(`${this.category} ${name}`);
        });
    }
}

obj.call();

