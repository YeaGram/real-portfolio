export default function GreetingsAnimation({ children, animation }) {
  return (
    <div
      className={`${animation} text-5xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-8xl 2xl:text-9xl`}
    >
      {children}
    </div>
  );
}
