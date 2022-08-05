import { IHomepage } from '@/interfaces/interfaces';
import { hasFlag } from 'country-flag-icons';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  HeroTitle,
  Header,
  HeroProfilePicture,
  JobTab,
  HeroText,
  AboutMe,
  HeroWrapper,
  DateTime,
} from './hero.styles';

const Hero: React.FC<IHomepage> = ({ info }) => {
  const country = 'Romania';
  const country_initials = 'RO';
  const continent_capital = 'Europe/Bucharest';
  const [currDate, setCurrDate] = useState('');
  const flag =
    hasFlag(country_initials) && getUnicodeFlagIcon(country_initials);

  useEffect(() => {
    const updateDate = setInterval(() => {
      setCurrDate(
        new Date().toLocaleString(`en-${country_initials}`, {
          dateStyle: 'medium',
          timeStyle: 'medium',
          timeZone: `${continent_capital}`,
        })
      );
    }, 1000);

    return () => clearInterval(updateDate);
  }, []);

  return (
    <>
      <Header>
        <HeroWrapper>
          <HeroProfilePicture>
            <Image
              src={info?.profilepicture?.url as any}
              layout='fill'
              objectFit='cover'
              alt='profile picture'
              loading='lazy'
            />
          </HeroProfilePicture>
          <HeroText>
            <HeroTitle>{info?.introline}</HeroTitle>
            <JobTab>{info?.job}</JobTab>
            <DateTime>
              {currDate ? (
                <p>
                  Currently in {flag} {country} - {currDate}
                </p>
              ) : (
                <p className='pulse'>🌎 Located in...</p>
              )}
            </DateTime>
          </HeroText>
        </HeroWrapper>
        <AboutMe>{info?.about}</AboutMe>
      </Header>
    </>
  );
};

export default Hero;

//            <Image src={} layout="fill" objectFit="cover" alt='profile picture' loading="lazy" />
