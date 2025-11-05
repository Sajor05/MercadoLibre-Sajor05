import { Link } from "react-router-dom";
import Logotipo from "../../../../assets/Logo/Logotipo.jpg";

export function Logo() {
  return (
    <Link to="/">
      <img src={Logotipo} alt="Mercado libre" className="w-32 h-8" />
    </Link>
  );
}
