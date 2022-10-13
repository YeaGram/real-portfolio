import Link from "next/link";

export default function NavigationBarItems({ url, children }) {
  return (
    <Link href="/">
      <li
        className={`py-2 sm:px-3 text-lg font-light transition-all duration-300 hover:opacity-100 hover:underline opacity-40  hover:scale-110 hover:font-bold font-Merriweather`}
      >
        <span className="hidden sm:flex">{children}</span>
        <span className="sm:hidden flex items-center justify-center gap-2 text-2xl  w-32">
          <div className="w-10 text-center">{children[0]}</div>
          <div className="w-32 ">{children[1]}</div>
        </span>
      </li>
    </Link>
  );
}
