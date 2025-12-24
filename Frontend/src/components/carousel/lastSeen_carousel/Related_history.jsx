import "./css/Related_history.css";
import { History } from "./History";

export const Index_buttons = () =>{
  return(
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
  );
}

export const Related_history = () => {
  return (
    <>
      <div className="flex justify-center">
        <section className="related_history-container bg-white h-[380px] w-[1180px] p-[20px]">
          <header className="related_history-header-container flex justify-between">
            <h3 className="font-bold">Inspirado en lo último que viste</h3>
            <Index_buttons/>
          </header>
          <main>
            <History/>
          </main>
        </section>
      </div>
    </>
  );
}
