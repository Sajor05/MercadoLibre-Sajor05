import { useState, useEffect } from "react"
import { useAuth } from "./AuthContext"

export function CartContext() {
    const {isAuthenticated} = useAuth()
    if (isAuthenticated) {
        const [products, setProducts] = useState([])
        const manageCart = (product) => {
            setProducts([...products, product])
        }        
    }

  return (
    <h1>Hola</h1>
  )
}
