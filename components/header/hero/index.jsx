import Image from "next/image";
import MeIlustration from "../../me-ilustration";
import HeroGreetings from "./greetings";
import { useEffect } from "react";

export default function Hero() {
  return (
    <div className="overflow-hidden relative w-screen h-screen flex">
      <div className="flex-1">
        <div className="flex items-center justify-center w-full h-full">
          <HeroGreetings />
        </div>
        {/* bg */}
        <div
          className="absolute inset-0 -z-10 opacity-30 dark:brightness-[40%] transition-all duration-700 dark:opacity-100"
          id="hero"
        >
          <Image
            alt="hero-image"
            layout="fill"
            src="/background.jpg"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex-1 lg:block hidden relative -mb-14">
        <div className="relative h-full w-11/12 mx-auto ">
          <div className="flex items-end justify-center h-full ">
            <MeIlustration />
          </div>
        </div>
      </div>
    </div>
  );
}
