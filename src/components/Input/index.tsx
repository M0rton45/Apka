"use client";

import { CustomForm } from "../Form";

// Interface w ktorym okreslamy skladniki(parametry) dla inputa
// value - wartosc inputa, onChange - odczyt na biezaco co jest wpisywane
// placeholder - napis w tle inputa

interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

//  export CustomInputa z Forma
// przekazujemy już zdefiniowane parametry z Forma do Inputa
// i wyświetla się ona na stronie
// mozemy tu stylowac na raz wszystkie inputy
// TODO
// Ostylowanie inputow, i btn jak na figmie
export const CustomInput = ({
  value,
  onChange,
  placeholder,
}: CustomInputProps) => {
  return (
    <input
      className="bg-[#366] w-[100px] "
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    ></input>
  );
};
