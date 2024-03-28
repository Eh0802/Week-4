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


const pokedex = document.getElementById("pokedex");

console.log(pokedex)

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
            image: data.sprites["front_shiny"],
            type: data.types.map((type) => type.type.name). join(", ")

        }));
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
    console.log(pokemon);
    const pokeonHTMLSrtring = pokemon.map( card => `
    <li>
        <img src="${card.image}"/>
        <h2>${card.id}. ${card.name}</h2>
        <p>Type: ${card.type}</p>
    </li>
    `).join("");
    pokedex.innerHTML = pokeonHTMLSrtring;
}


featchPokemon();