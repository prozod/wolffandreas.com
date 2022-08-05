import styled from 'styled-components';

export const StatsWrapper = styled.section`
  display: flex;
  margin-top: 3em;
  margin-bottom: 3em;
  flex-direction: column;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1em;
  }
`;

export const StatsTitle = styled.h1`
  font-size: 1.25rem;
  @media (max-width: 768px) {
    font-size: 1rem;
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

// background: #141414;
export const LiveStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0;
  padding: 1em;
  border-radius: 10px;
  background: ${({ theme }) => theme.background};
`;

export const FeaturedPosts = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;

  @media (max-width: 1000px) {
    margin: 0;
  }
`;

export const CTALink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0 auto;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-top: 5px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${({ theme }) => theme.accent};
  }
`;
