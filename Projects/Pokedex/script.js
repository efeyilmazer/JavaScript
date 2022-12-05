const searchInput = document.querySelector("#poke-input")
const searchBtn = document.querySelector(".btn-search")
const pokeContainer = document.querySelector(".poke-container")

const pokeCount = 151;

const initPokemon = async () => {
    for(let i = 1; i <= pokeCount; i ++) {
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
    let res = await fetch(url)
    let data = await res.json();
    createPokemonBox(data);
};
const createPokemonBox = (pokemon) => {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart (3, "0");
    const weight = pokemon.weight;
    const type = pokemon.types[0].type.name;

    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("poke-box");

    pokemonEl.innerHTML = `
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${name} image">
    <h4 class="poke-name">${name}</h4>
    <p class="poke-id">#${id}</p>
    <p class="poke-weight">${weight} Kg</p>
    <p class="poke-type">Type: ${type}</p>
    `;

    pokeContainer.appendChild(pokemonEl)
};



initPokemon();

searchInput.addEventListener("input", function(e){
    const pokeNames = document.querySelectorAll(".poke-name")
    const search = searchInput.value.toLowerCase()

    pokeNames.forEach(pokeName => {
        pokeName.parentElement.style.display = "block";

        if(!pokeName.innerHTML.toLowerCase().includes(search)){
            pokeName.parentElement.style.display = "none";
        }
    })

});