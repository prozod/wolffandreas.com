import { IStrapi } from "@/interfaces/interfaces";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "@/lib/api";
import Blog from "@/components/blog/blog";
import ImageComp from "@/components/images";
import SEO from "@/components/blog/seo";
import { getStrapiMedia } from "@/lib/media";
import PostWrapper from "@/components/blog/post/post";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";
import { Wrapper100 } from "@/constants/basic.styles";

const Post: React.FC<IStrapi> = ({ articles, categories }) => {
  const imageUrl = getStrapiMedia(articles.image);
  console.log(articles);
  const seo = {
    metaTitle: articles.title,
    metaDescription: articles.description,
    shareImage: articles.image,
    article: true,
  };

  return (
    <Wrapper100>
      <SEO seo={seo} />
      <Navigation />
      <PostWrapper
        title={articles.title}
        content={articles.content}
        author={articles.author}
        publishdate={articles.published_at}
        category={articles.category}
      />
      <Footer />
    </Wrapper100>
  );
};

export default Post;

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");
  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`);
  const categories = await fetchAPI("/categories");

  return {
    props: { articles: articles[0], categories },
    revalidate: 1,
  };
}
