import NavigationBar from "../navigation";
import Hero from "./hero";

export default function Header() {
  return (
    <header className="overflow-x-hidden">
      <NavigationBar />
      <Hero />
    </header>
  );
}
