const panels = document.querySelectorAll(".panel")

panels.forEach((panel)=> {
    panel.addEventListener("click", ()=> {
        removeClassses()
        panel.classList.add("active")
    })
})

function removeClassses() {
    panels.forEach((panel) => {
        panel.classList.remove("active")
    })
}