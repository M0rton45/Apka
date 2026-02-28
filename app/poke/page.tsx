// TODO
// formularz z jedynm inputem i przyciskiem submit
// w inpucie wybieramy tylko cyfre (w jakimś tam zakresie)
// po kliknięciu submit za pomocą API pobieramy dane o wybranym pokemonie
// następnie wyświetlamy te dane na stronie (np. obrazek, nazwa, typ, statystki, itd.)

import { CustomForm } from "@/src/components/Form"
import { PokeForm } from "@/src/components/PokeF";

// Dwa kontenery, jeden do forma inputa z "przepisem" 
// i drugi do wyświetlania inputa itd w jedynm stylu 

export default function Home(){
    return(
      console.log("poke page"),
      <div>
        {/* PokeI- poke input | PokeF - poke form */}
        <PokeForm/>
      </div>
    );
}