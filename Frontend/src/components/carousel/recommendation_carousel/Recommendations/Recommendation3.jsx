import "./Articles.css";
import Recomendation3 from "./assets/recomendation3.jpg";

/*
----------------------------------------------
-- I N G R E S Á  A  T U  U B I C A C I Ó N --
----------------------------------------------
*/
export function Recommendation3() {
  return (
    <article className="p-5 h-[285px] rounded-md">
      <div className="recomendation-carousel-article-header">
        <h2 className="article-recomendation-title text-sm/8 font-bold whitespace-nowrap">
          Ingresá tu ubicación
        </h2>
      </div>
      <div className="recomendation-carousel-article-img flex text-center justify-center">
        <img src={Recomendation3} alt="#" />
      </div>
      <div className="recomendation-carousel-article-title-ml text-center text-sm">
        <a href="#">
          Consultá costos y <br />
          tiempos de entrega
        </a>
      </div>
      <div className="recomendation-carousel-article-footer">
        <footer className="text-center">
          <button className="recomendation-carousel-article-footer-button bg-blue-100 text-xs px-2 py-1 text-center rounded text-[#3483fa] font-bold">
            Ingresar ubicación
          </button>
        </footer>
      </div>
    </article>
  );
}
