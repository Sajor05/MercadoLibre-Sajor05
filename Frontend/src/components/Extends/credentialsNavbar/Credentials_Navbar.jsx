import { Logo } from "../navbar/Navbar";

export const Credentials_Navbar = () => {
  return (
    <header className="bg-[#ffe600]">
      <div className="grid grid-cols-3 gap-2 h-12">
        <div className="flex justify-end items-center px-28">
          <Logo></Logo>
        </div>
      </div>
    </header>
  );
}
