import Content from "../components/content";
import Header from "../components/header";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>YeaGram</title>
      </Head>

      <div
        className="overflow-y-scroll scrollbar-thin dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-900 dark:hover:scrollbar-track-gray-500 snap-y snap-mandatory h-screen"
        id="screenContainer"
      >
        <Header />
        <Content />

        {/* <div className="scrollChild bg-red-500">Up</div>
        <div className="scrollChild bg-yellow-500">Middle</div>
        <div className="scrollChild bg-red-500">Middle</div>
        <div className="scrollChild bg-yellow-500">Down</div> */}
      </div>
    </>
  );
}
