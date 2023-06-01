const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", scroll)
scroll()

function scroll() {
    const triggerBottom = window.innerHeight / 5*4

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top
        
        if(boxTop < triggerBottom) {
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    })
}









