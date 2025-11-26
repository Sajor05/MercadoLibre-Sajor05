import { ChevronLeft } from "react-feather";
import "./buttons.css";

export function Left_button({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="p-1 rounded-full shadow bg-white text-gray-800 cursor-pointer"
      >
        <ChevronLeft size={40} color="skyblue"></ChevronLeft>
      </button>
    </>
  );
}
