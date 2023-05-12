const smallCups = document.querySelectorAll(".cup-small")
const liters = document.getElementById("liters")
const percentage = document.getElementById("percentage")
const remained = document.getElementById("remained")

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => {
        updateSmallCups(idx)
        drain()
    })
})
function drain() {
    var el = document.getElementById("water")
    var original = el.style.height;
    el.style.height = `${357}px`
    el.style.width = `${70}px`
    window.setTimeout(function() { el.style.height = original }, 1800);
}

 function updateSmallCups(idx) {
    if(smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full")) {
     idx--   

    }
    smallCups.forEach((cup,idx2) => {
        if (idx2 <= idx) {
            cup.classList.add("full")
        } else {
            cup.classList.remove("full")
        }
    })
    updateBigCup()
}

function updateBigCup() {
    setTimeout(function (){
        const fullCups = document.querySelectorAll(".full").length
        const totalCups = smallCups.length
    
        if (fullCups=== 0) {
            percentage.style.visibility = "hidden"
            percentage.style.height = 0
        } else {
            percentage.style.visibility = "visible"
            percentage.style.height  = `${fullCups / totalCups * 330}px`
            percentage.innerText = `${fullCups / totalCups * 100}%`
        }
        if(totalCups === fullCups) {
            remained.style.visibility = "hidden"
            remained.style.height = 0
        } else {
            remained.style.visibility = "visible"
            liters.innertext = `${2 - (250 * fullCups / 1000)}Lt`
        }
    },100);
}
