/* ==========================================================================
   Declaració de variables
   ========================================================================== */

const contenidorDades = document.querySelector("#container-detalls");
const botoTornar = document.querySelector("#btn-tornar");

/* ==========================================================================
   Funcions
   ========================================================================== */

const recuperarPokemon = async function name() {
    
    // Recuperamos el parámetro name de la URL
    const parametres = new URLSearchParams(window.location.search);

    const nomPokemon = parametres.get("name");

    console.log(nomPokemon);

    const urlEndPoint = `https://pokeapi.co/api/v2/pokemon/${nomPokemon}`

    try{
        const resultat = await fetch(urlEndPoint);

        if (!resultat.ok) {
            throw new Error("Error al carregar les dades");
        }

        const dada = await resultat.json();

        // Títol nom pokémon
        const titolNom = document.createElement("h2");
        titolNom.textContent = dada.name;

        // Imatge pokemon
        const imgPokemon = document.createElement("img");
        imgPokemon.src = dada.sprites.front_shiny;

        // Pes i alçada
        const pesAlcada = document.createElement("p");
        pesAlcada.textContent = `Pes: ${dada.weight} | Alçada: ${dada.height}`

        // Taula amb habilitats
        const habilitats = dada.abilities;

        const taulaHabilitats = document.createElement("table");

        for(let i = 0; i<habilitats.length+1; i++){
            const fila = document.createElement("tr");
            const col1 = document.createElement("th");
            const col2 = document.createElement("th");

            if(i===0){
                col1.textContent = "ID"
                col2.textContent = "Habilitat"

                col1.classList.add("negreta");
                col2.classList.add("negreta");
            }
            else{
                col1.textContent = habilitats[i-1].ability.name;
                col2.textContent = habilitats[i-1].ability.name;
            }

            fila.append(col1, col2)
            taulaHabilitats.append(fila)
        }
        
        // Fiquem tota la info al contenidos
        contenidorDades.append(titolNom, imgPokemon, pesAlcada, taulaHabilitats);

        console.log(resultat.status);
    }
    catch(error){
        console.log(resultat.status);
        console.log(error.message);
    }
}

//Executem
recuperarPokemon();