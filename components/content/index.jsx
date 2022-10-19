import About from "./about";
import MyProject from "./myproject";
import Contact from "./contact";

export default function Content() {
  return (
    <>
      <div className="w-full h-screen snap-start flex flex-col justify-center items-center">
        <div className="flex items-center flex-col justify-center">
          <h2 className="font-Merriweather text-2xl">Profile</h2>
          <blockquote className="italic text-gray-600 dark:text-white/50">
            little piece about me
          </blockquote>
        </div>
        <About />
      </div>
      <div className="w-full h-fit snap-start flex flex-col justify-center items-center">
        <div className="flex items-center flex-col justify-center mt-32">
          <h2 className="font-Merriweather text-2xl">MyProject</h2>
          <blockquote className="italic text-gray-600 dark:text-white/50">
            or mydaylife :D
          </blockquote>
        </div>
        <MyProject />
        <h4 className="font-Merriweather pt-5 pb-10 font-bold opacity-60">
          And Many More!!
        </h4>
      </div>
      <div className="w-full h-fit snap-start flex flex-col justify-center items-center">
        <div className="flex items-center flex-col justify-center mt-32">
          <h2 className="font-Merriweather text-2xl">Contact</h2>
          <blockquote className="italic text-gray-600 dark:text-white/50">
            or mydaylife :D
          </blockquote>
        </div>
        <Contact />
      </div>
    </>
  );
}
