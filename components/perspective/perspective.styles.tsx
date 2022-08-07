import styled, { keyframes } from 'styled-components';

const planeMoveBot = keyframes`
  from {
    background-position: 0px -100px,0px 0px;
  }
  to {
    background-position: 0px 0px, 100px 0px;
  }
`;

export const PerspectiveWrapper = styled.div`
  display: block;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 auto;
  perspective: 360px;
  perspective-origin: 50% 50%;
  z-index: -1;
  opacity: 0.05;

  @media (max-height: 350px) {
    perspective: 360px - 150;
  }
`;

export const PerspectiveBottomPlane = styled.div`
  width: 200%;
  height: 150%;
  position: absolute;
  bottom: -30%;
  left: -50%;
  background-image: -webkit-linear-gradient(
      ${({ theme }) => theme.text} 1px,
      transparent 1px
    ),
    -webkit-linear-gradient(left, ${({ theme }) => theme.text} 1px, transparent
          1px);
  background-size: 100px 100px, 100px 100px;
  background-position: -1px -1px, -1px -1px;
  transform: rotateX(90deg);
  animation: ${planeMoveBot} 5s infinite linear;

  @media (prefers-reduced-motion) {
    animation: none;
  }
`;
