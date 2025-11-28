import "./Envio_logo.css";
import { NavLink } from "react-router-dom";
import Envios from "./assets/envios_logo.webp";

export function Envios_Gratis_Logo() {
  return (
    <NavLink to="/" className="flex justify-start items-center">
      <img src={Envios} alt="Envios gratis" className="w-75 h-9" />
    </NavLink>
  );
}
