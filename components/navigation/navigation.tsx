import React, { useContext, useState } from 'react';
import {
  Wrapper,
  NavContainer,
  NavItems,
  NavItem,
  NavIcons,
  NavIcon,
  Anchor,
} from './navigation.styles';
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { NavigationLinks } from '@/constants/navigationlinks';
import ActiveLink from './activelink';
import { ThemeCtxType } from 'pages/_app';

const Navigation = ({ theme, setTheme }: ThemeCtxType) => {
  const handleThemeChange = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark');

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
            <Anchor
              href='https://www.linkedin.com/in/andreaswolff96/'
              aria-label='LinkedIn Page'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn />
            </Anchor>
          </NavIcon>
          <NavIcon>
            <Anchor
              href='https://www.github.com/andreastoux'
              aria-label='GitHub Page'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub />
            </Anchor>
          </NavIcon>
          <NavIcon>
            <Anchor href='mailto: hello@toux.io' aria-label='Email'>
              <FaEnvelope />
            </Anchor>
          </NavIcon>
          <NavIcon>
            <Anchor aria-label='Change theme' onClick={handleThemeChange}>
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </Anchor>
          </NavIcon>
        </NavIcons>
      </NavContainer>
    </Wrapper>
  );
};

export default Navigation;
