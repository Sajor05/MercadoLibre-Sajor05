import { Recommendation_carousel } from "../Recommendation_carrousel.jsx";
import { QuickAccessCard } from "../../../models/quickAccess/QuickAccessCard.jsx";
import { useState, useEffect } from "react";
import axios from "axios"

export function Quickaccess() {
  const [items, setitems] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/accessjson")
        setitems(res.data)
      } catch (error) {
        console.log(error)
      }      
    };
    fetchData();
  }, [])
  return (
    <section className="flex justify-start p-5 mx-auto max-w-screen-xl">
      <Recommendation_carousel>
        {items.map((art, i) => (
          <div
            key={i}
            className="articulos-card flex-shrink-0 w-[183px] h-[290px]"
          >
            <QuickAccessCard title={art.title} image={art.img} description={art.description} button_text={art.button_text} />
          </div>
        ))}
      </Recommendation_carousel>
    </section>
  );
}
