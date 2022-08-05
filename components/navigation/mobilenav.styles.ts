import styled from 'styled-components';

// transform: translateY(100%) translateX(-100%) scale(0.9);
export const MobileMenuWrapper = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  transform: translateY(100%);
  visibility: hidden;
  height: fit-content;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.body};
  outline: 6px solid ${({ theme }) => theme.accent};
  padding: 2em;
  color: ${({ theme }) => theme.text};
  z-index: 11;
  transition: all 0.25s ease-in-out;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileNavItem = styled.a`
  color: ${({ theme }) => theme.text};
  font-family: 'Inter', sans-serif;
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
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    letter-spacing: 3px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: transparent;
    right: -5px;
    bottom: 50%;
    border-radius: 50%;
    outline: 3px solid ${({ theme }) => theme.accent};
  }
`;
