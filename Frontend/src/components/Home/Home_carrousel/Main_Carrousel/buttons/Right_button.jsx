import { ChevronRight } from "react-feather";
import "./buttons.css";

export function Right_button({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="p-1 rounded-full shadow bg-white text-gray-800 cursor-pointer"
      >
        <ChevronRight size={40} color="skyblue"></ChevronRight>
      </button>
    </>
  );
}
