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
            console.log("Dane z API: ",response.data.name);

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
    </>
)
}
