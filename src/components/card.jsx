
import { useEffect } from "react"
export default function Card({pokemonName, clickFunc}){
    
    useEffect(() => {
        async function getPokemonData(){

            try{
                let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

                if(!response.ok){
                    throw new Error('Could not load resource')
                }

                let data = await response.json();
                let imageURl = data.sprites.front_shiny;

                let cardNo = document.querySelector("[data-name=" + CSS.escape(pokemonName) + "]");
                cardNo.src = imageURl;
            }
            catch(error){
                console.log(error)
            }

        }

        getPokemonData();
    }, [pokemonName]);
    return(
        <button id = {pokemonName} className="card" onClick={()=>clickFunc(pokemonName)}>
            <img data-name = {pokemonName}></img>
            {pokemonName}
        </button>
    )
}

