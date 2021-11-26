import {
  HeroTitle,
  Header,
  HeroProfilePicture,
  JobTab,
  HeroText,
  AboutMe,
  HeroWrapper,
} from "./hero.styles";

const Hero = () => {
  return (
    <>
      <Header>
        <HeroWrapper>
          <HeroProfilePicture />
          <HeroText>
            <HeroTitle>Aloha! My name is Andreas</HeroTitle>
            <JobTab>Currently on the hunt for a developer job</JobTab>
          </HeroText>
        </HeroWrapper>
        <AboutMe>
          I am a web developer, UI/UX designer, aspiring software engineer, music producer and as of late, I started blogging.
        </AboutMe>
      </Header>
    </>
  );
};

export default Hero;
