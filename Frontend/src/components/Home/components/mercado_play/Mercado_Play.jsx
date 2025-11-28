import "./Mercado_Play.css";
import Background from "./assets/Background.jpg";

export function MercadoPlay() {
  return (
    <section className="mercadoplay-container flex items-center justify-center">
      <img src={Background} className="w-295 h-120" />
    </section>
  );
}
