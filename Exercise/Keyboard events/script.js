            //Keyboard events

const input = document.querySelector("#id .class");


input.addEventListener("keydown",keyCatch);
input.addEventListener("keyup",keyCatch);
input.addEventListener("keypress",keyCatch); //Aynı çalışır
input.addEventListener("focus",keyCatch);
input.addEventListener("blur",keyCatch2)

function keyCatch(e){
    console.log(`event type: ${e.type}`); //Klavyedeki tuşa tıklayıp bırakana kadar çalışır
    console.log(`event type: ${e.keyCode}`); //Keycode'yi konsola yazdırır
    console.log(`value : ${e.target.value}`); //Girilen harfi konsola yazar
    e.target.style.backgroundColor = "blue";
}
function keyCatch2(e){
    e.target.style.backgroundColor = "white";
}

