import "./Home.css";
import { Offers } from "./components/offers/Offer.jsx";
import { Suscribe } from "./components/suscribe/Home_suscribe.jsx";
import { Navbar } from "../../components/Extends/navbar/Navbar.jsx";
import { MercadoPlay } from "./components/mercado_play/Mercado_Play.jsx";
import { DoublePropagandaContext } from "../../context/PropagandaContext.jsx";
import { Quickaccess } from "../../components/carousel/quickAccess_carousel/Quickacces.jsx";
import { Main_carousel } from "../../components/carousel/main_home_carousel/Main_carousel.jsx";
import { CarAccesoryCarousel } from "../../components/carousel/products_carousel/ProductsCarousel.jsx";
import { ConsoleCarousel } from "../../components/carousel/products_carousel/ProductsCarousel.jsx";

export const Home = () => {
  return (
    <>
      <Navbar/>
      <main className="bg-[#ebebeb]">
        <section className="main_carousel">
          <Main_carousel/>
          <div className="flex justify-center mt-[-420px]">
            <Quickaccess/>
          </div>
        </section>

        <section className="mt-[45px]">
          <DoublePropagandaContext/>
        </section>

        <section className="mt-[41px] flex justify-center">
          <Offers/>
        </section>

        <section className="mt-[34px]">
          <Suscribe/>
        </section>

        <section className="mt-[50px] flex justify-center">
          <MercadoPlay/>
        </section>

        <section className="mt-[120px]">
          <CarAccesoryCarousel/>
        </section>

        <section className="mt-[120px]">
          <ConsoleCarousel/>
        </section>
      </main>
    </>
  );
}
