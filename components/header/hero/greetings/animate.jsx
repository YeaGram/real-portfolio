export default function GreeText({ children, animation }) {
  return (
    <div
      className={`${animation} animate-myBounce_light dark:animate-myBounce_dark text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-8xl 2xl:text-9xl`}
    >
      {children}
    </div>
  );
}
