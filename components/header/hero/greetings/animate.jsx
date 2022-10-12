export default function GreetingsAnimation({ children, animation }) {
  return <div className={animation}>{children}</div>;
}
