import Footer from "@/components/footer/footer";
import Hero from "@/components/home/hero/hero";
import Statistics from "@/components/home/statistics/statistics";
import Navigation from "@/components/navigation/navigation";
import { Wrapper100 } from "@/constants/basic.styles";
import { IArticleArr } from "@/interfaces/interfaces";
import { fetchAPI } from "@/lib/api";

const Home: React.FC<IArticleArr> = ({ articles }) => {
  return (
    <Wrapper100>
      <Navigation />
      <Hero />
      <Statistics articles={articles} />
      <Footer />
    </Wrapper100>
  );
};

export async function getStaticProps() {
  const articles = await fetchAPI("/articles");

  if (!articles) {
    return {
      notFound: true,
    };
  }

  return {
    props: { articles },
    revalidate: 30,
  };
}

export default Home;
