import Head from 'next/head';
import Hero from '@/components/home/hero/hero';
import Statistics from '@/components/home/statistics/statistics';
import { IArticleArr } from '@/interfaces/interfaces';
import { fetchAPI, fetchLastFM } from '@/lib/api';

const Home: React.FC<IArticleArr> = ({ homepage, scrobble, articles }) => {
  return (
    <>
      <Head>
        <title>TOUX.io | Developer, blogger, tech enthusiast</title>
        <meta
          name='description'
          content='Personal portfolio, Frontend Development, Blogging, Tech & Life'
        />
      </Head>
      <Hero info={homepage?.info} />
      <Statistics articles={articles} scrobble={scrobble} />
    </>
  );
};

export async function getStaticProps() {
  const [articles, homepage] = await Promise.all([
    fetchAPI('/articles'),
    fetchAPI('/homepage'),
  ]);

  const scrobble = await fetchLastFM(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=10&user=andreaserhard&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json`
  );

  if (!articles) {
    return {
      notFound: true,
    };
  }

  return {
    props: { articles, homepage, scrobble },
    revalidate: 1,
  };
}

export default Home;
