import Image from "next/image";
import Link from "next/link";
import MeLogo from "../me-ilustration/me-logo";
export default function Brand() {
  return (
    <Link href="/">
      <a>
        <div className="flex items-center group">
          <div className="relative overflow-hidden rounded-full w-10 h-10 ">
            <Image
              src="/asset/logo.webp"
              layout="fill"
              alt="logo"
              className="group-hover:rotate-[360deg] duration-500 transition-all"
            />
          </div>
          <h3 className="ml-2 w-40 flex items-center text-2xl font-Merriweather tracking-tighter">
            {/* Yea<span className="font-bold">Gram</span> */}
            <MeLogo />
          </h3>
        </div>
      </a>
    </Link>
  );
}
