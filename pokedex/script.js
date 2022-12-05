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
    console.log(id);


}

initPokemon();