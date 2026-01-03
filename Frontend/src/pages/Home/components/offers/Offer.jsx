import "./Offer.css"
import { Offer_Articles } from "./components/Offer_Articles";

const Index_buttons = () => {
  return(
    <header className="related_history-header-container">
      <ul className="flex gap-3">
        <li>
          <button
            type="button"
            className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
          ></button>
        </li>
        <li>
          <button
            type="button"
            className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
          ></button>
        </li>
        <li>
          <button
            type="button"
            className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-blue-200 cursor-pointer"
          ></button>
        </li>
        <li>
          <button
            type="button"
            className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
          ></button>
        </li>
      </ul>
    </header>    
  );
}

export const Offers = () => {
  return (
    <article className="grid grid-cols-[338px_1fr] gap-4">
        <section className="day-offer bg-white h-[476px] rounded-md">
            <header>
                <h2 className="day-offer-title text-justify font-bold p-5 text-2xl">Oferta del día</h2>
            </header>
            <main>
              <a href="#" className="day-offer-product">
                <div className="day-offer-product-img p-5 flex justify-center">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_751426-MLA98654485376_112025-O.webp" className="w-[226.5px] h-[226.5px]" />                    
                </div>
                <div className="flex flex-col text-justify box-border">
                  <div>
                    <p className="text-sm overflow-hidden">Gazebo Trent Reforzado 3x3 Metros Autoarmable Plegable Con Ventanas De Exterior Azul</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">
                      <s>$399.999</s>
                    </span>
                    <div className="grid grid-cols-2">
                      <span className="text-3xl">
                        $194.000
                      </span>
                      <span className="text-[#00a650] font-bold">
                        19% OFF
                      </span>
                    </div>
                  </div>
                  <div>
                    <span>6 cuotas de $32.300</span>
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-400"><span className="text-[#00a650] font-bold">Envío gratis</span> por ser tu primera comrpa</p>
                  </div>
                </div>
              </a>
            </main>
        </section>
        <section className="offer-carousel w-[826px] h-[476px] bg-white rounded-md">
          <header className="offer-carousel-header flex">
              <h2 className="offer-carousel-title font-bold p-5 text-2xl">Ofertas</h2>
              <a href="#" className="offer-carousel-action text-[#3483FA] text-sm mt-1">
                Mostrar todas las ofertas
              </a>
              <Index_buttons/>
          </header>
          <main>
            <Offer_Articles/>
          </main>
        </section>
    </article>
  )
}

/*
    <article className="p-5 rounded-md">
      <div className="flex justify-center recomendation-carousel-article-img text-center p-2">
        <img
          src={product.image}
          alt={product.title}
          className="h-[150px] w-[150px]"
        />
      </div>
      <div className="recomendation-carousel-article-title text-justify text-sm line-clamp-2 px-2">
        <a href="#">{product.title}</a>
      </div>
      <section className="recomendation-carousel-article-price-container px-2">
        <div className="recomendation-carousel-article-old-price text-xs">
          <s className="text-gray-500">
            <span className="text-gray-400">
              $<span className="text-gray-400">229.734</span>
            </span>
          </s>
        </div>
        <div className="recomendation-carousel-article-actual-price text-lg">
          <span>
            $<span>{product.price} </span>
          </span>
          <span className="text-xs text-[#00a650]">13% OFF</span>
        </div>
      </section>
      <footer className="recomendation-carousel-article-footer-container">
        <span className="text-xs text-[#00a650]">Envío gratis</span>
      </footer>
    </article>
*/