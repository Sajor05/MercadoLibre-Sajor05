import "./Credentials_Header.css";
import { Logo } from "../../Header/Header_components/LogoTipo/Logo";

export function Credentials_Header() {
  return (
    <>
      <header className="page-header-container">
        <div className="grid grid-cols-3 gap-2 px-5 py-2">
          <div className="flex justify-end items-center px-6 py-2">
            <Logo></Logo>
          </div>
        </div>
      </header>
    </>
  );
}
