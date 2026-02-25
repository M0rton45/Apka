"use client";

import { CustomForm } from "../Form";

interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

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
