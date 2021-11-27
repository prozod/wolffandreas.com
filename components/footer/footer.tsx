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
        <Copyright>
          <a href="/">Andreas 'TOUX' Wolff © 2021</a>
        </Copyright>
      </FooterInfo>
    </FooterWrapper>
  );
};

export default Footer;
