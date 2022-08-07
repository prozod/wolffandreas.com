import Image from 'next/image';
import Head from 'next/head';
import {
  BannerImage,
  ContentArea,
  ContentHeader,
  ContentInfo,
  ContentParagraph,
  ContentTitle,
  CTAButton,
  CTATitle,
  CTAWrapper,
  MusicTitle,
  MusicWrapper,
  StatisticsWrapper,
  TrackWrapper,
} from '@/components/about/about.styles';
import { MobileMTopWrapper, PageTitle } from '@/constants/basic.styles';
import { fetchAPI, fetchLastFM } from '@/lib/api';
import AboutSpotifyCard from '@/components/about/AboutSpotifyCard';
import { IHomepage } from '@/interfaces/interfaces';
import React from 'react';

interface IProps {
  weeklyTracks: {
    toptracks: {
      track: [];
    };
  };
  info: IHomepage;
}

const About: React.FC<IProps> = ({ info, weeklyTracks }) => {
  const tracks = weeklyTracks?.toptracks?.track.slice(0, 10);
  const aboutImages = info.aboutMe!.aboutImages.map(
    (img: { url: string }) => img.url
  );

  return (
    <>
      <Head>
        <title>Who am I? | Andreas Wolff</title>
        <meta
          name='description'
          content='Personal portfolio, Frontend Development, Blogging, Tech & Life'
        />
      </Head>
      <MobileMTopWrapper>
        <PageTitle>
          Hey, I’m Andreas. I like to take things apart to see why and how they
          work.
        </PageTitle>
        <BannerImage height='200px'>
          <Image
            alt='picture of light rays'
            src={aboutImages[1]}
            layout='fill'
            objectFit='cover'
            priority
          />
        </BannerImage>

        <ContentArea>
          <ContentTitle>What I do</ContentTitle>
          <ContentInfo>
            <ContentHeader>{info.aboutMe?.whatIdo.split('*')[0]}</ContentHeader>
            <ContentParagraph>
              {info.aboutMe?.whatIdo.split('*')[1]}
            </ContentParagraph>
          </ContentInfo>
        </ContentArea>

        <ContentArea>
          <ContentTitle>In the future</ContentTitle>
          <ContentInfo>
            <ContentHeader>
              {info.aboutMe?.inthefuture.split('*')[0]}
            </ContentHeader>
            <ContentParagraph>
              {info.aboutMe?.inthefuture.split('*')[1]}
            </ContentParagraph>
          </ContentInfo>
        </ContentArea>

        <BannerImage height='300px' padding='10em 0' margin='8em 0 40px 0'>
          <Image
            alt='picture of man by the lake'
            src={aboutImages[0]}
            layout='fill'
            objectFit='cover'
            loading='lazy'
          />
        </BannerImage>

        <ContentArea>
          <ContentTitle>
            Besides <br /> that...
          </ContentTitle>
          <ContentInfo>
            <ContentParagraph mb='1em'>
              {info?.aboutMe?.besidesthat.split('*')[0]}
            </ContentParagraph>
            <ContentParagraph mb='1em'>
              {info?.aboutMe?.besidesthat.split('*')[1]}
            </ContentParagraph>
            <ContentParagraph mb='1em'>
              {info?.aboutMe?.besidesthat.split('*')[2]}
            </ContentParagraph>
            <ContentParagraph mb='1em'>
              {info?.aboutMe?.besidesthat.split('*')[3]}
            </ContentParagraph>
          </ContentInfo>
        </ContentArea>

        <MusicWrapper>
          <MusicTitle>
            Think we’d like the same songs? Here are my Top 10 most played songs
            on Spotify in the past week.
          </MusicTitle>
          <StatisticsWrapper>
            <TrackWrapper>
              {tracks?.map((t, idx) => (
                <AboutSpotifyCard key={idx} track={t} />
              ))}
            </TrackWrapper>
          </StatisticsWrapper>
        </MusicWrapper>

        <BannerImage height='200px' padding='4em 0'>
          <CTAWrapper>
            <CTATitle>Let's work!</CTATitle>
            <a href='mailto: contact@wolffandreas.com' aria-label='Email'>
              <CTAButton role='button'>contact@wolffandreas.com</CTAButton>
            </a>
          </CTAWrapper>
          <Image
            alt='abstract black and white image of a building'
            src={aboutImages[2]}
            layout='fill'
            objectFit='cover'
            loading='lazy'
          />
        </BannerImage>
      </MobileMTopWrapper>
    </>
  );
};

export async function getStaticProps() {
  const weeklyTracks = await fetchLastFM(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=andreaserhard&period=7day&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json`
  );
  const info = await fetchAPI('/homepage');

  return {
    props: { weeklyTracks, info },
    revalidate: 1,
  };
}

export default About;
