import { ChevronLeft, ChevronRight } from "react-feather";
export function Left_button() {
  const [curr, setCurr] = useState(0);
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  return (
    <>
      {" "}
      <button
        onClick={next}
        className="p-1 rounded-full shadow bg-white text-gray-800 cursor-pointer"
      >
        <ChevronLeft size={40} color="skyblue"></ChevronLeft>
      </button>
    </>
  );
}
