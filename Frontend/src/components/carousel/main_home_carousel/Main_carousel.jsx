import "./Main_carousel.css";
import {CarouselLoop} from "./CarouselLoop.jsx"

const carousel_images = [
  "https://http2.mlstatic.com/D_NQ_992751-MLA101300511270_122025-OO.webp",
  "https://http2.mlstatic.com/D_NQ_648108-MLA101301324796_122025-OO.webp",
  "https://http2.mlstatic.com/D_NQ_943695-MLA102154868790_122025-OO.webp",
  "https://http2.mlstatic.com/D_NQ_835254-MLA102663372735_122025-OO.webp",
  "https://http2.mlstatic.com/D_NQ_910708-MLA101802772255_122025-OO.webp",
  "https://http2.mlstatic.com/D_NQ_933352-MLA101685514578_122025-OO.webp"
];

export function Main_carousel() {
  return (
    <main>
      <div className="relative">
        <CarouselLoop>
          {carousel_images.map((s, i) => (
            <div key={i} className="relative w-full flex-shrink-0">
              <img src={s} alt="" className="w-full h-auto" />
              <div className="gradient absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#ebebeb]/100 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </CarouselLoop>
      </div>
      <div className="h-70"></div>
    </main>
  );
}
