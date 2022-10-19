import Content from "../components/content";
import Header from "../components/header";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../components/footer";

export default function Home() {
  // const router = useRouter().asPath;
  // console.log(useRouter());
  // const [Aspath, setAspath] = useState("");
  // console.log(router.slice(2));
  // useEffect(() => {
  //   setAspath(router.toUpperCase());
  // }, [router]);

  return (
    <>
      <Head>
        <link rel="icon" href="/asset/logo.webp" />
        <title>YeaGram</title>
      </Head>

      <div
        className="overflow-y-scroll scroll-smooth scrollbar-thin dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-900 dark:hover:scrollbar-track-gray-500 snap-y snap-mandatory h-screen"
        id="screenContainer"
      >
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}
