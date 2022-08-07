import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../GlobalStyle.styles';
import { darkTheme, lightTheme } from '@/constants/theme';
import React from 'react';
import Navigation from '@/components/navigation/navigation';
import { Wrapper100 } from '@/constants/basic.styles';
import ScrollToTop from '@/components/scroll/scrollToTop';
import MobileMenuIcon from '@/components/navigation/mobileMenuIcon';
import MobileNav from '@/components/navigation/mobilenav';
import Footer from '@/components/footer/footer';
import Perspective from '@/components/perspective/perspective';

type Theme = 'light' | 'dark' | null;

export type ThemeCtxType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

function MyApp({ Component, pageProps }: AppProps) {
  const [showMenu, setShowMenu] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>('dark');

  React.useEffect(() => {
    if (localStorage.getItem('theme-preference')) {
      setTheme(localStorage.getItem('theme-preference') as Theme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Head>
        <title>Andreas Wolff</title>
        <meta
          name='description'
          content='Frontend engineer passionate about user interfaces and design systems.'
        />
        <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='twitter:site' content='@andreastoux' />
        <meta name='twitter:creator' content='@andreastoux' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/andreastx/image/upload/v1659904600/ogimg_igqvbh.jpg'
        />
        <meta property='og:title' content='Andreas Wolff' />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content='Frontend engineer passionate about user interfaces and design systems.'
        />
        <meta property='og:url' content='https://wolffandreas.com' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/andreastx/image/upload/v1659904600/ogimg_igqvbh.jpg'
        />
      </Head>
      <Wrapper100 className='AppWrapper'>
        <ScrollToTop />
        <MobileMenuIcon showMenu={showMenu} setShowMenu={setShowMenu} />
        <MobileNav
          isOpen={showMenu}
          setIsOpen={setShowMenu}
          theme={theme}
          setTheme={setTheme}
        />
        <Navigation theme={theme} setTheme={setTheme} />
        <Component {...pageProps} />
        <Perspective />
        <Footer />
      </Wrapper100>
    </ThemeProvider>
  );
}

export default MyApp;
