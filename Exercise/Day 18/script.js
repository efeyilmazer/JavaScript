            //Event listener

const btn = document.querySelector("#id .class");
const btn2 = document.querySelector("#id .class");

btn.addEventListener("click",function(){
    console.log("Butona tıklandı");
}) //Butona tıklandığında konsola yazar


function btnClick(e){
    console.log("Butona tıklandı");

    e.preventdefault(); //Sayfayı refresh etmeden kaldığı yerden devam eder
}
btn.addEventListener("click",btnClick); //Aynı görevi fonksiyon adını çağırarak yapar
btn2.addEventListener("click",btnClick);

function btnClick2(e){
    console.log("2. Butona tıklandı");
    
    e.preventdefault();
}

btn.addEventListener("click",btnClick);
btn.addEventListener("click",btnClick2); //Bir butona 2 fonksiyon atar

