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
          I am a developer, UI/UX enthusiast, and aspiring software engineer.
          <br />I am also a music producer and as of late, I decided to share my
          experiences on my blog.
        </AboutMe>
      </Header>
    </>
  );
};

export default Hero;
