            //Mouse Events

const btn = document.querySelector("#id .class");
const division = document.querySelector("#id .class");



//Click
btn.addEventListener("click",mouseCatch);
division.addEventListener("click",mouseCatch);

function mouseCatch(e){
    console.log(`event type: ${e.type}`);

    e.preventDefault();
}



//Double click
division.addEventListener("dblclick", mouseCatch);


function mouseCatch(e){
    console.log(`event type: ${e.type}`);

    e.preventDefault();
}



//Mouse down - Mouse up
division.addEventListener("mousedown",mouseCatch);
division.addEventListener("mouseup",mouseCatch);

function mouseCatch(e){
    console.log(`event type: ${e.type}`);

    e.preventDefault();
}



//Mouse enter - Mouse leave
division.addEventListener("mouseenter",mouseCatch); //HTML'deki etiketi etkiler
division.addEventListener("mouseleave",mouseCatch);

function mouseCatch(e){
    console.log(`event type: ${e.type}`);

    e.preventDefault();
}



//Mouse over - Mouse out
division.addEventListener("mouseover",mouseCatch); //HTML'deki alt elementleri de kapsar
division.addEventListener("mouseout",mouseCatch);

function mouseCatch(e){
console.log(`event type: ${e.type}`);

e.preventDefault();
}



//Mouse move
division.addEventListener("mousemove",mouseCatch);

function mouseCatch(e){
    console.log(`event type: ${e.type}`); //Mouse kordinatlarını konsola girer

    h2.textContent = `Mouse X : ${e.offsetX}
                      Mouse Y : ${e.offsetY}`; //Mouse kordinatlarını ekrana yazdırır

    e.preventDefault();
}




