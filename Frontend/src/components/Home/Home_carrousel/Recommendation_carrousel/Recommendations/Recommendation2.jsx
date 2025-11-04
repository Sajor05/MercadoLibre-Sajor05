import "./Articles.css";
import Recomendation2 from "../../../../../assets/Recomendation-carousel/recomendation2.jpg";
/*
----------------------------------------
-- I N G R E S Á  A  T U  C U E N T A --
----------------------------------------
*/

export function Recommendation2() {
  return (
    <article className="p-5 h-[285px] rounded-md">
      <div className="recomendation-carousel-article-header">
        <h2 className="article-recomendation-title text-sm/8 font-bold">
          Ingresá a tu cuenta
        </h2>
      </div>
      <div className="recomendation-carousel-article-img flex text-center justify-center">
        <img src={Recomendation2} alt="#" />
      </div>
      <div className="recomendation-carousel-article-title-ml text-center text-sm">
        <a href="#">
          Disfrutá de ofertas y <br /> comprá sin límites.
        </a>
      </div>
      <div className="recomendation-carousel-article-footer">
        <footer className="text-center">
          <button className="recomendation-carousel-article-footer-button bg-blue-100 text-xs px-2 py-1 text-center rounded text-[#3483fa] font-bold">
            Ingresar a tu cuenta
          </button>
        </footer>
      </div>
    </article>
  );
}
