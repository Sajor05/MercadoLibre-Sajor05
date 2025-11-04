import { Article1 } from "./Articles/Article_1";
import { Article2 } from "./Articles/Article_2";
import { Recommendation_carousel } from "../Home_carrousel/Recommendation_carrousel/Recommendation_carrousel";

const articles = [
  Article1,
  Article2,
  Article1,
  Article1,
  Article1,
  Article1,
  Article1,
];

export function Recommendations_Ropa() {
  return (
    <>
      <section className="flex justify-center p-5">
        <Recommendation_carousel>
          {articles.map((Article, i) => (
            <div
              key={i}
              className="articulos-card flex-shrink-0 w-[190px] h-[290px]"
            >
              <Article />
            </div>
          ))}
        </Recommendation_carousel>
      </section>
    </>
  );
}
