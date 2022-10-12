import Image from "next/image";
import Link from "next/link";
export default function Brand() {
  return (
    <Link href="/">
      <a>
        <div className="flex items-center group">
          <div className="relative overflow-hidden rounded-full w-10 h-10 ">
            <Image
              src="/logo.webp"
              layout="fill"
              alt="logo"
              className="group-hover:rotate-[360deg] duration-500 transition-all"
            />
          </div>
          <h3 className="ml-2 text-2xl">
            Yea<span className="font-bold">Gram</span>
          </h3>
        </div>
      </a>
    </Link>
  );
}
