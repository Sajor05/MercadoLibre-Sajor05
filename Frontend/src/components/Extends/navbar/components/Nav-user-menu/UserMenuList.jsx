import { NavContext } from "../../../../../context/NavContext.jsx"
import "./MenuList.css"

export const NavUserMenuList = () => {
  return (
    <>
      <ul className="flex gap-4 text-[13px] text-[#333]">
          <NavContext/>
      </ul>
    </>
  );
}