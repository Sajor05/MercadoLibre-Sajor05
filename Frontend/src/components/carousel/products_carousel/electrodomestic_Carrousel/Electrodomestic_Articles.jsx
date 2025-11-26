// IMAGENES DE LOS ARTICULOS

import Heladera from "./assets/Heladera.png";
import Lavavajillas from "./assets/Lavavajillas.jpg";
import Combo from "./assets/Combo.png";
import Caloventor from "./assets/Caloventor.png";
import AireAcondicionado from "./assets/AireAcondicionado.png";
import AirFryer from "./assets/AirFyer.png";
import Hornito from "./assets/Hornito.png";
import Horno from "./assets/Horno.png";
import Trituradora from "./assets/Trituradora.png";
import Microondas from "./assets/Microondas.png";
import PavaElectrica from "./assets/Pavaelectrica.png";
import Tostadora from "./assets/Tostadora.png";

//COMPONENTES
import { Articulo } from "../../../Articles/articles";
import { ArticleCard } from "../../../Articles/ArticleCard";
import { Recommendation_carousel } from "../../recommendation_carousel/Recommendation_carrousel";

//OBJETOS ARTICULO
const heladera = new Articulo(1, Heladera, "Heladera", 229734);
const lavavajillas = new Articulo(2, Lavavajillas, "lavavajillas", 229734);
const combo = new Articulo(
  3,
  Combo,
  "Combo cafetera, tostadora y juguera",
  229734
);
const caloventor = new Articulo(4, Caloventor, "Caloventor", 229734);
const aireAcondicionado = new Articulo(
  5,
  AireAcondicionado,
  "Aire acondicionado",
  229734
);
const airFryer = new Articulo(6, AirFryer, "Freidora de aire", 229734);
const hornito = new Articulo(7, Hornito, "Hornito", 229734);
const horno = new Articulo(8, Horno, "Horno", 229734);
const trituradora = new Articulo(9, Trituradora, "Trituradora", 229734);
const microondas = new Articulo(10, Microondas, "Microondas", 229734);
const pavaElectrica = new Articulo(11, PavaElectrica, "Pava electrica", 229734);
const tostadora = new Articulo(12, Tostadora, "Tostadora", 229734);

const articles = [
  heladera,
  lavavajillas,
  combo,
  caloventor,
  aireAcondicionado,
  airFryer,
  hornito,
  horno,
  trituradora,
  microondas,
  pavaElectrica,
  tostadora,
];

export function Electrodomestic_Articles() {
  return (
    <>
      <section className="flex justify-center p-5">
        <Recommendation_carousel>
          {articles.map((art, i) => (
            <div
              key={i}
              className="articulos-card flex-shrink-0 w-[190px] h-[290px]"
            >
              <ArticleCard product={art}></ArticleCard>
            </div>
          ))}
        </Recommendation_carousel>
      </section>
    </>
  );
}
