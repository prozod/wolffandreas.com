import styled from "styled-components";

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  margin-top: 5em;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1em;
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 3rem;
`;

export const HeroProfilePicture = styled.div`
  border-radius: 50px;
  min-width: 75px;
  max-height: 75px;
  height: 75px;
  background: #c8deff;
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

  background-color: #f58a9d;
`;

export const AboutMe = styled.p`
  display: flex;
  color: white;
  width: 70%;
  margin: 1em 0;
  font-size: 1.1rem;
`;

export const HeroWrapper = styled.div`
  display: flex;
`;
