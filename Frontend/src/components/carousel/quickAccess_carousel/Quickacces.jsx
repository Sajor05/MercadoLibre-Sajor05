import { Recommendation_carousel } from "../Recommendation_carrousel.jsx";
import { QuickAccessCard } from "../../../models/quickAccess/QuickAccessCard.jsx";
import { useState, useEffect } from "react";
import "./prueba.css"
import axios from "axios"

export function Quickaccess() {
  const [items, setItems] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://mercadolibre-sajor05.onrender.com/api/accessjson")
        setItems(res.data)
      } catch (error) {
        console.log(error)
      }      
    };
    fetchData();
  }, [])
  return (
      <section className="quickacces-carousel">
        <Recommendation_carousel>
          {items.map((art) => (
              <QuickAccessCard title={art.title} image={art.img} description={art.description} button_text={art.button_text} />
          ))}
        </Recommendation_carousel>        
      </section>

  );
}
