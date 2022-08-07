import {
  FooterWrapper,
  FooterItem,
  FooterLinks,
  FooterInfo,
  Copyright,
} from './footer.styles';
import Link from 'next/link';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinks>
        <FooterItem>
          <a href='https://github.com/t0ux'>GitHub</a>
        </FooterItem>

        <FooterItem>
          <a href='https://twitter.com/andreastoux'>Twitter</a>
        </FooterItem>

        <FooterItem>
          <a href='https://linkedin.com/in/andreaswolff96'>LinkedIn</a>
        </FooterItem>
      </FooterLinks>
      <FooterInfo>
        <Copyright>
          <a href='/'>Andreas Wolff © 2022</a>
        </Copyright>
      </FooterInfo>
    </FooterWrapper>
  );
};

export default Footer;
