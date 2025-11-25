import "./Articles.css";
import Recomendation4 from "./Assets/recomendation4.jpg";

/*
----------------------
-- L O  Q U E R É S --
----------------------
*/
export function Recommendation4() {
  return (
    <article className="p-5 rounded-md">
      <div className="recomendation-carousel-article-header">
        <h2 className="article-recomendation-title text-sm/8 font-bold">
          Lo querés
        </h2>
      </div>
      <div className="flex justify-center recomendation-carousel-article-img text-center">
        <img src={Recomendation4} alt="#" className="h-[105px] w-[105px]" />
      </div>
      <div className="recomendation-carousel-article-title text-justify text-sm line-clamp-2 ">
        <a href="#">
          Kit Embrague Fox Suran Voyage Gol Trend Completo Original
        </a>
      </div>
      <section className="recomendation-carousel-article-price-container">
        <div className="recomendation-carousel-article-old-price text-xs">
          <s className="text-gray-500">
            <span className="text-gray-400">
              $<span className="text-gray-400">299.999</span>
            </span>
          </s>
        </div>
        <div className="text-lg">
          <span>
            $<span>224.999 </span>
          </span>
          <span className="text-xs text-[#00a650]">25% OFF</span>
        </div>
      </section>
      <footer className="recomendation-carousel-article-footer-container">
        <span className="text-xs text-[#00a650]">Envío gratis</span>
      </footer>
    </article>
  );
}
