
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



// async function fetchData() {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
//     const pokemonName = await response.json();
//     console.log(
//     pokemonName.map(
//         (pokemon) => `<div class="container">
//     <img src="" alt="sprites">
//     <h3 class="name">name:</h3>
//     <h4 class="id">id:</h4>
//     <h4 class="types">types:</h4>` 
//     )
//         .join("")
//     );

// }

// fetchData();