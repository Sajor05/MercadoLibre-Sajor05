// IMAGENES DE LOS ProductCardModelS

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
import { ProductCardModel } from "../../../../models/product/productModel";
import { ProductCard } from "../../../../models/product/ProductCard";
import { Recommendation_carousel } from "../../Recommendation_carrousel.jsx";

//OBJETOS ProductCardModel
const heladera = new ProductCardModel(1, Heladera, "Heladera", 229734);
const lavavajillas = new ProductCardModel(2, Lavavajillas, "lavavajillas", 229734);
const combo = new ProductCardModel(
  3,
  Combo,
  "Combo cafetera, tostadora y juguera",
  229734
);
const caloventor = new ProductCardModel(4, Caloventor, "Caloventor", 229734);
const aireAcondicionado = new ProductCardModel(
  5,
  AireAcondicionado,
  "Aire acondicionado",
  229734
);
const airFryer = new ProductCardModel(6, AirFryer, "Freidora de aire", 229734);
const hornito = new ProductCardModel(7, Hornito, "Hornito", 229734);
const horno = new ProductCardModel(8, Horno, "Horno", 167000);
const trituradora = new ProductCardModel(9, Trituradora, "Trituradora", 229734);
const microondas = new ProductCardModel(10, Microondas, "Microondas", 229734);
const pavaElectrica = new ProductCardModel(11, PavaElectrica, "Pava electrica", 229734);
const tostadora = new ProductCardModel(12, Tostadora, "Tostadora", 229734);

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

export const Electrodomestic_Articles = () => {
  return (
    <section className="flex justify-center p-5">
      <Recommendation_carousel>
        {articles.map((art, i) => (
          <div
            key={i}
            className="ProductCardModels-card flex-shrink-0 w-[190px] h-[290px]"
          >
            <ProductCard product={art}/>
          </div>
        ))}
      </Recommendation_carousel>
    </section>
  );
}
