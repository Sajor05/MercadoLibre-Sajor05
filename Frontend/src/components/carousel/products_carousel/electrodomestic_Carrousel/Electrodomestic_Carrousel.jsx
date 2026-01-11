import "./css/Electrodomestic_carousel.css";
import { Electrodomestic_Articles } from "./Electrodomestic_Articles.jsx";


export const Electrodomestic_Carrousel = () => {
  return (
      <div className="flex justify-center">
        <section className="related_history-container bg-white h-[380px] w-[1180px] p-[20px]">
          <Index_buttons/>
          <main>
            <Electrodomestic_Articles/>
          </main>
        </section>
      </div>
  );
}
