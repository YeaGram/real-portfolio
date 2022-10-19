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
  const [button, setButton] = useState("");
  // useEffect(() => {
  //   const btnClass = document.querySelector(".btnMe");
  //   const btnClassProperty =
  //     getComputedStyle(btnClass).getPropertyValue("--theems");

  //   let btnChange = () => {
  //     return btnClass.style.setProperty(btnClassProperty, "#eeeeee");
  //   };
  // }, [button]);

  return (
    <>
      <Link href="#">
        <a
          className={`bg-sky-800 btnMe relative mt-4 font-semibold   transition-all drop-shadow-[0px_5px_8px_rgba(0,0,0,.6)] hover:drop-shadow-[0px_10px_8px_rgba(0,0,0,.4)] hover:-translate-y-1 border-b-[5px] border-sky-900  w-fit rounded-lg  flex items-center justify-center bg-gradient-to-b text-white/70 hover:text-white py-2 px-10 focus:ring-2 ring-sky-800 ring-offset-2 `}
        >
          <p className="">My Project</p>
        </a>
      </Link>
    </>
  );
}
