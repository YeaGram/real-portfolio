import Link from "next/link";
import styles from "./buttton.module.css";
import { useEffect, useState } from "react";
import { useMousePos } from "../myFunction";

export default function Button() {
  //   const mousePos = useMousePos("thisButton");
  //   const [renderEl, setRenderEl] = useState([]);
  //   console.log(mousePos);

  //   useEffect(() => {
  //     setRenderEl(<div className="lol">{mousePos.posX}</div>);
  //   }, []);

  return (
    <>
      <Link href="#">
        <a
          id="thisButton"
          className="relative mt-4  transition-all drop-shadow-[0px_5px_8px_rgba(0,0,0,.5)] hover:drop-shadow-[0px_10px_8px_rgba(0,0,0,.6)] hover:-translate-y-1 border-b-[5px] border-green-900 text-white py-2 px-10 bg-green-800 w-fit rounded-lg  flex items-center justify-center bg-gradient-to-b from-green-700 to-green-800"
        >
          <p className="">Lets Explore</p>
        </a>
      </Link>
    </>
  );
}
