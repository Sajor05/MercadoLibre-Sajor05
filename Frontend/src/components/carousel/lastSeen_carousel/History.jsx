import axios from "axios";
import { useState, useEffect } from "react";
import { Recommendation_carousel } from "../Recommendation_carrousel.jsx";


export function History() {
  const [items, setItems] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/productsjson")
        setItems(res.data)        
      } catch (error) {
        console.log(error)
      }
    }; fetchData()
  },[])
  return (
      <section className="flex justify-center p-5">
        <Recommendation_carousel>
          {items.map((art, i) => (
            <div
              key={i}
              className="articulos-card flex-shrink-0 w-[190px] h-[290px]"
            >
              <ProductCard product={art}/>
            </div>
          ))}
        </Recommendation_carousel>
      </section>
  );
}
