"use client";
import { useState } from "react";
import { CustomInput } from "../Input";

export const CustomForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  // use State ktory bedzie mial informacje czy wszystkie pola sa wypelnione i jesli tak to dopiero pozwala kliknac submit
  const [isFormValid, setIsFormValid] = useState(false);

  function handleSubmit() {
    console.log(name, surname, phone);
  }
  // use Effect ktory sprawdza czy wszystkie pola sa wypelnione i jesli tak to dopiero pozwala kliknac submit
  function sendBtn() {
    // Chyba że useState zwraca wartosc to isFormValid?
    // Sprawdzanie czy wszystkie pola sa wypelnione
    // if (name && surname && phone)
    console.log("sended");
    console.log(name, surname, phone);
  }
  return (
    <>
      <CustomInput onChange={setName} value={name} placeholder="Give Name" />
      <CustomInput
        onChange={setSurname}
        value={surname}
        placeholder="Give Surname"
      />
      <CustomInput onChange={setPhone} value={phone} placeholder="Give phone" />
      {/* Na razie Send nie do klikniecia dopiero gdy wypelnione pola, disabled na false */}
      <button
        className={`h-[40px] w-[auto] ${isFormValid ? "bg-[green]" : "bg-[red]"}`}
        // disabled={!isFormValid}
        onClick={sendBtn}
        // disabled={true} wyłączenie przycisku
      >
        Send
      </button>
    </>
  );
};
