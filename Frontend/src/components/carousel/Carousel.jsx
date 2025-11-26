import { useState, useEffect } from "react";
import { Right_button } from "./main_Carrousel/components/Right_button.jsx";
import { Left_button } from "./main_Carrousel/components/Left_button.jsx";

export function Carousel({ children: slides }) {
  //Curr => actual, setCur => Actualiza el Curr
  const [curr, setCurr] = useState(0);

  /*-------------------
  -- A N T E R I O R --
  ---------------------
  Si estamos en la primera imagen y le damos a la anterior (prev)
  entonces va hacia la ultima (slides.length - 1), si no estamos en la primera (osea curr > 0)
  muestra la imagen que esta en curr - 1*/
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  /*---------------------
  -- S I G U I E N T E --
  -----------------------
  Si estamos en la ultima imagen (slides.length - 1) y le damos a la siguiente (next)
  entonces va hacia la primera imagén (la posición 0), si no solo suma a curr 1 (se muestra la siguiente imagen)*/
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  /*-----------------------------
  -- A U T O S I G U I E N T E --
  -----------------------------*/
  useEffect(() => {
    const id = setTimeout(
      () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)),
      8000
    );
    return () => clearTimeout(id);
  }, [curr, slides.length, 8000]);

  return (
    <>
      <div className="overflow-x-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Left_button onClick={prev}></Left_button>
          <Right_button onClick={next}></Right_button>
        </div>
      </div>
    </>
  );
}
