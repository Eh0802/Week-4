

const pokemonSprites = document.querySelector(" .pokemon__img")
const pokemonName = document.querySelector(" .name")
const pokemonId = document.querySelector(" .id")
const pokemonWeight = document.querySelector(" .weight")
const pokemonHeight = document.querySelector(" .height")

fetchPokedex();

async function fetchPokedex() {
    try {
        const namePokemon = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
        console.log(response)
        if(!response.ok) {
            throw new Error("Pokemon not found")
        }
        const data = await response.json();
        console.log(data)
        pokemonName.innerHTML = data.name;
        pokemonId.innerHTML = data.id;
        pokemonSprites.src = data.sprites.front_default;
        pokemonWeight.innerHTML = data.weight
        pokemonHeight.innerHTML = data.height

    }
    catch(error){
        console.error(error);
    }


}


