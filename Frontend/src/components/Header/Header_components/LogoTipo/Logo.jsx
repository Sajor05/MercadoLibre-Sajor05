import { NavLink } from "react-router-dom";
import Logotipo from "../../../../assets/Logo/Logotipo.jpg";

export function Logo() {
  return (
    <NavLink to="/" className="flex justify-end items-center px-6 py-2">
      <img src={Logotipo} alt="Mercado libre" className="w-32 h-8" />
    </NavLink>
  );
}
