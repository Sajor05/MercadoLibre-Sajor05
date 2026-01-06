import { Navbar } from "../../components/Extends/navbar/Navbar"

export const Cart = () => {
  return (
    <>
        <Navbar/>
        <main>
            <div className="grid grid-cols-[808px_360px] mt-10 px-10 gap-4 justify-center">
                <section className="flex justify-center bg-[#f5f5f5] h-[151px] rounded-lg">productos</section>
                <section className="cart-resume flex flex-col justify-center bg-[#f5f5f5] h-[133px] rounded-lg">
                    <div className="resume-title-container border-b-1 border-[#0000001a]">
                        <div className="resume-title text-center mb-3">
                            Resumen de compra
                        </div>
                    </div>
                    <div className="resume-content-container">Acá verás importes de tu compra una vez que agregues productos.</div>
                </section>
            </div>
            <div className="carousel-cart-container bg-[#f5f5f5] mt-10 h-[1000px]">
                    asd
            </div>
        </main>  
    </>
  )
}