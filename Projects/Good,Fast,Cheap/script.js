const toggles = document.querySelectorAll(".toggle")
const good = document.querySelector("#good")
const cheap = document.querySelector("#cheap")
const fast = document.querySelector("#fast")

toggles.forEach((toggle) => {
    toggle.addEventListener("change", (e) => {
        doTheTrick(e.target)
    })
})

function doTheTrick(TheClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === TheClickedOne) {
            fast.checked = false
        }
        if(cheap === TheClickedOne) {
            good.checked = false
        }
        if(fast === TheClickedOne) {
            cheap.checked = false
        }
    }
}