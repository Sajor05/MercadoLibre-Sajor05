import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Link to={`/detail/${product.id}`} className="p-5 rounded-md">
      <div className="flex justify-center recomendation-carousel-article-img text-center p-2">
        <img
          src={product.images[0]}
          alt={product.title}
          style={{
                  width:`173px`,
                  height:`173px`
                }}
        />
      </div>
      <div className="recomendation-carousel-article-title text-justify text-sm line-clamp-2 px-2">
        <p>{product.title}</p>
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
            $<span>{product.current_price} </span>
          </span>
          <span className="text-xs text-[#00a650]">13% OFF</span>
        </div>
      </section>
      <footer className="recomendation-carousel-article-footer-container">
        <span className="text-xs text-[#00a650]">Envío gratis</span>
      </footer>
    </Link>
  );
}
