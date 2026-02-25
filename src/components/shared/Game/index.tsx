"use client";
import { useEffect, useState } from "react";
import Counter from "../Counter";

export default function Game() {
  const [counter, setCounter] = useState<number>(0);

  function increaseCounter() {
    setCounter(counter + 1);
    //Stara wartość jest wyświetlana, trzeba użyć useEffecta
    // console.log(counter);
  }

  // useEffect nasłuchuje zmian
  // console.log działa wtedy poprawnie
  useEffect(() => {
    if (counter > 9) {
      setCounter(0);
    }
    console.log(counter);
  }, [counter]);

  return (
    <div>
      {/* importujemy funkcje Counter z katalogu Counter */}
      <Counter count={counter} />
      <button className="bg-[red]" onClick={increaseCounter}>
        Incrase
      </button>
    </div>
  );
}
