let modalOpen = document.querySelector("#open");
let modal = document.querySelector(".modal");
let modalForm = document.querySelector("#form");
let ModalClose = document.querySelector("#close");

modalOpen.addEventListener("click",
function(){
  console.log("clicked");
  modal.style.display = "flex";
  setTimeout(function(){
    modalForm.style.left ="50%";
}, 0);
modalOpen.style.display ="none";
});

ModalClose.addEventListener("click", function(){
  modal.style.display = "none";
});

