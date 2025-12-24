import "./Home_suscribe.css";
import Envios from "./assets/free_shipping_2x.png";
import Cuotas from "./assets/interest_free_installments_discount_2x.png";
import Pedidos from "./assets/proximity-square@2x.png";

export const Suscribe = () => {
  return (
    <>
      <div className="flex justify-center">
        <section className="home-suscribe-container bg-white h-[200px] w-[1180px]">
          <header className="home-suscribe-header-container flex justify-between text-white bg-gradient-to-r from-[#5A238D] to-[#AA1192] p-5">
            <h3 className="font-bold text-xl">Suscribete desde $3.490/mes</h3>
            <button className="home-suscribe-button bg-white/25 px-4 py-1">
              <span className="text-sm">Suscribirme al serivcio</span>
            </button>
          </header>
          <main className="p-5">
            <h3 className="font-bold text-lg">
              Ahorrá en tus envíos y compras
            </h3>
            <div className="mt-[10px] grid grid-cols-3 gap-5">
              <div className="flex justify-between">
                <img src={Envios} alt="#" className="w-[56px] h-[56px]" />
                <div className="flex text-sm justify-center text-justify p-3">
                  <p>Envíos gratis en millones de productos desde $15.000</p>
                </div>
              </div>
              <div className="flex">
                <img src={Cuotas} alt="#" className="w-[56px] h-[56px]" />
                <div className="flex text-sm justify-center text-justify p-3">
                  <p>3 cuotas extra sin interés</p>
                </div>
              </div>
              <div className="flex">
                <img src={Pedidos} alt="#" className="w-[56px] h-[56px]" />
                <div className="flex text-sm justify-center text-justify p-3">
                  <p>
                    Envío gratis en tus pedidos de "Restaurantes" desde $ 4.000
                  </p>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}
