import Articulo1_image from "./assets/Article1.jpg";
import Articulo2_image from "./assets/Article2.jpg";
import {ProductCardModel} from "../../../models/product/ProductModel.js"
import { ProductCard } from "../../../models/product/ProductCard.jsx";
import { Recommendation_carousel } from "../Recommendation_carrousel.jsx";

const articulo1 = new ProductCardModel(
  1,
  Articulo1_image,
  "Zapatillas De Hombre Trekking Reforzadas Action Team 36 A 47 Chocolate 41 Ar",
  229734
);
const articulo2 = new ProductCardModel(1, Articulo2_image, "Nose que era", 229734);

const articles = [articulo1, articulo2];

export function History() {
  return (
    <>
      <section className="flex justify-center p-5">
        <Recommendation_carousel>
          {articles.map((art, i) => (
            <div
              key={i}
              className="articulos-card flex-shrink-0 w-[190px] h-[290px]"
            >
              <ProductCard product={art}/>
            </div>
          ))}
        </Recommendation_carousel>
      </section>
    </>
  );
}
