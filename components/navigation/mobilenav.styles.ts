import styled from "styled-components";

export const MobileMenuWrapper = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  background-color: #110e1b;
  color: white;
  /* border-left: 1px solid #8273af;
  border-right: 1px solid #8273af; */
  border-bottom: 5px solid #fff;
  outline: 5px solid #8273af;
  padding: 1em 1.5em;
  position: absolute;
  left: 0;
  z-index: 10;
  /* border-radius: 0 0 10px 10px; */

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileNavItem = styled.a`
  color: white;
  font-family: "IBM Plex Sans", sans-serif;
  text-decoration: none;
  padding: 10px 10px;
  width: fit-content;
  text-transform: uppercase;
  position: relative;
  padding-left: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    color: #8273af;
    letter-spacing: 3px;
  }
  

  &:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: white;
    left: 0;
    border-radius: 50%;
    outline: 3px solid #8273af;
  }
`;
