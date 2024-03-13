// http://www.omdbapi.com/?i=tt3896198&apikey=59b1b3f9



async function fetchData() {}

//     try{
//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//         if(!response.ok){
//             throw new Error("can't find that Pokemon")
//         }

//         const data = await response.json();
//         const pokemonSprites = data.sprites.front_default;
//         const imgElement = document.getElementById("pokemonSrite");

//         imgElement.src = pokemonSprites;
//         imgElement.style.display  = "block";
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// use MobaGuides\MobileLegendsApi\MobileLegends;
// use MobaGuides\MobileLegendsApi\Fetchers\Hero;

// $hero = MobileLegends::make(Hero::class);
// var_dump($hero->all());

fetch ("https://anime-facts-rest-api.herokuapp.com/api/v1/:anime_name")
    .then(response => console.log(response))
    .catch(error => console.error(error));