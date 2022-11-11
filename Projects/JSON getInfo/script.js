document.querySelector("#getInformation").addEventListener("click",loadInformation);

function loadInformation(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","information.json",true);
    xhr.onload = function(){
        // if(this.status === 200){
        //     console.log(this.responseText)
        //     console.log(JSON.parse(this.responseText));
        // }
        // else {
        //     console.log("Başarısız")
        // }
        let info = JSON.parse(this.responseText);

        let html = 
        `<tr>
            <td>${info.firstName}</td>
            <td>${info.lastName}</td>
            <td>${info.age}</td>
        </tr>`;

        document.querySelector("#table").innerHTML = html;
    }
    xhr.send();
}

document.querySelector("#getInformations").addEventListener("click",loadInformations);

function loadInformations(){
    const xhr = new XMLHttpRequest;
    xhr.open("GET","information.json",true);
    xhr.onload = function(){
        let info = JSON.parse(this.responseText);
        let html = "";
        info.forEach(Element =>{
           html += 
        `<tr>
            <td>${Element.firstName}</td>
            <td>${Element.lastName}</td>
            <td>${Element.age}</td>
        </tr>`;
        });
        document.querySelector("table").innerHTML = html;
    }
    xhr.send();
}