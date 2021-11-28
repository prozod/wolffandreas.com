import { Articles, IStrapi } from "@/interfaces/interfaces";
import { fetchAPI } from "@/lib/api";
import Head from "next/head";
import PostWrapper from "@/components/blog/post/post";
import { Wrapper100 } from "@/constants/basic.styles";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";
import ScrollToTop from "@/components/scroll/scrollToTop";

interface IParams {
  params: {
    slug: string;
  };
}

const Post: React.FC<IStrapi> = ({ articles, categories }) => {
  return (
    <>
      <Head>
        <title>{articles.title} | TOUX.io</title>
        <meta name="description" content={articles.content} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ScrollToTop />
      <Wrapper100>
        <Navigation />
        <PostWrapper article={articles} />
        <Footer />
      </Wrapper100>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");
  return {
    paths: articles.map((article: Articles) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: IParams) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`);
  const categories = await fetchAPI("/categories");

  return {
    props: { articles: articles[0], categories },
    revalidate: 1,
  };
}
