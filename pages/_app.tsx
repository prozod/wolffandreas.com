import type { AppProps } from "next/app";
import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { fetchAPI } from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";
import { GlobalStyle } from "./GlobalStyle.styles";
import { GlobalCtxProps } from "@/interfaces/interfaces";

const defaultProps = {
  updated_at: "",
  created_at: "",
  id: 0,
  siteName: "",
  defaultSeo: {
    id: 0,
    metaDescription: "",
    metaTitle: "",
    shareImage: "",
  },
  favicon: { url: "" },
};

export const GlobalContext = createContext<GlobalCtxProps>(defaultProps);

function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;

  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>

      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI("/global");

  return { ...appProps, pageProps: { global } };
};

export default MyApp;
