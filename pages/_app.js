import "../styles/globals.css";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
