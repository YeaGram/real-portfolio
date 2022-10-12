import { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
export default function ThemeHandler({ HamburgerMenu }) {
  const isMobile = HamburgerMenu === undefined ? "Desktop" : "Mobile";

  const [theme, setTheme] = useState("light");
  const inactiveTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(inactiveTheme);
    root.classList.add(theme);
  }, [inactiveTheme, theme]);

  return (
    <span
      className={`text-2xl cursor-pointer w-full flex justify-center gap-2 pt-4 sm:gap-0 sm:p-0
       ${HamburgerMenu ? "" : ""}
      `}
      onClick={() => {
        setTheme(inactiveTheme);
      }}
    >
      <span className={isMobile == "Mobile" ? "block text-sm" : "hidden"}>
        Theme : <b>{theme}</b>
      </span>
      {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
    </span>
  );
}
