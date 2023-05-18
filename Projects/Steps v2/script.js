const progress = document.querySelector("#progress")
const next = document.querySelector("#next")
const prev = document.querySelector("#prev")
const circles = document.querySelectorAll(".circle")

let currentActive = 1

next.addEventListener("click", ()=> {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

prev.addEventListener("click", ()=> {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }
    update()
})

function update() {
    progress.style.width = (currentActive -1) / (circles.length -1) * 100 + "%"

    circles.forEach((circle,idx) => {
        if(currentActive > idx) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}