import "./Home.css";
import { Main_carousel } from "./Home_carrousel/Main_Carrousel/Main_carousel";
import { Related_history } from "./Last_seen/Related_history";
import { Recommendations } from "./Home_carrousel/Recommendation_carrousel/Recommendations";
import { Suscribe } from "./Home_suscribe/home_suscribe";

export function Home() {
  return (
    <>
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
          <Related_history></Related_history>
        </section>

        <section className="mt-[120px]">
          <Related_history></Related_history>
        </section>

        <section className="mt-[120px]">
          <Related_history></Related_history>
        </section>

        <section className="mt-[120px]">
          <Related_history></Related_history>
        </section>
      </main>
    </>
  );
}
