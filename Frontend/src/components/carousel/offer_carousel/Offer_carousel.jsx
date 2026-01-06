import "./Offer_carousel.css"
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export function Offer_carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);
  const visibleCount = 6;
  const containerRef = useRef(null);
  const articleWidth = 190;
  const gap = 16;

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - visibleCount : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - visibleCount ? 0 : curr + 1));

  return (
    <div
      className="container-cards overflow-x-hidden overflow-y-hidden relative"
      style={{ width: `${6 * 187 + 5 * gap}px` }}
      ref={containerRef}
    >
      <div className="container-cards flex transition-transform ease-out duration-500"
            style={{
            transform: `translateX(-${curr * (articleWidth + gap)}px)`,
            gap: `${gap}px`,
        }}>
        {slides}
      </div>
      <div className="absolute inset-0 items-center p-4 pointer-events-none">
        <button
          onClick={prev}
          className="offer-prev-button p-1 rounded-full shadow bg-white text-gray-800 cursor-pointer pointer-events-auto"
        >
          <ChevronLeft size={40} color="skyblue"></ChevronLeft>
        </button>
        <button
          onClick={next}
          className="offer-next-button p-1 rounded-full shadow bg-white text-gray-800 cursor-pointer pointer-events-auto"
        >
          <ChevronRight size={40} color="skyblue"></ChevronRight>
        </button>
      </div>      
    </div>
  );
}