import styled from "styled-components";

export const StatsWrapper = styled.section`
  display: flex;
  margin-top: 5em;
  margin-bottom: 3em;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1em;
  }
`;

export const StatsTitle = styled.h1`
  color: white;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const LiveStats = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.1;

  @media (max-width: 768px) {
    margin-top: 1em;
  }
`;

export const LiveStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0;
  padding: 1em;
  background: lightsalmon;
  border-radius: 10px;
  background: #201b2f;
`;

export const FeaturedPosts = styled.div`
  display: flex;
  flex: 2;
  margin-right: 10px;
  flex-direction: column;

  @media (max-width: 1000px) {
    margin: 0;
  }
`;

export const CTALink = styled.a`
  text-decoration: none;
  color: #9a9a9a;
  margin: 0 auto;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    background: #201b2f;
    color: #fff;
  }
`;
