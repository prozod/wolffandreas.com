import styled from 'styled-components';

export const FooterWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin: 3em 0 1em 0;
  padding-top: 1em;
  margin-top: auto;
  border-top: 1px solid ${({ theme }) => theme.divider};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterLinks = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-bottom: 0.5em;
  }
`;

export const FooterItem = styled.div`
  margin-right: 10px;
  font-size: 0.9rem;
  width: fit-content;

  a {
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    margin-right: 5px;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  font-size: 0.9rem;
`;

export const Copyright = styled.p`
  margin: 0;
  padding: 0;

  a {
    text-decoration: none;
  }
`;
