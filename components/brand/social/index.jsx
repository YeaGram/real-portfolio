import Link from "next/link";

export default function SocialBrand({ children, href }) {
  return (
    <Link href={href}>
      <a target="_blank" className="hover:opacity-60 transition-all">
        {children}
      </a>
    </Link>
  );
}
