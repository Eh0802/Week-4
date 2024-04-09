

const pokemonSprites = document.querySelector(" .pokemon__img")
const pokemonName = document.querySelector(" .name")
const pokemonId = document.querySelector(" .id")
const pokemonType = document.querySelector(" .pokemon__type")
const pokemonWeight = document.querySelector(" .weight")
const pokemonHeight = document.querySelector(" .height")

searchPokemon();

async function searchPokemon() {
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
        pokemonSprites.src = data.sprites['front_default'];
        pokemonWeight.innerHTML = data.weight
        pokemonHeight.innerHTML = data.height
        pokemonType.innerHTML = data.types.map((type) => type.type.name)

    }
    catch(error){
        console.error(error);
    }

    const seachLoading = document.querySelector(' .loading__search');
            seachLoading.classList += " search__loading-complete"

    setTimeout(() => {
        seachLoading.classList.remove("search__loading-complete")
    }, 1000);

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


