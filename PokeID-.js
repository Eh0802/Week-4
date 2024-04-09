
const pokemons = document.getElementById("pokemons");


const featchPokemon = () => {

    const promises = []
    for (let i = 1; i <= 1020; i++){
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push (fetch(url).then((response) =>  response.json()));
    
};

    Promise.all(promises).then((results => {
        const pokemons = results.map((data) => ({
            name: data.name,
            id: data.id,
            height: data.height,
            weight: data.weight,
            image: data.sprites["front_default"],
            type: data.types.map((type) => type.type.name). join(", ")
            
        }));

        pokemons.sort(function (a, b) {
            if (a.id < b.id) {
                return 1;
            }
            if (a.id > b.id) {
                return -1;
            }
            return 0;
        })

        displayPokemon(pokemons);
    }));

}


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
    
} 

function openMenu() {
    document.body.classList += " menu--open"
    
}
function closeMenu() {
    document.body.classList.remove('menu--open')
}

window.addEventListener("load", () => {
    const loading = document.querySelector(".loading");

    loading.classList.add("loader-hidden");

    loading.addEventListener("transitionend", () => {
        document.body.removeChild("loading");
    })
} )

featchPokemon();