import { NONAME } from "dns";
import styled from "styled-components";

export const StatsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #110e1b;
  color: white;
  border-radius: 5px;
  padding: 1em;
`;

export const CTALastProject = styled.a`
  text-decoration: none;
  margin: 1em 0;
`;

export const Title = styled.h1`
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 5px;
  color: #a3a3a3;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Content = styled.p`
  color: white;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
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
  font-size: 1rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const SongArtist = styled.p`
  color: #fff;
  margin-right: 5px;
`;

export const SongName = styled.p`
  color: #a3a3a3;
`;
