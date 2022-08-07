import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 3em 0;
`;

export const Anchor = styled.a`
  text-decoration: none;
  transition: all 0.15s ease;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: ${({ theme }) => theme.accent};
    cursor: pointer;
  }
`;

export const ThemeBtn = styled.button`
  transition: all 0.15s ease;
  color: ${({ theme }) => theme.text};
  background: none;
  padding: 0;
  margin: 0;
  border: none;

  &:hover {
    color: ${({ theme }) => theme.accent};
    cursor: pointer;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  list-style: none;
  color: white;
`;

export const NavItem = styled.li`
  margin-right: 15px;
  transition: all 0.15s ease;

  [data-active='true'] {
    color: ${({ theme }) => theme.accent};
  }
`;

export const NavIcons = styled.div`
  display: flex;
`;

export const NavIcon = styled.span`
  margin-left: 15px;
`;
