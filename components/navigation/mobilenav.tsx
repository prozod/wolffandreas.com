import { NavigationLinks } from '@/constants/navigationlinks';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import ActiveLink from './activelink';
import { MobileMenuWrapper, MobileNavItem } from './mobilenav.styles';
import { Anchor } from './navigation.styles';

interface IProps {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((showMenu: boolean) => boolean)) => void;
  theme: 'light' | 'dark' | null;
  setTheme: (theme: 'light' | 'dark') => void;
}

const MobileNav = ({ isOpen, setIsOpen, theme, setTheme }: IProps) => {
  const handleThemeChange = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark');

  return (
    <MobileMenuWrapper className={isOpen ? 'open' : ''}>
      {NavigationLinks.map((item, idx) => {
        return (
          <MobileNavItem onClick={() => setIsOpen(false)} key={idx}>
            <ActiveLink href={item.path} passHref>
              <Anchor>{item.title}</Anchor>
            </ActiveLink>
          </MobileNavItem>
        );
      })}
      <MobileNavItem aria-label='Change theme' onClick={handleThemeChange}>
        CHANGE THEME
      </MobileNavItem>
    </MobileMenuWrapper>
  );
};

export default MobileNav;
