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

type Theme = 'light' | 'dark';

export type ThemeCtxType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

function MyApp({ Component, pageProps }: AppProps) {
  const [showMenu, setShowMenu] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>('dark');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Head>
        <title>Andreas Wolff</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
        <meta
          name='description'
          content='Personal portfolio, Web Development, Blogging, Tech & Life'
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
        <Footer />
      </Wrapper100>
    </ThemeProvider>
  );
}

export default MyApp;
