"use client";
import { useState } from "react";
import { PokeInput } from "../PokeI";
import axios from "axios";


export const PokeForm = () =>{
    const [pokemon, setPokemon] = useState<number>(0);
    const [pokeData, setPokeData] = useState<any>(null);

    const [isFormValid, setIsFormValid] = useState(false);
    const [loading, setLoading] = useState(false);

    function choseBtn(){
        console.log("chosen"+pokemon);
        catchPokemon();
    }

    const catchPokemon = async () =>{
        setLoading(true);
        try{
            // wywołanie api
            // w .data są dane 
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            setPokeData(response.data);
            console.log("Dane z API: ",response.data);
            console.log("Imie z API: ",response.data.name);
            console.log(response.data.stats);
            // to ilość hp
            console.log(response.data.stats[0].base_stat);
            // tekst hp czyli jakby typ 
            console.log(response.data.stats[0].stat.name);
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    } 

    return(
    <>
        <PokeInput 
            onChange={setPokemon} 
            value={pokemon} 
            placeholder="Choose number"
        />
        <button onClick={choseBtn}>Chose</button>
            {/* jeśli pokeData nie jest null to to co w nawiasie */}
        {pokeData &&(
            <>
                <h2>Name:</h2>
                <h2>{pokeData.name}</h2>
                    {/* wyświetlanie umiejetności dzięki funkcji map która działa mniej wiecej jak automatyczna pętla do tablicy */}
                    {/* trzeba było określić droge za parametrem item potem ability i name:any */}
                    {/* tworzymy klucz index dla Reacta do indentyfikacji elementów na liście */}
                    Skills:
                {pokeData.abilities.map((item: { ability: { name: any; }; }, index: number) => (<li key={index}>{item.ability.name}</li>))}
                    {/* zwrot stat */}
                    Stats:
                {pokeData.stats.map((item: any, index: number) => 
                    (<div key={index}>{item.stat.name}: {item.base_stat}</div>))}
                    Photo:
                <img 
                    src={pokeData.sprites.front_default} 
                    alt={pokeData.name} 
                />
            </>
        )}
    </>
)
}
