import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemedStyledInterface {
    body: string;
    body2: string;
    text: string;
    text_secondary: string;
    accent: string;
    border: string;
    background: string;
    background_secondary: string;
    scrollbarbg: string;
    scrollbar: string;
    divider: string;
    blogpostsubtitle: string;
  }
}
