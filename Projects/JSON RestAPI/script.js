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
                html += 
                `
                <div class="card">
                <div class="card-name">
                ${Element.first_name}</div>
                <div class="card-email">
                ${Element.email}</div>
                <div class="card-picture">
                    <img src="${Element.avatar}" alt="" />
                </div>
            </div>`
            });
            document.querySelector("#placeholder").innerHTML = html;
        }
    }
    xhr.send();
}