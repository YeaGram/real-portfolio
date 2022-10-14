import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "../myFunction";

export default function ThemeButton() {
  const [colorTheme, setTheme] = useTheme();

  return (
    <>
      {colorTheme === "light" ? (
        <div onClick={() => setTheme("light")}>
          <MdDarkMode className="text-3xl sm:text-4xl" />
        </div>
      ) : (
        <div onClick={() => setTheme("dark")}>
          <MdLightMode className="text-3xl sm:text-4xl" />
        </div>
      )}
    </>
  );
}
