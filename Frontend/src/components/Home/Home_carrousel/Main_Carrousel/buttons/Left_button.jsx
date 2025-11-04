import { ChevronLeft, ChevronRight } from "react-feather";
export function Left_button() {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  return (
    <>
      {" "}
      <button
        onClick={prev}
        className="p-1 rounded-full shadow bg-white text-gray-800 cursor-pointer"
      >
        <ChevronLeft size={40} color="skyblue"></ChevronLeft>
      </button>
    </>
  );
}
