import { fetchAPI } from "@/lib/api";
import Document, { Html, Head, DocumentInitialProps, DocumentContext, NextScript, Main } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name="author" content="Andreas Wolff" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/svg" href="https://res.cloudinary.com/andreastx/image/upload/v1638042422/txfavicon_b4673fa7ac.svg" />
          <meta name="keywords" content="nextjs, react, frontend, developer, development, tech, blog, css, html, toux" />
          <meta name="description" content="Personal portfolio, Frontend Development, Blogging, Tech & Life" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
