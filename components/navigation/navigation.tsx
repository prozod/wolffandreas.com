import React from "react";
import Link from "next/link";
import {
  Wrapper,
  NavContainer,
  NavItems,
  NavItem,
  NavIcons,
  NavIcon,
  Anchor,
} from "./navigation.styles";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Navigation = () => {
  return (
    <Wrapper>
      <NavContainer>
        <NavItems>
          <NavItem>
            <Link href="/" passHref>
              <Anchor>Home</Anchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/" passHref>
              <Anchor>About</Anchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/" passHref>
              <Anchor>Work</Anchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/blog" passHref>
              <Anchor>Blog</Anchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/" passHref>
              <Anchor>Music</Anchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/" passHref>
              <Anchor>Contact</Anchor>
            </Link>
          </NavItem>
        </NavItems>

        <NavIcons>
          <NavIcon>
            <Anchor>
              <FaLinkedinIn />
            </Anchor>
          </NavIcon>
          <NavIcon>
            <Anchor>
              <FaGithub />
            </Anchor>
          </NavIcon>
          <NavIcon>
            <Anchor>
              <FaEnvelope />
            </Anchor>
          </NavIcon>
        </NavIcons>
      </NavContainer>
    </Wrapper>
  );
};

export default Navigation;
