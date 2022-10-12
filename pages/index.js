import Content from "../components/content";
import Header from "../components/header";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Yeagram</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
      <div>
        <Header />
        <Content />
      </div>
    </>
  );
}
