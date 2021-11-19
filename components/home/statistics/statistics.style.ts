import styled from "styled-components";

export const StatsWrapper = styled.section`
  display: flex;
  margin-top: 5em;
  margin-bottom: 3em;

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
  flex: 1;

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
`;
