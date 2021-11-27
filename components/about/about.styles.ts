import styled from 'styled-components';

interface IBannerImg {
  height?: string,
  padding?: string,
  margin?: string
}

interface IStyleProps {
  mb?: string,
}

export const BannerImage = styled.div` 
  width = 100%; 
  height: ${(p: IBannerImg) => p.height || '200px'};
  position: relative;
  margin: ${(p: IBannerImg) => p.margin ? p.margin : '40px 0'};
  padding: ${(p: IBannerImg) => p.padding ? p.padding : ''};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
  border-radius: 10px;
  z-index: 0;
}
`

export const ContentArea = styled.section`
display: flex;
margin: 60px 0;
`

export const ContentTitle = styled.h1`
display: flex;
flex: 1;
font-size: 2rem;
color: white;
margin: 0;
padding: 0;
padding-right: 0.5em;
`

export const ContentInfo = styled.div`
display: flex;
flex-direction: column;
flex: 3;
padding: 0;
margin: 0;
`

export const ContentHeader = styled.p`
color: white;
font-weight: 600;
margin: 0;
padding: 0;
margin-bottom: 0.5em;
`

export const ContentParagraph = styled.p`
color: #B5B5B5;
margin: 0;
padding: 0;
margin-bottom: ${(p: IStyleProps) => p.mb ? p.mb : ''};
`

export const MusicWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const MusicTitle = styled.h1`
  font-size: 2rem;
  color: white;
  margin-bottom: 40px;
  margin-top: 1em;
`

export const StatisticsWrapper = styled.div`
background-color: #201B2F;
border-radius: 5px;
padding: 0.5em;
`

export const TrackWrapper = styled.div`
display: grid;
grid-template-columns: 50% 50%;

@media (max-width: 768px) {
  grid-template-columns: 1fr;
}
`

export const CTAWrapper = styled.div`
  width: 80%;
  position: absolute;
  margin: 0 auto;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CTATitle = styled.h1`
  color: #110E1B;
  font-size: 3rem;
  z-index: 2;
  @media (max-width: 768px) {
    margin-bottom: 0.5em;
    font-size: 2rem;
  }
`

export const CTAButton = styled.button`
background: transparent;
border: 1px solid #110E1B;
color: black;
width: fit-content;
border-radius: 5px;
margin: 0;
font-size: 1.5rem;
padding: 16px 32px;
font-weight: 600;
transition: all 0.2s ease;
position: relative;
overflow: hidden;


  @media (max-width: 768px) {
      font-size: 1rem;
  }

&:before {
  content: "";
  position: absolute;
  width: 0%;
  height: 100%;
  left: -30px;
  top: 0;
  border-radius: 5px;
  background-color: #110E1B;
  transition: all 0.2s cubic-bezier(.71,1.11,1,1.02);
  transform: skew(45deg);
  z-index: -1;
}

&:hover {
  color: white;
  cursor: pointer;
}

&:hover:before {
  width: 150%;
}
`
