import "./Articles.css";
import Recomendation5 from "../../../../../assets/Recomendation-carousel/recomendation5.jpg";
/*
------------------------------------------
-- V I S T O  R E C I E N T E M E N T E --
------------------------------------------
*/
export function Recommendation5() {
  return (
    <article className="p-5 rounded-md">
      <div className="recomendation-carousel-article-header">
        <h2 className="article-recomendation-title text-sm/8 font-bold whitespace-nowrap">
          Visto recientemente
        </h2>
      </div>
      <div className="flex justify-center recomendation-carousel-article-img text-center">
        <img src={Recomendation5} alt="#" className="h-[105px] w-[105px]" />
      </div>
      <div className="recomendation-carousel-article-title text-justify text-sm line-clamp-2 ">
        <a href="#">
          Zapatillas Hombre Deportivas Nami Livianas Comodas Urbana
        </a>
      </div>
      <section className="recomendation-carousel-article-price-container">
        <div className="recomendation-carousel-article-old-price text-xs">
          <s className="text-gray-500">
            <span className="text-gray-400">
              $<span className="text-gray-400">88.657</span>
            </span>
          </s>
        </div>
        <div className="text-lg">
          <span>
            $<span>41.699 </span>
          </span>
          <span className="text-xs text-[#00a650]">52% OFF</span>
        </div>
      </section>
      <footer className="recomendation-carousel-article-footer-container">
        <span className="text-xs text-[#00a650]">Envío gratis</span>
      </footer>
    </article>
  );
}
