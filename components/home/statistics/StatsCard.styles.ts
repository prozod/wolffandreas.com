import styled from 'styled-components';

// background-color: #222222;
export const StatsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body};
  border: 1px solid rgba(0, 0, 0, 0.05);
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.05));
  border-radius: 5px;
  padding: 1em;
`;

export const CTALastProject = styled.a`
  text-decoration: none;
  margin: 1em 0;
`;

export const Title = styled.h1`
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Content = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  span {
    line-height: 5px;
    margin-right: 5px;
    width: fit-content;
  }
`;

export const CardContent = styled.div`
  display: flex;
`;

export const Song = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  font-size: 0.9rem;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const SongArtist = styled.p`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

export const SongName = styled.p`
  color: #a3a3a3;
`;

export const SongBars = styled.span`
  position: relative;
  width: 3px;
  background-color: ${({ theme }) => theme.text};
  height: 12px;
  -webkit-animation: Bars 1s infinite linear;
  border-radius: 1px;
  animation: Bars 1s infinite linear;
  margin-right: 1.4rem;
  top: 1px;
  left: 9px;

  &:after,
  &:before {
    content: '';
    position: absolute;
    border-radius: 2px;
    width: inherit;
    height: inherit;
    border: inherit;
    background-color: inherit;
    top: -1px;
  }
  &:before {
    left: -7px;
    -webkit-animation: BarsBefore 1s infinite linear;
    animation: BarsBefore 1s infinite linear;
  }
  &:after {
    right: -7px;
    -webkit-animation: BarsAfter 1s infinite linear;
    animation: BarsAfter 1s infinite linear;
  }

  @keyframes BarsBefore {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1.25);
    }
    50% {
      transform: scale(1, 0.75);
    }
    75% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  @keyframes Bars {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 1.25);
    }
    75% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  @keyframes BarsAfter {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 0.75);
    }
    75% {
      transform: scale(1, 1.25);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;
