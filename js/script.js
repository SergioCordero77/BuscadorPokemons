const cardContainer = document.querySelector("#pokemons-container");

const mostrarPokemons = async function(dada){
    // Carta del Pokemon
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");

    // Nom Pokemon
    const titolNom = document.createElement("h2");
    const nomPokemon = dada.name;
    titolNom.textContent = nomPokemon

    // Obtenim la informació completa del Pokemon
    const resultat = await fetch(dada.url);
    const dadesPokemon = await resultat.json();

    // Imatge del Pokemon
    const imatgePokemon = document.createElement("img");
    imatgePokemon.src = dadesPokemon.sprites.back_shiny;

    // Botó 'Detall'
    const botoDetall = document.createElement("button");
    botoDetall.textContent = "Detall"

    // Fiquem info del pokemon a la tarjeta
    pokemonCard.appendChild(titolNom);
    pokemonCard.appendChild(imatgePokemon);
    pokemonCard.appendChild(botoDetall);

    // Fiquem la tarjeta al contenidor
    cardContainer.appendChild(pokemonCard);

}

const obtenirPokemons = async function(){
    const urlEndPoint = "https://pokeapi.co/api/v2/pokemon"
    
    // Obtenim dades del EndPoint
    const resultat = await fetch (urlEndPoint);
    const dades = await resultat.json();

    // For per agafar un a un els pokemons
    for(let dada of dades.results){
        await mostrarPokemons(dada);
    }
}

//Executem la funció
obtenirPokemons();