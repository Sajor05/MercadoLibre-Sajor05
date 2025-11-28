import "./Home.css";
import { Header } from "../Header/Header";
import { Suscribe } from "./components/suscribe/Home_suscribe.jsx";
import { Main_carousel } from "../carousel/main_home_carousel/Main_carousel.jsx";
import { Related_history } from "./components/last_seen/Related_history.jsx";
import { Recommendations } from "../carousel/recommendation_carousel/Recommendations.jsx";
import { Electrodomestic_Carrousel } from "../carousel/products_carousel/electrodomestic_Carrousel/Electrodomestic_Carrousel.jsx";
import { MercadoPlay } from "./components/mercado_play/Mercado_Play.jsx";

export function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <section className="main_carousel">
          <Main_carousel></Main_carousel>
          <div className="flex justify-center mt-[-450px]">
            <Recommendations></Recommendations>
          </div>
        </section>

        <section className="mt-[100px]">
          <Related_history></Related_history>
        </section>

        <section className="mt-[100px]">
          <Suscribe></Suscribe>
        </section>

        <section className="mt-[120px]">
          <Electrodomestic_Carrousel></Electrodomestic_Carrousel>
        </section>

        <section className="mt-[120px]">
          <MercadoPlay></MercadoPlay>
        </section>

        <section className="mt-[120px]">
          <Electrodomestic_Carrousel></Electrodomestic_Carrousel>
        </section>

        <section className="mt-[120px]">
          <Electrodomestic_Carrousel></Electrodomestic_Carrousel>
        </section>
      </main>
    </>
  );
}
