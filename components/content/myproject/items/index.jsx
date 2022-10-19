import Image from "next/image";
import Link from "next/link";

export default function ProjectItems({ imgsrc, prelink }) {
  return (
    <div className="relative h-96 shadow-lg mt-10 group">
      <span className="absolute flex items-center justify-center inset-0 z-10 opacity-0 bg-black/40 group-hover:opacity-80 transition-all text-inherit">
        <a href={prelink} target="_blank" rel="noreferrer">
          See Preview
        </a>
      </span>
      <Image
        alt="project-image"
        layout="fill"
        src={imgsrc}
        className="object-cover"
      />
    </div>
  );
}
