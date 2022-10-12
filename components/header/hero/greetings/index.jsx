import GreetingsAnimation from "./animate";
import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import SocialBrand from "../../../brand/social";
export default function HeroGreetings() {
  //   let y = [];
  //   let char = "Yeagram";
  //   for (let i = 0; i < char.length; i++) {
  //     const elmt = char.charAt(i).toUpperCase();
  //     y.push(
  //       <GreetingsAnimation
  //         key={i}
  //         animation={`animate-[myBounce_1s_ease_infinite] animation-delay-${
  //           i + 1
  //         }00`}
  //       >
  //         {elmt}
  //       </GreetingsAnimation>
  //     );
  //   }
  return (
    <div className=" w-full sm:w-auto px-10 sm:p-0 greetings">
      <h2 className="font-semibold xl:text-5xl text-4xl md:text-6xl lg:text-5xl text-black/40 leading-8">
        Hello im...
      </h2>
      <h1 className="font-bold flex md:text-7xl lg:text-6xl xl:text-7xl text-6xl text-black animate-myBounce_scale">
        {/* <span className="inline-flex">{y}</span> */}
        <GreetingsAnimation animation="animate-myBounce animation-delay-100">
          Y
        </GreetingsAnimation>
        <GreetingsAnimation animation="animate-myBounce animation-delay-200">
          e
        </GreetingsAnimation>
        <GreetingsAnimation animation="animate-myBounce animation-delay-300">
          a
        </GreetingsAnimation>
        <GreetingsAnimation animation="animate-myBounce animation-delay-400">
          g
        </GreetingsAnimation>
        <GreetingsAnimation animation="animate-myBounce animation-delay-500">
          r
        </GreetingsAnimation>
        <GreetingsAnimation animation="animate-myBounce animation-delay-600">
          a
        </GreetingsAnimation>
        <GreetingsAnimation animation="animate-myBounce animation-delay-700">
          m.
        </GreetingsAnimation>
      </h1>
      <p className="drop-shadow-none opacity-100 mt-4 mb-1 inline-flex gap-1">
        <span className="opacity-50">or</span>
        <p className="underline opacity-80"> Dimas Januardi.</p>
        {/* <span className="italic text-xs opacity-60">
          {" "}
          im using username because my full name is too long!
        </span> */}
      </p>
      <div className="text-3xl gap-1 flex ">
        <SocialBrand href="https://www.instagram.com/">
          <RiInstagramFill />
        </SocialBrand>
        <SocialBrand href="https://www.facebook.com/">
          <RiFacebookBoxFill />
        </SocialBrand>
        <SocialBrand href="https://www.linkedin.com/">
          <RiLinkedinBoxFill />
        </SocialBrand>
      </div>
    </div>
  );
}
