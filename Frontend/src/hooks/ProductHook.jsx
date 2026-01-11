import axios from "axios"
import { useState, useEffect } from "react"

export function useProducts() {
    const[items, setItems]=useState([])
    useEffect( () => {
        const fetchData = async () =>{
            try {
                const res = await axios.get("https://mercadolibre-sajor05.onrender.com/api/productsjson")
                setItems(res.data)
            } catch (error) {
                console.log(error)
            }
        }; fetchData()
    },[])    
    return(items);
}