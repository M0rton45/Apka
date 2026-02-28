"use client";
import { use, useEffect, useState } from "react";
import { CustomInput } from "../Input";


// Z tego co kumam to Form jest jakby kontenerem ktory tworzy cala logike i wzor
// a Input jest kontenerem ktory odpowiada za wyswietlanie inputa i przekazywanie informacji do Forma
// Opisuje sie jakby składniki(parametry) inputow w Formie jako te customyInputy
// Potem tworzy sie interface żeby okreslić składniki(parametry)

export const CustomForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");


  // use State ktory bedzie mial informacje czy wszystkie pola sa wypelnione i jesli tak to dopiero pozwala kliknac submit
  const [isFormValid, setIsFormValid] = useState(false);

  //Nasłuchuje czy formularz jest wypelniony
  useEffect(() => {
    formValid();
  }, [name, surname, phone]);

  //Funkcja sprawdzajaca czy pola sa wypelnione
  function formValid() {
    console.log("form valid");
    if (name && surname && phone) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }

  // function handleSubmit() {
  //   console.log(name, surname, phone);
  // }
  // use Effect ktory sprawdza czy wszystkie pola sa wypelnione i jesli tak to dopiero pozwala kliknac submit
  // Funckja zwracająca informacje z inputow formularza
  function sendBtn() {
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
            // Warunek sprawdzajacy czy walidacja pomyślna(zmiana kolorow)
            className={`h-[40px] w-[auto] ${isFormValid ? "bg-[green]" : "bg-[red]"}`}
            // Wyłączenie przycisku dopóki formularz nie bedzie wypelniony
            disabled={!isFormValid}
            onClick={sendBtn}
          >
            Send
          </button>
        </>
    );
};
