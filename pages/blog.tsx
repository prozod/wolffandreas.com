import Head from 'next/head';
import Blog from '@/components/blog/blog';
import { fetchAPI } from 'lib/api';
import { StrapiProps } from '@/interfaces/interfaces';

// how to declare categories to be an array of Categorie sinterface yet accessible for array prototypes?
// if i do Categories[], ill get it as an array but ill be prompeted to add categories props there down in Container

const Home: React.FC<StrapiProps> = ({ articles, categories, homepage }) => {
  console.log(articles);
  return (
    <>
      <Head>
        <title>Blog | Andreas Wolff</title>
        <meta
          name='description'
          content='Personal portfolio, Frontend Development, Blogging, Tech & Life'
        />
      </Head>
      <Blog categories={categories} homepage={homepage} articles={articles} />
    </>
  );
};

export async function getStaticProps() {
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI('/articles'),
    fetchAPI('/categories'),
    fetchAPI('/homepage'),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
