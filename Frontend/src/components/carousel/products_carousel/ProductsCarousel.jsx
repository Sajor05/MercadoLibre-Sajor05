import axios from "axios"
import { useState, useEffect } from "react"
import { Recommendation_carousel } from "../Recommendation_carrousel"

export function CarCarousel() {

  const[items, setItems]=useState([])
  useEffect( () => {
    const fetchData = async () =>{
        try {
            const res = await axios.get("https://mercadolibre-sajor05.onrender.com/api/productsjson")
            const categoryProducts = res.data.filter((e) => e.category.principalCategory === "Accesorios para Vehículos")
            setItems(categoryProducts)
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
            className="ProductCardModels-card flex-shrink-0 w-[190px] h-[290px]"
          >
            <ProductCard product={art}/>
          </div>
        ))}
      </Recommendation_carousel>
    </section>
  )
}