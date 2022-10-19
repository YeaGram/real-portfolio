import NavigationBar from "../navigation";
import Hero from "./hero";

export default function Header() {
  return (
    <header className="overflow-x-hidden snap-start h-screen w-full" id="home">
      <NavigationBar />
      <Hero />
    </header>
  );
}
