import styled from 'styled-components';
import { FaGripLines, FaGripLinesVertical } from 'react-icons/fa';
import React from 'react';

interface IProps {
  showMenu: boolean;
  setShowMenu: (value: boolean | ((showMenu: boolean) => boolean)) => void;
}

export const IconWrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.accent};
  height: auto;
  padding: 0.5em;
  left: 0;
  bottom: 0;
  margin: 1em;
  border-radius: 50%;
  border-right: 1px solid ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.body};
  transform: rotate(0deg);
  transition: all 0.25s ease-in-out;

  z-index: 99;

  @media (max-width: 768px) {
    display: flex;
  }
`;

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
    transition: transform 0.25s 0.25s ease;
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
    transition: transform 0.25s 0.25s ease;
  }

    & > .icon-left {
      width: 100%;
      height: 100%;
      transition: all 0.5s ease;

      &:before {
        position: absolute;
        content: '';
        top: 10px;
        width: 24px;
        height: 3px;
        background: ${({ theme }) => theme.body};
        transition: opacity 0.5s 0.5s ease;
      }
    }

    & > .icon-right {
      width: 100%;
      height: 100%;
      transition: all 0.5s ease;

      &:before {
        position: absolute;
        content: '';
        bottom: 10px;
        width: 24px;
        height: 3px;
        background: ${({ theme }) => theme.body};
        transition: opacity 0.5s 0.5s ease;
      }
    }

    &.open {
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }

      & > .icon-left:before {
        opacity: 0;
        visibility: hidden;
      }
      & > .icon-right:before {
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
