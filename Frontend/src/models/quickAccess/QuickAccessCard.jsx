import "./QuickAccessCard.css";
import { Link } from "react-router-dom";


const ButtonCard = ({text}) => {
    return(
        <button className="recomendation-carousel-article-footer-button text-[#3483fa] font-bold text-sm">
            {text}
        </button>
    );
}

export const QuickAccessCard = ({title, image, description, button_text}) => {
  return (
    <article className="quickaccess-card p-5 flex-shrink-0 w-[183px] h-[300px] cursor-pointer">
      <div className="recomendation-carousel-article-header">
        <h2 className="article-recomendation-title text-sm/8 font-bold">
          {title}
        </h2>
      </div>
      <div className="recomendation-carousel-article-img flex text-center justify-center">
        <img src={image} alt="#" className="h-[105px] w-[105px]" />
      </div>
      <div className="recomendation-carousel-article-title-ml text-center text-sm">
        <Link to="#">
          {description}
        </Link>
      </div>
      <div className="recomendation-carousel-article-footer">
        <div className="recomendation-carousel-article-footer-button-container bg-blue-100 text-center">
          <ButtonCard text={button_text}/>
        </div>
      </div>
    </article>
  );
}
