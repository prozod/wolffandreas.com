import type { AppProps } from "next/app";
import Head from "next/head";

import { GlobalStyle } from "./GlobalStyle.styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      {/* <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
