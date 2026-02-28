// tu bedzie PokeInput potem zainportowac go do PokeForma
"use client";

interface PokeInputProps{
    value: number;
    onChange: (value:number) => void;
    placeholder?: string;
}

export const PokeInput = ({
    value,
    onChange,
    placeholder,
}: PokeInputProps)=>{
    return(
        <input 
        type="number"
         value={value} 
        // Number bo typ jest number domyślnie działa tylko na string
         onChange={(e) => onChange(Number(e.target.value))} 
        placeholder={placeholder}></input>
    );
};