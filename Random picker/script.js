const tagsEl = document.querySelector("#tags")
const textarea = document.querySelector("textarea")

textarea.focus()
textarea.addEventListener("keyup" , (e) => {
    console(e.target.value)
})