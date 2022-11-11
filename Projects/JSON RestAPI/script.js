document.querySelector("#getAll").addEventListener("click", getAll);

function getAll(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://reqres.in/api/users?page=2",true);
    xhr.onload = function(){
        if(this.status === 200){
            let info = JSON.parse(this.responseText);
            console.log(this.responseText);
            let html = "";

            info.data.forEach(Element=>{
                
            });
        }
    }
    xhr.send();
}