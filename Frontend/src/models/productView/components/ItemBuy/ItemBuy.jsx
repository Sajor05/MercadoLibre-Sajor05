import "../css/ItemBuy.css"
import { BuyNowButton } from "./components/BuyNowButton"
import { AddCartButton } from "./components/AddCartButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

//P R I N C I P A L
export const ItemBuy = ({item}) => {
  return (
        <section className="item-buy border-1 border-gray-300 rounded-lg mt-6">
            <div className="flex flex-col px-4 py-5">
                <FreeDelivery/>
                <ItemStockContainer item={item}/>
                <div className="buy-buttons flex flex-col mt-10">
                    <BuyNowButton product={item}/>
                    <AddCartButton product={item}/>
                </div>
            </div>
        </section>   
  )
}

const FreeDelivery = () => {
    return(
            <div className="free-delivery-container">
                <div className="free-delivery-title text-[16px]">
                    <span className="free-delivery-text text-[#00A650]">Llega gratis</span> por ser tu primera compra
                </div>
                <div>
                    <a className="text-blue-500 text-sm">Más detalles y formas de entrega</a>
                </div>
                <div className="free-delivery-title text-[16px]">
                    <span className="free-delivery-text text-[#00A650]">Retirá gratis</span> entre el jueves y el martes en correo y otros puntos
                </div>          
            </div>        
        )
}

const ItemStockContainer = ({item}) => {
    return(
        <div className="item-stock-container mt-4">
            <p className="item-stock-title">Stock disponible</p>
            Cantidad: <span className="font-bold">1 unidad </span>
            <a><FontAwesomeIcon icon={faChevronDown}/></a>
            <span className="text-gray-400 text-[12px]"> (+{item.stockCount} disponibles)</span>
        </div>
    )
}
