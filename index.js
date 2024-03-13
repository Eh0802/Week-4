
// https://pokeapi.co/api/v2/pokemon/pikachu


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     // .then(response => console.log(response))
//     .then(response => {
        
//         if(!response.ok) {
//             throw new Error ("Pokemon not found")
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));

fetchDate();

async function fetchDate() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        // console.log(pokemonName)

        if(!response.ok) {
            throw new Error("Pokemon not found")
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"

    }
    catch(error){
        console.error(error);
    }
}