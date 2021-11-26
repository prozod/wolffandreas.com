import type { AppProps } from "next/app";
import Head from "next/head";

import { GlobalStyle } from "../GlobalStyle.styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>TOUX.io</title>
        <meta name="description" content="Personal portfolio, Frontend Development, Blogging, Tech & Life" />
        <meta name="keywords" content="nextjs, react, frontend, developer, development, tech, blog, css, html, toux" />
        <meta name="author" content="Andreas Wolff" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
