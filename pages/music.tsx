import Head from 'next/head';
import Footer from '@/components/footer/footer';
import {
  MobileMTopWrapper,
  PageSubtitle,
  PageTitle,
} from '@/constants/basic.styles';
import {
  Embed,
  EmbedsWrapper,
  StreamingPlatform,
  StreamingPlatformsWrapper,
} from '@/components/music/music.styles';

const Music = () => {
  return (
    <>
      <Head>
        <title>Music | TOUX.io</title>
        <meta
          name='description'
          content='Personal portfolio, Frontend Development, Blogging, Tech & Life, Music Production'
        />
      </Head>
      <MobileMTopWrapper>
        <PageTitle>Music by TOUX</PageTitle>
        <PageSubtitle>
          I am a music producer aswell and I release music under the alias
          'TOUX' (previously ERHARD).
          <br />
          I don't have anything more recent (for now), but these are some of the
          songs I have produced and released publicly.
          <br />
          Even though you can find my music on all digital streaming platforms,
          below are the links to the most popular ones.
        </PageSubtitle>
        <StreamingPlatformsWrapper>
          <StreamingPlatform
            href='https://music.apple.com/us/artist/toux/id1529921638'
            target='_blank'
            rel='noreferrer'
            aria-label='Apple Music'
          >
            <button>Apple Music</button>
          </StreamingPlatform>
          <StreamingPlatform
            href='https://soundcloud.com/iamtoux'
            target='_blank'
            rel='noreferrer'
            aria-label='Soundcloud'
          >
            <button>SoundCloud</button>
          </StreamingPlatform>
          <StreamingPlatform
            href='https://open.spotify.com/artist/6D3fDmOnUCDNwYHHYtsW23?si=wIwTX53CQAeUFyhcuNWl-A&dl_branch=1'
            target='_blank'
            rel='noreferrer'
            aria-label='Spotify'
          >
            <button>Spotify</button>
          </StreamingPlatform>
        </StreamingPlatformsWrapper>

        <EmbedsWrapper>
          <Embed>
            <div className='sc-embed'>
              <iframe
                width='100%'
                height='300'
                scrolling='no'
                frameBorder='no'
                allow='autoplay'
                title='soundcloud'
                src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1294004104&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
              ></iframe>
              <div
                style={{
                  fontSize: '10px',
                  color: '#cccccc',
                  lineBreak: 'anywhere',
                  wordBreak: 'normal',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  fontFamily:
                    'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                  fontWeight: 100,
                }}
              >
                <a
                  href='https://soundcloud.com/iamtoux'
                  title='TOUX'
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: '#cccccc', textDecoration: 'none' }}
                >
                  TOUX
                </a>{' '}
                ·{' '}
                <a
                  href='https://soundcloud.com/iamtoux/sets/toux-releases'
                  title='TOUX Releases'
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: '#cccccc', textDecoration: 'none' }}
                >
                  TOUX Releases
                </a>
              </div>
            </div>
          </Embed>

          <Embed>
            <div className='sc-embed'>
              <iframe
                width='100%'
                height='300'
                scrolling='no'
                frameBorder='no'
                allow='autoplay'
                title='soundcloud'
                src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/768248502&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
              ></iframe>
              <div
                style={{
                  fontSize: '10px',
                  color: '#cccccc',
                  lineBreak: 'anywhere',
                  wordBreak: 'normal',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  fontFamily:
                    'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                  fontWeight: 100,
                }}
              >
                <a
                  href='https://soundcloud.com/imerhard'
                  title='ERHARD'
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: '#cccccc', textDecoration: 'none' }}
                >
                  ERHARD
                </a>{' '}
                ·{' '}
                <a
                  href='https://soundcloud.com/imerhard/sets/erhard-remixes'
                  title='ERHARD Remixes'
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: '#cccccc', textDecoration: 'none' }}
                >
                  ERHARD Remixes
                </a>
              </div>
            </div>
          </Embed>
        </EmbedsWrapper>
      </MobileMTopWrapper>
    </>
  );
};

export default Music;
