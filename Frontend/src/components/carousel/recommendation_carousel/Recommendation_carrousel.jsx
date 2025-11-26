import { ChevronLeft, ChevronRight } from "react-feather";
import { useState, useRef } from "react";

export function Recommendation_carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);
  const visibleCount = 6;
  const containerRef = useRef(null);
  const articleWidth = 190;
  const gap = 8;

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - visibleCount : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - visibleCount ? 0 : curr + 1));

  return (
    <>
      <div
        className="overflow-x-hidden overflow-y-hidden relative "
        style={{ width: `${6 * 190 + 5 * gap}px` }}
        ref={containerRef}
      >
        <div
          className="flex transition-transform ease-out duration-500"
          style={{
            transform: `translateX(-${curr * (articleWidth + gap)}px)`,
            gap: `${gap}px`,
          }}
        >
          {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white text-gray-800 cursor-pointer"
          >
            <ChevronLeft size={40} color="skyblue"></ChevronLeft>
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white text-gray-800 cursor-pointer"
          >
            <ChevronRight size={40} color="skyblue"></ChevronRight>
          </button>
        </div>
      </div>
    </>
  );
}
