import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  background: ${({ theme }) => theme.background};
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.05));
  border: 1px solid rgba(0, 0, 0, 0.05);
  width: 100%;
  position: relative;
  margin: 0.75em 0;
  border-radius: 0 10px 10px 0;
  max-height: 180px;

  @media (max-width: 1400px) {
    max-height: 200px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 350px;
    border-radius: 0 0 10px 10px;
  }

  &:before {
    content: '';
    width: 3px;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 1;
    background: ${({ theme }) => theme.accent};

    @media (max-width: 768px) {
      width: 100%;
      height: 3px;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75em 1em;
`;

export const ProjectImage = styled.div`
  max-width: 220px;
  max-height: 180px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProjectTitle = styled.h1`
  font-weight: 600;
  font-size: 1rem;
`;

export const ProjectContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  @media (max-width: 1400px) {
    margin: 0.5em 0;
  }
`;

export const ProjectTech = styled.p`
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 1px;
  font-size: 0.75rem;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectLink = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 0.75rem;
  align-items: center;
  margin-right: 15px;

  span {
    margin-right: 5px;
  }
`;
