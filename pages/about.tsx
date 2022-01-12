import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
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
} from "@/components/about/about.styles";
import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation/navigation";
import { MobileMTopWrapper, PageTitle, Wrapper100 } from "@/constants/basic.styles";
import { aboutParagraphs } from "@/lib/about";
import { fetchAPI, fetchLastFM } from "@/lib/api";
import AboutSpotifyCard from "@/components/about/AboutSpotifyCard";
import ScrollToTop from "@/components/scroll/scrollToTop";
import { IHomepage } from "@/interfaces/interfaces";
import MobileMenuIcon from "@/components/navigation/mobileMenuIcon";
import MobileNav from "@/components/navigation/mobilenav";

interface IProps {
  weeklyTracks: {
    toptracks: {
      track: [];
    };
  };
  aboutMe: IHomepage;
}

const About: React.FC<IProps> = ({ aboutMe, weeklyTracks }) => {
  const tracks = weeklyTracks?.toptracks?.track.slice(0, 10);
  const aboutImages = aboutMe.aboutMe!.aboutImages.map((img: { url: string }) => img.url);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Wrapper100 className="AppWrapper">
      <Head>
        <title>Who am I? | TOUX.io</title>
        <meta name="description" content="Personal portfolio, Frontend Development, Blogging, Tech & Life" />
      </Head>
      <ScrollToTop />
      <Navigation />
      <MobileMenuIcon showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <MobileNav />}
      <MobileMTopWrapper>
        <PageTitle>Hey, I’m Andreas. I like to take things apart to see why and how they work.</PageTitle>
        <BannerImage height="200px">
          <Image alt="picture of light rays" src={aboutImages[1]} layout="fill" objectFit="cover" priority />
        </BannerImage>

        <ContentArea>
          <ContentTitle>What I do</ContentTitle>
          <ContentInfo>
            <ContentHeader>{aboutParagraphs.whatIdo.title}</ContentHeader>
            <ContentParagraph>{aboutParagraphs.whatIdo.description}</ContentParagraph>
          </ContentInfo>
        </ContentArea>

        <ContentArea>
          <ContentTitle>In the future</ContentTitle>
          <ContentInfo>
            <ContentHeader>{aboutParagraphs.inTheFuture.title}</ContentHeader>
            <ContentParagraph>{aboutParagraphs.inTheFuture.description}</ContentParagraph>
          </ContentInfo>
        </ContentArea>

        <BannerImage height="300px" padding="10em 0" margin="8em 0 40px 0">
          <Image alt="picture of man by the lake" src={aboutImages[0]} layout="fill" objectFit="cover" loading="lazy" />
        </BannerImage>

        <ContentArea>
          <ContentTitle>
            Besides <br /> that...
          </ContentTitle>
          <ContentInfo>
            <ContentParagraph mb="2em">{aboutParagraphs.besidesThat.p1}</ContentParagraph>
            <ContentParagraph mb="1em">{aboutParagraphs.besidesThat.p2}</ContentParagraph>
            <ContentParagraph mb="1em">{aboutParagraphs.besidesThat.p3}</ContentParagraph>
            <ContentParagraph mb="1em">{aboutParagraphs.besidesThat.p4}</ContentParagraph>
          </ContentInfo>
        </ContentArea>

        <MusicWrapper>
          <MusicTitle>
            Think we’d like the same songs? Here are my Top 10 most played songs on Spotify in the past week.
          </MusicTitle>
          <StatisticsWrapper>
            <TrackWrapper>
              {tracks?.map((t, idx) => (
                <AboutSpotifyCard key={idx} track={t} />
              ))}
            </TrackWrapper>
          </StatisticsWrapper>
        </MusicWrapper>

        <BannerImage height="200px" padding="4em 0">
          <CTAWrapper>
            <CTATitle>Let's work!</CTATitle>
            <a href="mailto: hello@toux.io" aria-label="Email">
              <CTAButton role="button">hello@toux.io</CTAButton>
            </a>
          </CTAWrapper>
          <Image
            alt="abstract black and white image of a building"
            src={aboutImages[2]}
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </BannerImage>
      </MobileMTopWrapper>
      <Footer />
    </Wrapper100>
  );
};

export async function getStaticProps() {
  const weeklyTracks = await fetchLastFM(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=andreaserhard&period=7day&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json`
  );
  const aboutMe = await fetchAPI("/homepage");

  return {
    props: { weeklyTracks, aboutMe },
    revalidate: 1,
  };
}

export default About;
