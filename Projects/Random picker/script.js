const tagsEl = document.querySelector("#tags")
const textarea = document.querySelector("#textarea")

textarea.focus()

textarea.addEventListener("keyup", (e)=> {
    createTags(e.target.value)
})

function createTags (index) {
    const tags = index.split(" ")
    console.log(tags)
}