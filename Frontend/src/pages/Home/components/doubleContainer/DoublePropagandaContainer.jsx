import { PropagandaCard } from "../../../../models/propaganda/PropagandaCard"
import { useEffect,useState } from "react"
import axios from "axios"

export function DoublePropagandaContainer() {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://mercadolibre-sajor05.onrender.com/api/propagandajson")
        const primerosDos = res.data.slice(0,2)
        setData(primerosDos)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])
  if (!data) return <div>Cargando...</div>
  return (
    <div className="container-doblepropaganda flex text-white justify-center gap-5">
        <PropagandaCard
            img={data[0]?.img}
            header_text={data[0]?.header_text}
            oferta={data[0]?.oferta}
            button_text={data[0]?.button_text}
            color={data[0]?.color}/>
        <PropagandaCard
            img={data[1]?.img}
            header_text={data[1]?.header_text}
            oferta={data[1]?.oferta}
            button_text={data[1]?.button_text}
            color={data[1]?.color}/>
    </div>
  )
}