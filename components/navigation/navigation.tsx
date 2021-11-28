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
import { NavigationLinks } from "@/constants/navigationlinks";
import ActiveLink from "./activelink";

const Navigation = () => {
  return (
    <Wrapper>
      <NavContainer>
        <NavItems>
          {NavigationLinks.map((item, idx) => {
            return (
              <NavItem key={idx}>
                <ActiveLink href={item.path} passHref>
                  <Anchor>{item.title}</Anchor>
                </ActiveLink>
              </NavItem>
            );
          })}
        </NavItems>

        <NavIcons>
          <NavIcon>
            <Anchor href="https://www.linkedin.com/in/andreaswolff96/" aria-label="LinkedIn Page" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </Anchor>
          </NavIcon>
          <NavIcon>
            <Anchor href="https://www.github.com/andreastoux" aria-label="GitHub Page" target="_blank" rel="noreferrer">
              <FaGithub />
            </Anchor>
          </NavIcon>
          <NavIcon>
            <Anchor href="mailto: hello@toux.io" aria-label="Email">
              <FaEnvelope />
            </Anchor>
          </NavIcon>
        </NavIcons>
      </NavContainer>
    </Wrapper>
  );
};

export default Navigation;
