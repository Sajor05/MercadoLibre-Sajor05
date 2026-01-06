import { useState, useEffect } from "react"
import { useAuth } from "./AuthContext"

export function CartProvider({childrens}) {
    const {isAuthenticated} = useAuth()
    if (isAuthenticated) {
        const [cantidad, setCantidad] = useState(0)
        const [items, setItems] = useState([])
        const manageCart = (product) => {
            setProducts([...products, product])
        }
        const contextValue = {
          cant : cantidad,
          items : items,
          setCantidad : setCantidad,
          setItems : setItems
        }
    }

  return (
    <h1>Hola</h1>
  )
}
