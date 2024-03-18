
// https://pokeapi.co/api/v2/pokemon/pikachu


// fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// fetchDate();

// async function fetchDate() {
//     try {
//         const namePokemon = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
//         // console.log(response)
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

// const pokemonSprites = document.querySelector(" .sprite")
// const pokemonName = document.querySelector(" .name")
// const pokemonId = document.querySelector(" .id")
// const pokemonType = document.querySelector(" .type")

// async function fetchData() {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
//     const data = await response.json();
//     console.log(response)
//     console.log(
//      result.map(() => 
//         `<div class="pokemon">
//         <h3 class="pokemon__name">Name:???</h3>
//         <h4 class="pokemon__id">ID:???</h4>
//         <h4 class="pokemon__type">Type:???</h4>
//         </div>`
//      )
//     )
//     // pokemonSprites.src = data.sprites.front_default;
//     // pokemonName.innerHTML = data.name
//     // pokemonId.innerHTML = data.id
//     // pokemonType.innerHTML = data.types.ytpe

// }

// fetchData()

async function rearch() {
   const response =  await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
   const data = await response.json();
   const pokemonEl = document.querySelector(' .pokemon')
console.log(data)
   pokemonEl.innerHTML = data.map (
        () => `<div class="pokemon">
        <figure>
        <img src="assets/channels4_png.jpg" class="pokemon__img" alt="Pokemon Logo">
        </figure>
        <h3 class="pokemon__name">Name:???</h3>
        <h4 class="pokemon__id">ID:???</h4>
        <h4 class="pokemon__type">Type:???</h4>
        </div>
        </div>`
        ).join("");
}

rearch()