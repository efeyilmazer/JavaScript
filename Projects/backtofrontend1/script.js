const buttons = document.querySelectorAll(".btn")
const rightcontainer = document.querySelector(".rightcontainer")

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active")
    })
})