import styled from "styled-components";

export const MobileMTopWrapper = styled.div`
@media (max-width: 768px) {
  margin-top: 4.5em;
}
`

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
  height: 1px;
  background-color: #6c6093;
`;


export const PageTitle = styled.h1`
  color: white;
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const PageSubtitle = styled.p`
  color: #a3a3a3;
  margin-top: 0.5em;

  span {
    font-weight: 600;
  }
`;

export const PageContent = styled.div`
margin: 1em 0; 
`
