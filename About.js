


const pokemonSprites = document.querySelector(" .pokemin__img")
const pokemonName = document.querySelector(" .name")
const pokemonId = document.querySelector(" .id")
const pokemonType = document.querySelector(" .type")

async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const data = await response.json();
    console.log(data)

    pokemonSprites.src = data.sprites.front_default;
    pokemonName.innerHTML = data.name
    pokemonId.innerHTML = data.id
    pokemonType.innerHTML = data.types.ytpe

}

fetchData()

// console.log('hello')

// fetchDate();

// async function fetchDate() {
//     try {
//         const namePokemon = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
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

//     }
//     catch(error){
//         console.error(error);
//     }


// }