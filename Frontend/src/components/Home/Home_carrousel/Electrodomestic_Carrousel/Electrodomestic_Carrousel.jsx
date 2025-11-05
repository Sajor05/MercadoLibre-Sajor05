import "./Styles/electrodomestic_carousel.css";
import { Electrodomestic_Articles } from "./Electrodomestic_Articles";
export function Electrodomestic_Carrousel() {
  return (
    <>
      <div className="flex justify-center">
        <section className="related_history-container bg-white h-[380px] w-[1180px] p-[20px]">
          <header className="related_history-header-container flex justify-between">
            <h3 className="font-bold">Electrodomésticos</h3>
            <ul className="flex gap-3">
              <li>
                <button
                  type="button"
                  className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
                ></button>
              </li>
              <li>
                <button
                  type="button"
                  className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
                ></button>
              </li>
              <li>
                <button
                  type="button"
                  className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-blue-200 cursor-pointer"
                ></button>
              </li>
              <li>
                <button
                  type="button"
                  className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
                ></button>
              </li>
            </ul>
          </header>
          <main>
            <Electrodomestic_Articles></Electrodomestic_Articles>
          </main>
        </section>
      </div>
    </>
  );
}
