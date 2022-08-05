import { fetchAPI } from '@/lib/api';
import Document, {
  Html,
  Head,
  DocumentInitialProps,
  DocumentContext,
  NextScript,
  Main,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
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
          <meta name='author' content='Andreas Wolff' />
          <meta name='darkreader-lock' />
          <link
            rel='icon'
            type='image/png'
            href='https://res.cloudinary.com/andreastx/image/upload/v1659649824/favicon_zldufi.png'
          />
          <meta
            name='keywords'
            content='nextjs, react, frontend, developer, development, tech, blog, css, html, toux'
          />
          <meta
            name='description'
            content='Personal portfolio, Web Development, Blogging, Tech & Life'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500&family=JetBrains+Mono:wght@500&family=Lato:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
