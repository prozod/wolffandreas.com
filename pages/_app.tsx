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
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
