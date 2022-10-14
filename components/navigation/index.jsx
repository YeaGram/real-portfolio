import NavigationBarItems from "./navitem";
import HamburgerMenu from "./hamburger";
import { useState } from "react";
import { MdHome, MdTask, MdFace, MdContactSupport } from "react-icons/md";
import Brand from "../brand";
import { useContainerScrool } from "../myFunction";
import ThemeButton from "../theme";

export default function NavigationBar() {
  const scrollPos = useContainerScrool();
  const containerScrollPos = scrollPos[0];
  const windowHeight = scrollPos[1] / 2;

  const [menuActive, setMenuActive] = useState(false);
  const handleMenu = () => {
    setMenuActive(menuActive ? false : true);
  };

  return (
    <nav
      className={`${menuActive ? "pt-4 " : "py-4"} ${
        containerScrollPos > windowHeight
          ? "border-b-4 dark:border-white border-green-900"
          : "border-0"
      }  px-10 shadow-xl fixed w-full dark:bg-gray-900 dark:text-white bg-white sm:bg-transparent sm:backdrop-blur-sm z-10 backdrop-brightness-110 transition-all`}
    >
      <div className="flex items-center">
        <div className="flex items-center gap-4 container mx-auto justify-between sm:justify-start">
          <Brand />
          <span className="w-1 h-10 bg-green-900 dark:bg-white sm:block hidden"></span>
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
        <span className="text-2xl cursor-pointer hidden sm:inline">
          <ThemeButton />
        </span>
      </div>
      <ul
        className={`items-center gap-2 w-full transition-all ${
          !menuActive ? "hidden " : "flex"
        } flex-col border-y-2 border-slate-200 dark:border-slate-700 py-2 mt-8 sm:hidden`}
      >
        <div className="mobile ">
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
            ? "flex py-5 justify-center items-center sm:hidden"
            : "hidden"
        }
      >
        {/* <ThemeHandler HamburgerMenu={menuActive} /> */}
        <ThemeButton />
      </span>
    </nav>
  );
}
