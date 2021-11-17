import React from "react";
import Link from "next/link";
import { Categories } from "@/interfaces/interfaces";
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
            <Link href="/">
              <Anchor>Home</Anchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
              <Anchor>About</Anchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
              <Anchor>Work</Anchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/blog">
              <Anchor>Blog</Anchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
              <Anchor>Music</Anchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
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
