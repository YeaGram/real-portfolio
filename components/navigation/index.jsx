import NavigationBarItems from "./navitem";
import HamburgerMenu from "./hamburger";
import { useState } from "react";
import {
  MdLightMode,
  MdDarkMode,
  MdHome,
  MdTask,
  MdFace,
  MdContactSupport,
} from "react-icons/md";
import Brand from "../brand";

export default function NavigationBar() {
  const [menuActive, setMenuActive] = useState(false);
  function handleMenu() {
    setMenuActive(menuActive ? false : true);
  }

  return (
    <nav className="py-5 px-10 shadow-xl fixed w-full bg-white sm:bg-transparent sm:backdrop-blur-sm z-10 backdrop-brightness-110">
      <div className="flex items-center">
        <div className="flex items-center gap-4 container mx-auto justify-between sm:justify-start">
          <Brand />
          <span className="w-1 h-10 bg-stone-900 sm:block hidden"></span>
          <ul className="items-center gap-2 sm:flex hidden">
            <NavigationBarItems>Home</NavigationBarItems>
            <NavigationBarItems>About</NavigationBarItems>
            <NavigationBarItems>Project</NavigationBarItems>
            <NavigationBarItems>Contact</NavigationBarItems>
          </ul>
          <span className="sm:hidden block" onClick={handleMenu}>
            <HamburgerMenu />
          </span>
        </div>
        <span className="text-2xl cursor-pointer hidden sm:block">
          <MdLightMode />
        </span>
      </div>
      <ul
        className={`items-center gap-2 w-full ${
          !menuActive ? "hidden" : "flex"
        } flex-col border-y-2 py-2 mt-8 sm:hidden`}
      >
        <div className="mobile">
          <NavigationBarItems>
            <MdHome />
            Home
          </NavigationBarItems>
          <NavigationBarItems>
            <MdFace />
            About
          </NavigationBarItems>
          <NavigationBarItems>
            <MdTask />
            Project
          </NavigationBarItems>
          <NavigationBarItems>
            <MdContactSupport />
            Contact
          </NavigationBarItems>
        </div>
      </ul>
      <span
        className={
          menuActive
            ? `text-2xl  cursor-pointer sm:hidden w-full flex justify-center gap-2 pt-4`
            : "hidden"
        }
      >
        <span className="block text-sm">
          Theme : <b>light</b>
        </span>
        <MdLightMode />
      </span>
    </nav>
  );
}
