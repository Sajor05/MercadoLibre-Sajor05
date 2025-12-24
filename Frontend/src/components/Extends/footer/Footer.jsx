import "./Footer.css";
import { Footer_icons } from "./components/icons/Footer_icons";
import { About_us } from "./components/footer_linklist/about/About_us";
import { Experience } from "./components/footer_linklist/experience/Experience";
import { Social_impact } from "./components/footer_linklist/social/Social_impact";
import { Client_service } from "./components/footer_linklist/service/Client_service";

export const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="w-full px-1">
        <div className="container text-center">
          <div className="grid grid-cols-4 gap-4 mt-3 p-5">
            <About_us></About_us>
            <Social_impact></Social_impact>
            <Client_service></Client_service>
            <Experience></Experience>
          </div>
        </div>
        <Footer_icons></Footer_icons>
      </div>
      <p className="text-center">© Derechos reservados | Fabrizio Rojas</p>
    </footer>
  );
};
