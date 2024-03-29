// const pokedex = document.getElementById('pokedex');

// const fetchPokemon = () => {
//     const promises = [];
//     for (let i = 1; i <= 1001; i++) {
//         const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//         promises.push(fetch(url).then((res) => res.json()));
//     }
//     Promise.all(promises).then((results) => {
//         const pokemon = results.map((result) => ({
//             name: result.name,
//             image: result.sprites['front_default'],
//             type: result.types.map((type) => type.type.name).join(', '),
//             id: result.id
//         }));
//         displayPokemon(pokemon);
//     });
// };

// const displayPokemon = (pokemon) => {
//     console.log(pokemon);
//     const pokemonHTMLString = pokemon
//         .map(
//             (pokeman) => `
//         <li class="card">
//             <img class="card-image" src="${pokeman.image}"/>
//             <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
//             <p class="card-subtitle">Type: ${pokeman.type}</p>
//         </li>
//     `
//         )
//         .join('');
//     pokedex.innerHTML = pokemonHTMLString;
// };

// fetchPokemon();


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

const pokedex = document.getElementById("pokemons");

console.log(pokemons)

const featchPokemon = () => {

    const promises = []
    for (let i = 1; i <= 1020; i++){
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push (fetch(url).then((response) =>  response.json()));
    
};

    Promise.all(promises).then((results => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            height: data.height,
            weight: data.weight,
            image: data.sprites["front_default"],
            type: data.types.map((type) => type.type.name). join(", ")

        }));
        console.log(results)
        displayPokemon(pokemon);
    }));



        // .then((data) => {
        //     console.log(data);
        //     const pokemon = {
                // name: data.name,
                // id: data.id,
                // image: data.sprites["front_default"],
                // type: data.types.map((type) => type.type.name). join(", ")
            // }
            // pokemon["name"] = data.name;
            // pokemon["id"] = data.id;
            // pokemon["image"] = data.sprites["front_default"];
            // pokemon["type"] = data.types.map( type => type.type.name). join(", ")
            // data.types.forEach( type => {
                //     pokemon[`type`] = pokemon[`type`] + ", " + type.type.name;
};

const displayPokemon = (pokemon) => {
    const pokeonHTMLSrtring = pokemon.map( card => `
              <div class="pokemon">
                <figure>
                  <img
                    src="${card.image}" 
                    class="pokemon__img"
                    alt="Pokemon picture"
                  />
                </figure>
                <h3 class="pokemon__name">Name: <span class="name">${card.name}</span></h3>
                <div class="id-type">
                <h4 class="pokemon__id">ID: <span class="id">${card.id}</span></h4>
                <h4 class="pokemon__type">Type: <span class="id">${card.type}</span></h4>
                </div>
                <div class="weigh__height">
                    <h4 class="pokemon__weight">Weight: <span class="weight">${card.weight}</span></h4>
                    <h4 class="pokemon__height">Height: <span class="height">${card.height}</span></h4>
                </div>
              </div>
            </div>
    `).join("");
    pokemons.innerHTML = pokeonHTMLSrtring;
    // const pokeonHTMLSrtring = pokemon.map( card => `
    // <li>
    //     <img src="${card.image}"/>
    //     <h2>${card.id}. ${card.name}</h2>
    //     <p>Type: ${card.type}</p>
    // </li>
    // `).join("");
    // pokemons.innerHTML = pokeonHTMLSrtring;
}


featchPokemon();