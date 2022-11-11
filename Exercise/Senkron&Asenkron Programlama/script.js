            //Set Timeout

let a = document.querySelector(".redBox");
let b = document.querySelector(".greenBox");
let c = document.querySelector(".blueBox");

const first = () => {
    setTimeout(() => {
        a.style.backgroundColor = "red";
    }, 5000);
}

const second = () => {
    setTimeout(() => {
        b.style.backgroundColor = "yellow";
    }, 6000);
}
const third = () => {
    setTimeout(() => {
        c.style.backgroundColor = "green";
    }, 7000);
}

first();
second();
third();