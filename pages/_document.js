import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className="overflow-hidden dark:bg-gray-800 dark:text-white ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
