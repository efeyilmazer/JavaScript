const labels = document.querySelectorAll(".form-control label")

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split("")
    .map((letters, idx) => `<span style="transition-delay:${idx * 50}ms">${letters}</span>`)
    .join("")
})






















