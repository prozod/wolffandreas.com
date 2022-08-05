import { NavigationLinks } from '@/constants/navigationlinks';
import Link from 'next/link';
import { MobileMenuWrapper, MobileNavItem } from './mobilenav.styles';
import { NavIcon, Anchor } from './navigation.styles';
import { ThemeCtxType } from 'pages/_app';

interface IProps {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((showMenu: boolean) => boolean)) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const MobileNav = ({ isOpen, setIsOpen, theme, setTheme }: IProps) => {
  const handleThemeChange = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  return (
    <MobileMenuWrapper className={isOpen ? 'open' : ''}>
      {NavigationLinks.map((item, idx) => {
        return (
          <Link key={idx} href={item.path}>
            <MobileNavItem onClick={() => setIsOpen(false)}>
              {item.title}
            </MobileNavItem>
          </Link>
        );
      })}
      <MobileNavItem aria-label='Change theme' onClick={handleThemeChange}>
        CHANGE THEME
      </MobileNavItem>
    </MobileMenuWrapper>
  );
};

export default MobileNav;
