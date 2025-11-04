import "./Main_carousel";
import Carrousel_1 from "../../../../assets/Carrousel/carrousel1.jpg";
import Carrousel_2 from "../../../../assets/Carrousel/carrousel2.jpg";
import Carrousel_3 from "../../../../assets/Carrousel/carrousel3.jpg";
import Carrousel_4 from "../../../../assets/Carrousel/carrousel4.jpg";
import Carrousel_5 from "../../../../assets/Carrousel/carrousel5.jpg";
import { Carousel } from "./Carousel";

const carousel_images = [
  Carrousel_1,
  Carrousel_2,
  Carrousel_3,
  Carrousel_4,
  Carrousel_5,
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
