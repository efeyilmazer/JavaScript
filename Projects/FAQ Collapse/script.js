const toggleBtn = document.querySelectorAll(".faq-toggle")

toggleBtn.forEach(btn => {
    btn.addEventListener("click", ()=> {
        btn.parentNode.classList.toggle("active")
    })
})