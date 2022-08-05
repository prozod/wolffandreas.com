import styled from 'styled-components';

export const MobileMTopWrapper = styled.div`
  height: 100%;
  @media (max-width: 768px) {
    margin-top: 1.5em;
  }
`;

export const Wrapper80 = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

export const Wrapper100 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 0;
  min-height: 100vh;

  // @media (max-width: 768px) {
  //   margin: 0;
  //   width: 100%;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: ${({ theme }) => theme.divider};
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const PageSubtitle = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.9rem;
  margin-top: 0.5em;

  span {
    font-weight: 600;
  }
`;

export const PageContent = styled.div`
  margin: 2em 0;
`;
