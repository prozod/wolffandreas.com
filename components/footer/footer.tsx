import {
  FooterWrapper,
  FooterItem,
  FooterLinks,
  FooterInfo,
  Copyright,
} from "./footer.styles";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinks>
        <FooterItem>
          <Link href="/">
            <a>GitHub</a>
          </Link>
        </FooterItem>

        <FooterItem>
          <Link href="/">
            <a>Twitter</a>
          </Link>
        </FooterItem>

        <FooterItem>
          <Link href="/">
            <a>LinkedIn</a>
          </Link>
        </FooterItem>
      </FooterLinks>
      <FooterInfo>
        <Copyright>Andreas 'TOUX' Wolff</Copyright>
      </FooterInfo>
    </FooterWrapper>
  );
};

export default Footer;
