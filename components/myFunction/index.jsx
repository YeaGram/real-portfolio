import { useState, useEffect } from "react";

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

export function useContainerScrool() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  useEffect(() => {
    const container = document.getElementById("screenContainer");

    container.addEventListener("scroll", () => {
      handleContainerHeight(container.scrollTop);
    });
  }, []);

  const handleContainerHeight = (height) => {
    setClientWindowHeight(height);
  };

  return clientWindowHeight;
}
