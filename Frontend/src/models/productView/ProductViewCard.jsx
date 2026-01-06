import axios from "axios"
import "./ProductView.css"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemBuy } from "./components/ItemBuy/ItemBuy.jsx"
import {ProductGallery} from "./components/ProductGallery.jsx"
import { Navbar } from "../../components/Extends/navbar/Navbar"

const Offercontainer = () => {
  return(
        <div className="flex justify-center gap-0.5 uppercase font-bold bg-[#2968c8] text-white text-[11px] w-37 mt-3">
          <span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" className="w-4 h-4">
                <path d="M8 16L16 8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM17 15C17 16.1046 16.1046 17 15 17C13.8954 17 13 16.1046 13 15C13 13.8954 13.8954 13 15 13C16.1046 13 17 13.8954 17 15ZM11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z" stroke="#ffffff" strokeWidth="1.5"></path>
            </svg>
          </span>
          <span>oferta imperdible</span>
        </div> 
  )
}

export function ProductViewCard () {
  
  const [item, setItem] = useState(null)
  const params = useParams()

  useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/productsjson")
        const productos = res.data
        const producto = productos.find(e => e.id == params.id)
        setItem(producto)
      } catch (error) {
        console.log(error)        
      }
    }; fetchData()
  },[params.id])
  
  if (!item) {
    return (
      <>
        <Navbar/>
        <div>Cargando producto...</div>
      </>
    )
  }
  const current_price = item.isOffer ? (item.price - (item.price * item.offer) / 100) : item.price
  
  return (
    <div>
      <Navbar/>
      <main className="flex justify-center">
        <div className="item-detail-container bg-white mt-21 h-500 w-320 px-10">
          <div className="grid grid-cols-[851px_310px]">
            <section className="item-detail grid grid-cols-2 mt-10">
              <ProductGallery images = {item.images}/>
              <div className="ml-4">
                <div className="flex flex-col mt-5">
                  <div className="grid grid-cols-2">
                    <p className="text-[12px] text-gray-400">Nuevo | +100 vendidos</p>
                    <i className="fas fa-heart"></i>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <div className="uppercase bg-[#f73] text-white text-[10px] w-20 text-center">
                      <span className="font-bold">mas vendidos</span>
                    </div>
                    <div className="text-[10px] text-blue-400">5to mas vendido en {item.category}</div>
                  </div>
                  <div className="w-100 text-2xl font-bold mt-3">
                    {item.title}
                  </div>
                  <Offercontainer/>
                  <section className="item-detail-price-container">
                    <div className="mt-4 text-gray-400 text-[18px]">{item.isOffer ? <s>${item.price}</s> : ""}</div>
                    <div className="text-4xl">${current_price}</div>
                  </section>
                  <section>
                    <p className="font-bold">Lo que tenes que saber de este producto</p>
                    <ul>
                      {item.details.map((detail, index)=>(
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </section>
            <ItemBuy item={item}/>         
          </div>

        </div>
      </main>    
    </div>
  )
}