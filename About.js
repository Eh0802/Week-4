



const pokemonName = document.querySelector(" .name")
const pokemonId = document.querySelector(" .id")
const pokemonType = document.querySelector(" .type")

async function fetchData() {

    const namePokemon = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    const data = await response.json();

    console.log(response)
    console.log(data)

    const pokemonSprites = document.querySelector(" .pokemon__img")
    pokemonSprites.src = data.sprites.front_default
    pokemonName.innerHTML = data.name
    pokemonId.innerHTML = data.id
    pokemonType.innerHTML = data.types

}

fetchData()


// fetchDate();

// async function fetchDate() {
//     try {
//         const namePokemon = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
//         console.log(response)
//         if(!response.ok) {
//             throw new Error("Pokemon not found")
//         }
//         const data = await response.json();
//         console.log(data)
//         const pokemonSprite = data.sprites.front_default;
//         const imgElement = document.getElementById("pokemonSprite");
//         imgElement.src = pokemonSprite;
//         imgElement.style.display = "block"
//         const pokemonId = document.getElementById("id")

//     }
//     catch(error){
//         console.error(error);
//     }


// }

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
    //         const pokemon = data.results
    //         const h1Elemnt = document.getElementById("pokemonName");
    //         h1Elemnt.innerHTML = pokemon
        
    //     }

    //     catch(error){
    //         console.error(error)
    //     }
    // }

