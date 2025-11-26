import Recomendation6 from "./Assets/recomendation6.jpg";
import "./Articles.css";
/*
-------------------------------
-- M E D I O S  D E  P A G O --
-------------------------------
*/
export function Recommendation6() {
  return (
    <article className="p-5 h-[285px] rounded-md">
      <div className="recomendation-carousel-article-header">
        <h2 className="article-recomendation-title text-sm/8 font-bold">
          Medios de pago
        </h2>
      </div>
      <div className="recomendation-carousel-article-img flex text-center justify-center">
        <img src={Recomendation6} alt="" className="w-[105px] h-[105px]" />
      </div>
      <div className="recomendation-carousel-article-title-ml text-center text-sm line-clamp-2">
        <a href="#">
          Pagá tu compras de <br />
          forma rápida y segura.
        </a>
      </div>
      <div className="recomendation-carousel-article-footer">
        <footer className="text-center">
          <button className="recomendation-carousel-article-footer-button bg-blue-100 text-xs h-24px w-48 px-2 py-1 text-center rounded text-[#3483fa] font-bold">
            Conocer medios de pago
          </button>
        </footer>
      </div>
    </article>
  );
}
