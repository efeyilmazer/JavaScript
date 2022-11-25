const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")
const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")
const toggle = document.querySelector(".toggle")

const days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months =["Jax", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener("click", (e) =>{
    const html = document.querySelector("html")
    if(html.classList.contains("dark"))  {
        html.classList.remove("dark")
        e.target.innerHTML = "Dark mode"
    }else {
        html.classList.add("dark")
        e.target.innerHTML = "Light mode"
    }
})

function setTime() {
    const time = newDate();
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const second = time.getSeconds()

    hourEl
}

setTime()