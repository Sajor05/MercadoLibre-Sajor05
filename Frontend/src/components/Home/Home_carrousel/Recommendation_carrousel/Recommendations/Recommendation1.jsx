import "./Articles.css";
import Recomendation1 from "../../../../../assets/Recomendation-carousel/recomendation1.jpg";

/*
---------------------------------------
-- P O R Q U E  T E  I N T E R E S A --
---------------------------------------
*/

export function Recommendation1() {
  return (
    <article className="p-5 rounded-md">
      <div className="recomendation-carousel-article-header ">
        <h2 className="article-recomendation-title text-sm/8 font-bold">
          Porque te interesa
        </h2>
      </div>
      <div className="flex justify-center recomendation-carousel-article-img text-center">
        <img src={Recomendation1} alt="#" className="h-[105px] w-[105px]" />
      </div>
      <div className="recomendation-carousel-article-title text-justify text-sm line-clamp-2 px-2">
        <a href="#">
          Juego X2 Faros Traseros 72 Leds and we still don't know if there
        </a>
      </div>
      <section className="recomendation-carousel-article-price-container px-2">
        <div className="recomendation-carousel-article-old-price text-xs">
          <s className="text-gray-500">
            <span className="text-gray-400">
              $<span className="text-gray-400">229.734</span>
            </span>
          </s>
        </div>
        <div className="text-lg">
          <span>
            $<span>198.839 </span>
          </span>
          <span className="text-xs text-[#00a650]">13% OFF</span>
        </div>
      </section>
      <footer className="recomendation-carousel-article-footer-container">
        <span className="text-xs text-[#00a650]">Envío gratis</span>
      </footer>
    </article>
  );
}
