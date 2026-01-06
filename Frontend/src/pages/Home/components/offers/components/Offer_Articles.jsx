import axios from "axios"
import { useState, useEffect } from "react"
import { ProductCard } from "../../../../../models/product/ProductCard"
import {Offer_carousel } from "../../../../../components/carousel/offer_carousel/Offer_carousel"

export function Offer_Articles() {
  const [items, setItems] = useState([])
  useEffect( () => {
    const fetchData = async () => {
        const res = await axios.get("http://localhost:4000/api/offersproductsjson")
        setItems(res.data)
    }; fetchData()
  }, [])
  return (
    <section className="flex justify-center p-5">
      <Offer_carousel>
        {items.map((art, i) => (
          <div
            key={i}
            className="ProductCardModels-card flex-shrink-0 w-[190px] h-[290px]"
          >
            <ProductCard product={art}/>
          </div>
        ))}
      </Offer_carousel>
    </section>
  )
}