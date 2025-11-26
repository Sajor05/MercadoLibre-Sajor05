import Articulo1_image from "./assets/Article1.jpg";
import Articulo2_image from "./assets/Article2.jpg";
import { Articulo } from "../../../Articles/articles";
import { ArticleCard } from "../../../Articles/ArticleCard";
import { Recommendation_carousel } from "../../../carousel/recommendation_carousel/Recommendation_carrousel";

const articulo1 = new Articulo(
  1,
  Articulo1_image,
  "Zapatillas De Hombre Trekking Reforzadas Action Team 36 A 47 Chocolate 41 Ar",
  229734
);
const articulo2 = new Articulo(1, Articulo2_image, "Nose que era", 229734);

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
              <ArticleCard product={art}></ArticleCard>
            </div>
          ))}
        </Recommendation_carousel>
      </section>
    </>
  );
}
