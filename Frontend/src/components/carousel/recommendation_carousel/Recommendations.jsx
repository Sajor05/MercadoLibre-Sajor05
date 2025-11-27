import { Recommendation1 } from "./Recommendations/Recommendation1";
import { Recommendation2 } from "./Recommendations/Recommendation2";
import { Recommendation3 } from "./Recommendations/Recommendation3";
import { Recommendation4 } from "./Recommendations/Recommendation4";
import { Recommendation5 } from "./Recommendations/Recommendation5";
import { Recommendation7 } from "./Recommendations/Recommendation7";
import { Recommendation8 } from "./Recommendations/Recommendation8";
import { Recommendation9 } from "./Recommendations/Recommendation9";
import { Recommendation10 } from "./Recommendations/Recommendation10";
import { Recommendation_carousel } from "./Recommendation_carrousel";

const articles = [
  Recommendation1,
  Recommendation2,
  Recommendation3,
  Recommendation4,
  Recommendation5,
  Recommendation7,
  Recommendation8,
  Recommendation9,
  Recommendation10,
];

export function Recommendations() {
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
