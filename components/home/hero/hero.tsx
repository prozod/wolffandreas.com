import { IHomepage } from '@/interfaces/interfaces';
import Image from 'next/image';
import {
  HeroTitle,
  Header,
  HeroProfilePicture,
  JobTab,
  HeroText,
  AboutMe,
  HeroWrapper,
} from "./hero.styles";

const Hero: React.FC<IHomepage> = ({ info }) => {
  console.log(info?.profilepicture.url);
  return (
    <>
      <Header>
        <HeroWrapper>
          <HeroProfilePicture>
            <Image src={info?.profilepicture?.url as any} layout="fill" objectFit="cover" alt='profile picture' loading="lazy" />
          </HeroProfilePicture>
          <HeroText>
            <HeroTitle>{info?.introline}</HeroTitle>
            <JobTab>{info?.job}</JobTab>
          </HeroText>
        </HeroWrapper>
        <AboutMe>{info?.about}</AboutMe>
      </Header>
    </>
  );
};

export default Hero;

//            <Image src={} layout="fill" objectFit="cover" alt='profile picture' loading="lazy" />
