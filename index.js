
// // // https://pokeapi.co/api/v2/pokemon/pikachu


// // // fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
// // //     .then(response => response.json())
// // //     .then(data => console.log(data))
// // //     .catch(error => console.error(error));

// // // fetchDate();

// // // async function fetchDate() {
// // //     try {
// // //         const namePokemon = document.getElementById("pokemonName").value.toLowerCase();
// // //         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
// // //         // console.log(response)
// // //         if(!response.ok) {
// // //             throw new Error("Pokemon not found")
// // //         }
// // //         const data = await response.json();
// // //         console.log(data)
// // //         const pokemonSprite = data.sprites.front_default;
// // //         const imgElement = document.getElementById("pokemonSprite");
// // //         imgElement.src = pokemonSprite;
// // //         imgElement.style.display = "block"

// // //     }
// // //     catch(error){
// // //         console.error(error);
// // //     }


// // // }

// // // const pokemonSprites = document.querySelector(" .sprite")
// // // const pokemonName = document.querySelector(" .name")
// // // const pokemonId = document.querySelector(" .id")
// // // const pokemonType = document.querySelector(" .type")

// // // async function fetchData() {
// // //     const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
// // //     const data = await response.json();
// // //     console.log(response)
// // //     console.log(
// // //      result.map(() => 
// // //         `<div class="pokemon">
// // //         <h3 class="pokemon__name">Name:???</h3>
// // //         <h4 class="pokemon__id">ID:???</h4>
// // //         <h4 class="pokemon__type">Type:???</h4>
// // //         </div>`
// // //      )
// // //     )
// // //     // pokemonSprites.src = data.sprites.front_default;
// // //     // pokemonName.innerHTML = data.name
// // //     // pokemonId.innerHTML = data.id
// // //     // pokemonType.innerHTML = data.types.ytpe

// // // }

// // // fetchData()

// // async function rearch() {
// //    const response =  await fetch("https://pokeapi.co/api/v2/pokemon/1");
// //    const data = await response.json();
// //    const pokemonEl = document.querySelector(' .pokemon__name')
// // console.log(data)
// //    pokemonEl.innerHTML = data.map (
// //         () => `<div class="pokemon">
// //         <figure>
// //         <img src="assets/channels4_png.jpg" class="pokemon__img" alt="Pokemon Logo">
// //         </figure>
// //         <h3 class="pokemon__name">Name:???</h3>
// //         <h4 class="pokemon__id">ID:???</h4>
// //         <h4 class="pokemon__type">Type:???</h4>
// //         </div>
// //         </div>`
// //         ).join("");
// // }

// // rearch()


// const pokemonListEl = document.querySelector(" .pokemons");
// const pokemonSprites = document.querySelector(" .pokemon__img")
// const pokemonName = document.querySelector(" .name")

// fetchData()

// async function fetchData() {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
//         const data = await response.json();  
//         allPokemons = data.results[10]
//         console.log(allPokemons)
// }

const MAX_POKEMON = 151;
const listWrapper = document.querySelector( ".list-wrapper");

let allPokemons = [];

fetch(`https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`)
.then((response) => response.json())
.then((data) => {
    allPokemons = data.resulte;
    console.log(data);
    // console.log(data.results)
    // console.log(data.results[0].name)
    // console.log(data.results[0].url)
    displayPokemons(allPokemons)
});
async function fetchRedirect(id) {
    
    try {
        const [pokemon, pokemonSpecies] = await Promise.
        all([fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json()),
        fetch(`https://pokeapi.co/api/v2/pokemon-specise/${id}`)
        .then((response) => response.json()),

    ])
    return true
    }

    catch (error) {
        console.error("Failed to fetch Pokemon data before redirect");
    }
}

function displayPokemons(pokemon) {
    listWrapper.innerHTML = "";

    pokemon.forEach((pokemon) => {
        const pokemonID = pokemon.url.split("/")[6];
        const listItem = document.createElement("div");
        listItem.className = "list-item";
        listItem.innerHTML = `
            <div class="number-wrap">
                <p class="caption-fonts">#${pokemonID}</p>
            </div>
            <div class="img-wrap">
                <img src="https://raw.githubsuercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg" alt="${pokemon.name}" />
            </div>
            <div class="name-wrap">
                <p class="body3-fonts">#${pokemon.name}</p>
            </div>
            `;

            listItem.addEventListener("click", async () => {
                const success = await fetchRedirect(pokemonID);

                if(success) {
                    window.location.href = `./detail.html?id=${pokemonID}`;
                }
            });

            listWrapper.appendChild(listItem);
    });
}