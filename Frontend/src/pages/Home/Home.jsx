import "./Home.css";
import { Navbar } from "../../components/Extends/navbar/Navbar.jsx";
import { Suscribe } from "./components/suscribe/Home_suscribe.jsx";
import { Main_carousel } from "../../components/carousel/main_home_carousel/Main_carousel.jsx";
import { Related_history } from "../../components/carousel/lastSeen_carousel/Related_history.jsx";
import { Quickaccess } from "../../components/carousel/quickAccess_carousel/Quickacces.jsx";
import { Electrodomestic_Carrousel } from "../../components/carousel/products_carousel/electrodomestic_Carrousel/Electrodomestic_Carrousel.jsx";
import { MercadoPlay } from "./components/mercado_play/Mercado_Play.jsx";

export const Home = () => {
  return (
    <>
      <Navbar/>
      <main className="bg-[#ebebeb]">
        <section className="main_carousel">
          <Main_carousel/>
          <div className="flex justify-center mt-[-439px]">
            <Quickaccess/>
          </div>
        </section>

        <section className="mt-[100px]">
          <Related_history/>
        </section>

        <section className="mt-[100px]">
          <Suscribe/>
        </section>

        <section className="mt-[120px]">
          <Electrodomestic_Carrousel/>
        </section>

        <section className="mt-[120px]">
          <MercadoPlay/>
        </section>

        <section className="mt-[120px]">
          <Electrodomestic_Carrousel/>
        </section>

        <section className="mt-[120px]">
          <Electrodomestic_Carrousel/>
        </section>
      </main>
    </>
  );
}
