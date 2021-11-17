import styled from "styled-components";

export const FooterWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin: 3em 0 1em 0;
  padding-top: 1em;
  border-top: 1px solid #201b2f;
  margin-top: auto;
`;

export const FooterLinks = styled.div`
  display: flex;
`;

export const FooterItem = styled.div`
  margin-right: 10px;
  font-size: 0.75rem;

  a {
    color: #8273af;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  font-size: 0.75rem;
`;

export const Copyright = styled.p`
  color: #8273af;
`;
