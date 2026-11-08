const mostrarPokemons = function(){

}

const obtenirPokemons = async function(){
    const urlEndPoint = "https://pokeapi.co/api/v2/pokemon"
    const resultat = await fetch (urlEndPoint);
    const dades = await resultat.json();

    for(let dada of dades){
        mostrarPokemons(dada);
    }
}