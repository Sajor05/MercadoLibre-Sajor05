import "./Main_carousel.css";
import Carousel_1 from "./assets/carousel1.jpg";
import Carousel_2 from "./assets/carousel2.jpg";
import Carousel_3 from "./assets/carousel3.jpg";
import Carousel_4 from "./assets/carousel4.jpg";
import Carousel_5 from "./assets/carousel5.jpg";
import Carousel_6 from "./assets/carousel6.jpg";
import Carousel_7 from "./assets/carousel7.jpg";
import { Carousel } from "../Carousel.jsx";

const carousel_images = [
  Carousel_1,
  Carousel_2,
  Carousel_3,
  Carousel_4,
  Carousel_5,
  Carousel_6,
  Carousel_7,
];

export function Main_carousel() {
  return (
    <main>
      <div className="relative">
        <Carousel>
          {carousel_images.map((s, i) => (
            <div key={i} className="relative w-full flex-shrink-0">
              <img src={s} alt="" className="w-full h-auto" />
              <div className="gradient absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#ebebeb]/100 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="h-70"></div>
    </main>
  );
}
