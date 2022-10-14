import GreeText from "./animate";
import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import SocialBrand from "../../../brand/social";
import Fiverr from "../../../brand/mediaLogos/fiverr";
import Button from "../../../button";

export default function HeroGreetings() {
  // const label = " Yeagram";
  // let myBrand = [];
  // for (let i = 1; i < label.length; i++) {
  //   const element = label[i];
  //   console.log(i);
  //   myBrand.push(
  //     <GreeText
  //       key={i}
  //       animation={`dark:animation-delay-${i}00  animation-delay-${i}00`}
  //     >
  //       {element}
  //     </GreeText>
  //   );
  // }

  return (
    <div className=" px-10 sm:p-0 greetings dark:text-white">
      <h2 className="font-semibold font-Merriweather tracking-tight text-4xl md:text-5xl lg:text-4xl text-green-900/70 dark:text-white/70 transition-all -mb-1">
        Hello im...
      </h2>
      <h1 className="font-[900] font-Patua_One  flex md:text-7xl lg:text-6xl xl:text-7xl  text-black dark:text-white animate-myBounce_scale mb-1">
        <GreeText animation="dark:animation-delay-100  animation-delay-100">
          Y
        </GreeText>
        <GreeText animation="dark:animation-delay-200  animation-delay-200">
          e
        </GreeText>
        <GreeText animation="dark:animation-delay-300  animation-delay-300">
          a
        </GreeText>
        <GreeText animation="dark:animation-delay-400  animation-delay-400">
          g
        </GreeText>
        <GreeText animation="dark:animation-delay-500  animation-delay-500">
          r
        </GreeText>
        <GreeText animation="dark:animation-delay-600  animation-delay-600">
          a
        </GreeText>
        <GreeText animation="dark:animation-delay-700  animation-delay-700">
          m.
        </GreeText>
      </h1>
      <div className="drop-shadow-none opacity-100 mb-1 inline-flex gap-1">
        <span className="opacity-50">or</span>
        <p className="underline opacity-80 dark:text-white text-green-900">
          {" "}
          Dimas Januardi.
        </p>
      </div>
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
        <SocialBrand href="https://www.fiverr.com/">
          <div className="relative w-[60px] h-[30px] flex items-center justify-center dark:fill-white">
            <Fiverr />
          </div>
        </SocialBrand>
      </div>
      <Button />
    </div>
  );
}
