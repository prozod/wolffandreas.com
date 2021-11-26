import Image from 'next/image'
import { BannerImage, ContentArea, ContentHeader, ContentInfo, ContentParagraph, ContentTitle, CTAButton, CTATitle, CTAWrapper, MusicTitle, MusicWrapper, StatisticsWrapper, TrackWrapper } from "@/components/about/about.styles"
import Footer from "@/components/footer/footer"
import Navigation from "@/components/navigation/navigation"
import { MobileMTopWrapper, PageTitle, Wrapper100 } from "@/constants/basic.styles"
import { fetchLastFM } from '@/lib/api'
import AboutSpotifyCard from '@/components/about/AboutSpotifyCard'

interface IWeeklyTracks {
  weeklyTracks: {
    toptracks: {
      track: []
    }
  }
}

const About: React.FC<IWeeklyTracks> = ({ weeklyTracks }) => {
  const tracks = weeklyTracks?.toptracks.track.slice(0, 10);

  return (
    <Wrapper100>
      <Navigation />
      <MobileMTopWrapper>
        <PageTitle>Hey, I’m Andreas. I like to take things apart to see why and how they work.</PageTitle>
        <BannerImage height="200px" >
          <Image src="https://res.cloudinary.com/andreastx/image/upload/v1637930784/zebraheader1_if0h95.jpg" layout="fill" objectFit='cover' width={600} height={200} />
        </BannerImage>

        <ContentArea>
          <ContentTitle>
            What I Do
          </ContentTitle>
          <ContentInfo>
            <ContentHeader>
              Currently, my focus is targeted towards anything web development.Until now, I have mostly worked on the Frontend, but I am trying to branch out into full-stack.Besides development, I also do UI/UX design.
            </ContentHeader>
            <ContentParagraph>
              Amongst the things I’ve had the time & luxury to play around with, I fell the most in love with TypeScript, Firebase, React and its ecosystem, Styled Components, SCSS and two Headless Content Management Systems.I guess I could put that into the JAMStack category.I am also using Figma and Adobe Photoshop on the regular.
            </ContentParagraph>
          </ContentInfo>
        </ContentArea>

        <ContentArea>
          <ContentTitle>
            In the future
          </ContentTitle>
          <ContentInfo>
            <ContentHeader>
              I am interested what the future of the web will be, therefore I’m keen to explore new technologies as I progress, one at a time. Will it be Web Assembly? Will it be WASM & Rust?!  Artificial Intelligence?! Who knows!
            </ContentHeader>
            <ContentParagraph>
              Whilst teaching myself web development, I’d lie if I said there haven’t been moments where I just wanted to jump and learn a completely new thing, but you see... I got an entire life ahead of me to learn all of that, so all I need is patience.
              Some of the things that I am interested in and plan on checking out in the future, besides web & application development, are Cybersecurity & Cloud Computing.
            </ContentParagraph>
          </ContentInfo>
        </ContentArea>

        <BannerImage height="300px" padding="10em 0" margin="8em 0 40px 0">
          <Image src="https://res.cloudinary.com/andreastx/image/upload/v1637934507/aboutlife_ceuasn.jpg" layout="fill" objectFit='cover' width={600} height={200} />
        </BannerImage>

        <ContentArea>
          <ContentTitle>
            Besides <br /> that...
          </ContentTitle>
          <ContentInfo>
            <ContentParagraph mb="2em">
              I've been producing music for over 5 years now. In addition to working on my musical ideas, around the same time, I’ve started dabbling into graphical design. Thus far, I am using Figma, Adobe Lightroom, Photoshop and a bit of Illustrator, because I really wanna learn to design logos and vector-y things for User Interfaces, amongst other things.
            </ContentParagraph>
            <ContentParagraph mb="1em">
              I've publicly released around 10 songs/remixes and I am currently planning on making an EP in the future.
              There are only 24 hours in a day and honestly, there are a lot of things I want to do and it is overwhelming at times, but we’ll get there.
            </ContentParagraph>
            <ContentParagraph mb="1em">
              Outside of work my passions include landscaping, hiking and travelling, photography, cooking, music production, DIY projects, binge-watching TV Series, health & wellbeing... and occasionally video-games.
            </ContentParagraph>
            <ContentParagraph mb="1em">
              I care a lot about people and value honesty, integrity, kindness, empathy, transparency, vulnerability, and trust more than anything. Treat me good & I’ll treat you better, treat me bad & I’ll treat you worse.
              I consider myself an empath and a perfectionist, I want to build things and help others at the same time. So, why not build things that help others?
            </ContentParagraph>
          </ContentInfo>
        </ContentArea>

        <MusicWrapper>
          <MusicTitle>
            Think we’d like the same songs? Here are my Top 10 most played songs on Spotify in the past week.
          </MusicTitle>
          <StatisticsWrapper>
            <TrackWrapper>
              {tracks.map(t => <AboutSpotifyCard track={t} />)}
            </TrackWrapper>
          </StatisticsWrapper>
        </MusicWrapper>

        <BannerImage height="200px" padding="4em 0">
          <CTAWrapper>
            <CTATitle>Let's work!</CTATitle>
            <CTAButton>hello@toux.io</CTAButton>
          </CTAWrapper>
          <Image src="https://res.cloudinary.com/andreastx/image/upload/v1637938069/letswork_olbfbp.jpg" layout="fill" objectFit="cover" width={600} height={200} />
        </BannerImage>

      </MobileMTopWrapper>
      <Footer />
    </Wrapper100>
  )
};

export async function getStaticProps() {
  const weeklyTracks = await fetchLastFM(`https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=andreaserhard&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json`)
  return {
    props: { weeklyTracks },
    revalidate: 1,
  }
}

export default About;
