import styled from 'styled-components';
import React from 'react';

interface IProps {
  showMenu: boolean;
  setShowMenu: (value: boolean | ((showMenu: boolean) => boolean)) => void;
}

export const AnimatedBtn = styled.div`
  display: none;
  position: fixed;
  width: 40px;
  height: 40px;
  transition-duration: 0.5s;
  padding: 0.5rem;
  left: 0;
  bottom: 0;
  margin: 1em;
  background-color: ${({ theme }) => theme.accent};
  border-radius: 50%;
  z-index: 15;
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    display: block;
  }

  &:before {
    position: absolute;
    content: '';
    display: flex;
    justify-items: center;
    align-items: center;
    left: 20%;
    top: 48%;
    width: 24px;
    height: 3px;
    background: ${({ theme }) => theme.body};
    transition: transform 0.25s 0.15s ease;
  }

  &:after {
    position: absolute;
    content: '';
    display: flex;
    justify-items: center;
    align-items: center;
    left: 20%;
    top: 48%;
    width: 24px;
    height: 3px;
    background: ${({ theme }) => theme.body};
    transition: transform 0.25s 0.15s ease;
  }

    & > .icon-left {
      width: 100%;
      height: 100%;
      transition: all 0.25s ease;

      &:before {
        position: absolute;
        content: '';
        top: 10px;
        width: 24px;
        height: 3px;
        background: ${({ theme }) => theme.body};
        transition: all 0.15s 0.15s ease;
      }
    }

    & > .icon-right {
      width: 100%;
      height: 100%;
      transition: all 0.25s ease;

      &:before {
        position: absolute;
        content: '';
        bottom: 10px;
        width: 24px;
        height: 3px;
        background: ${({ theme }) => theme.body};
        transition:  all 0.15s 0.15s ease;
      }
    }

    &.open {
      transform: translateY(0);
      visibility: visible;

      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }

      & > .icon-left:before {
        top: 20px;
        opacity: 0;
        visibility: hidden;
      }
      & > .icon-right:before {
        bottom: 20px;
        opacity: 0;
        visibility: hidden;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

const MobileMenuIcon: React.FC<IProps> = ({ showMenu, setShowMenu }) => {
  return (
    <AnimatedBtn
      className={showMenu ? 'open' : ''}
      onClick={() => setShowMenu(!showMenu)}
    >
      <div className='icon-left'></div>
      <div className='icon-right'></div>
    </AnimatedBtn>
  );
};
export default MobileMenuIcon;
