import { useState, useEffect } from "react";

// !MousePosition Configuration
export function useMousePos(elm) {
  const [posX, setPosX] = useState("");
  const [posY, setPosY] = useState("");

  useEffect(() => {
    const elementTarget = document.querySelector(elm);

    elementTarget.addEventListener("mousemove", (e) => {
      let x = elementTarget.getBoundingClientRect();
      setPosX(Math.round(e.clientX - x.left));
      setPosY(Math.round(e.clientY - x.top));
    });

    return removeEventListener("mousemove", () => {});
  }, []);

  return { posX: posX, posY: posY };
}

// !Theme Configuration
export function useTheme() {
  // const isMobile = HamburgerMenu === undefined ? "Desktop" : "Mobile";

  const [theme, setTheme] = useState("light");
  const inactiveTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(inactiveTheme);
    root.classList.add(theme);
  }, [inactiveTheme, theme]);

  return [inactiveTheme, setTheme];
}

// !ScrollConfiguration
export function useContainerScrool() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [containerHeight, setContainerHeight] = useState("");

  useEffect(() => {
    const container = document.getElementById("screenContainer");

    const windowHeight = window.innerHeight;
    setClientWindowHeight(windowHeight);

    container.addEventListener("scroll", () => {
      handleContainerHeight(container.scrollTop);
    });

    return removeEventListener("scroll", () => {
      handleContainerHeight();
    });
  }, []);

  const handleContainerHeight = (height) => {
    setContainerHeight(height);
  };

  return [containerHeight, clientWindowHeight];
}
