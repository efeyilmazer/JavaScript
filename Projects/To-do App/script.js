//Selectors
const input = document.querySelector("#add");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

//Eventlistener
btn.addEventListener("click",btnClick);
list.addEventListener("click",listClick);

//functions

function btnClick(){
  let txt = input.value;
  if(txt=="") {
  alert("Bir şeyler yazmalısın!");
  }
  else {
    li = document.createElement("li");
    li.classList.add("element-group-list-item");
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    input.value = "";
  }
}

function listClick(e){
  if(e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
}