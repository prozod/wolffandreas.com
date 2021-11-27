import styled from "styled-components";

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  margin-top: 5em;

  @media (max-width: 768px) {
    margin-top: 1em;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1em;
  width: 100%;


  @media (max-width: 768px) {
    margin: 0;
    margin-top: 1em;
  }
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 3rem;
  margin: 0;
  padding: 0;
  position: relative;
  bottom: 7px;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 2rem;
  }
`;

export const HeroProfilePicture = styled.div`
  border-radius: 50px;
  min-width: 75px;
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  position: relative;

  img {
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 2rem;
    min-width: 50px;
    max-width: 50px;
    max-height: 50px;
    height: 50px;
  }
`;

export const JobTab = styled.div`
  display: flex;
  line-height: 1em;
  align-items: center;
  width: fit-content;
  border-radius: 3px;
  padding: 2px 5px;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  position: relative;
  bottom: 7px;
  background-color: #ff696e;
`;

export const AboutMe = styled.p`
  display: flex;
  color: white;
  width: 70%;
  margin: 1em 0;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
