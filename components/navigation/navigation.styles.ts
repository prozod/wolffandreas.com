import styled from "styled-components";

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
  color: white;
  text-decoration: none;
  transition: all 0.15s ease;

  

  &:hover {
    color: #a88ff2;
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

  [data-active="true"] {
    color: #a88ff2;
  }
`;

export const NavIcons = styled.div`
  display: flex;
  color: white;
`;

export const NavIcon = styled.span`
  margin-left: 15px;
`;
