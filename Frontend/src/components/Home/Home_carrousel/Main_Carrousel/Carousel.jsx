import { ChevronLeft, ChevronRight } from "react-feather";
import { useState, useEffect } from "react";

export function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const id = setTimeout(
      () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)),
      8000
    );

    return () => clearTimeout(id);
  }, [curr, slides.length, 8000]);
  return (
    <>
      <div className="overflow-x-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
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
