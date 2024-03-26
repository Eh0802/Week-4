



// const pokemonName = document.querySelector(" .name")
// const pokemonId = document.querySelector(" .id")
// const pokemonType = document.querySelector(" .type")

// async function fetchData() {

//     const namePokemon = document.getElementById("pokemonName").value.toLowerCase();
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
//     const data = await response.json();

//     console.log(response)
//     console.log(data)

//     const pokemonSprites = document.querySelector(" .pokemon__img")
//     pokemonSprites.src = data.sprites.front_default
//     pokemonName.innerHTML = data.name
//     pokemonId.innerHTML = data.id
//     pokemonType.innerHTML = data.types[0]

// }

// fetchData()

const pokemonSprites = document.querySelector(" .pokemon__img")
const pokemonName = document.querySelector(" .name")
const pokemonId = document.querySelector(" .id")
const pokemonWeight = document.querySelector(" .weight")
const pokemonHeight = document.querySelector(" .height")

fetchDate();

async function fetchDate() {
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
        pokemonSprites.src = data.sprites.front_shiny;
        pokemonWeight.innerHTML = data.weight
        pokemonHeight.innerHTML = data.height

    }
    catch(error){
        console.error(error);
    }


}

    // search()

    // async function search() {

    //     try {
    //         const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    //         console.log(response)

    //         if(!response.ok){
    //             throw new Error("Pokemon Not Found")
    //         }

    //         const data = await response.json();
    //         console.log(data)
    //         const pokemon = data.results[]
    //         const h1Elemnt = document.getElementById("pokemonName");
    //         h1Elemnt.innerHTML = pokemon.name
        
    //     }

    //     catch(error){
    //         console.error(error)
    //     }
    // }

