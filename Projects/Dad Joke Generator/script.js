const jokeEl = document.querySelector("#joke")
const jokeBtn = document.querySelector("#jokeBtn")

jokeBtn.addEventListener("click", generateJoke)

generateJoke()

function generateJoke() {
  const config = {
    headers: {
    Accept: "application/json",
    },
  }




  fetch("https://icanhazdadjoke.com", config)
  .then(res => res.json())
  .then(data => {
    jokeEl.innerHTML = data.joke
  })
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
