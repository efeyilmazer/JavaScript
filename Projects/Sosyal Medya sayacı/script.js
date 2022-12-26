const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
    counter.innerText = 0

    const updateCounter = () => {
        const c = +counter.innerText
        const target = +counter.getAttribute("data-target")

        const increment = target / 100
        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }
    }
    updateCounter()
})