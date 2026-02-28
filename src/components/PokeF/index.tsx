"use client";
import { useState } from "react";
import { PokeInput } from "../PokeI";


export const PokeForm = () =>{
    const [pokemon, setPokemon] = useState<number>(0);

    const [isFormValid, setIsFormValid] = useState(false);
 
    function choseBtn(){
        console.log("chosen"+pokemon);        
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
