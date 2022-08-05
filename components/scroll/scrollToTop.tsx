import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import styled, { css } from 'styled-components';

interface IProps {
  toggleOpacity?: boolean;
}

const ScrollWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 1em;
  z-index: 10;
  width: fit-content;
  height: fit-content;
`;

const ArrowUp = styled.button<IProps>`
  display: flex;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 0.7em;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  outline: 2px solid ${({ theme }) => theme.accent};
  cursor: pointer;
  opacity: 0;
  transform: translateY(130%);

  ${({ toggleOpacity }) =>
    toggleOpacity &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const ScrollToTop: React.FC<IProps> = ({ toggleOpacity }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleArrowVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollPageToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleArrowVisibility);

    return () => {
      window.removeEventListener('scroll', toggleArrowVisibility);
    };
  }, []);

  return (
    <ScrollWrapper>
      <ArrowUp
        toggleOpacity={isVisible}
        aria-label='Scroll up button'
        type='button'
        onClick={scrollPageToTop}
      >
        <AiOutlineArrowUp size={24} />
      </ArrowUp>
    </ScrollWrapper>
  );
};

export default ScrollToTop;
