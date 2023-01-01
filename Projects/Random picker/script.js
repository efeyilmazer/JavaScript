const textarea = document.querySelector("#textarea")
const tagsEl = document.querySelector("#tags")

textarea.focus()

textarea.addEventListener("keyup", (e)=> {
    createTags(e.target.value)

    if( e.key === "Enter") {
        e.target.value = ""
        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(" ").filter(tag => tag.trim() !== "").map(tag => tag.trim())
    console.log(tags)
    tagsEl.innerHTML = ""

    tags.forEach(tag => {
        const tagEl = document.createElement("span")
        tagEl.classList.add("tag")
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 30
    const interval = setInterval(()=> {
        const randomTag = pickRandomTag()
    }, 100);
}

function pickRandomTag() {
    const tags = document.querySelector(".tag")
}