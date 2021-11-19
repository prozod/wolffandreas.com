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

const Navigation = () => {
  return (
    <Wrapper>
      <NavContainer>
        <NavItems>
          {NavigationLinks.map((item, idx) => {
            return (
              <NavItem key={idx}>
                <Link href={item.path} passHref>
                  <Anchor>{item.title}</Anchor>
                </Link>
              </NavItem>
            );
          })}
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
