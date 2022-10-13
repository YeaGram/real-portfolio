import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "../myFunction";

export default function ThemeButton() {
  const [colorTheme, setTheme] = useTheme();

  return (
    <>
      {colorTheme === "light" ? (
        <div onClick={() => setTheme("light")}>
          <MdDarkMode />
        </div>
      ) : (
        <div onClick={() => setTheme("dark")}>
          <MdLightMode />
        </div>
      )}
    </>
  );
}
