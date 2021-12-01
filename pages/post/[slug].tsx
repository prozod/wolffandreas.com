import { Articles, IStrapi } from "@/interfaces/interfaces";
import { fetchAPI } from "@/lib/api";
import Head from "next/head";
import PostWrapper from "@/components/blog/post/post";
import { MobileMTopWrapper, Wrapper100 } from "@/constants/basic.styles";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";
import ScrollToTop from "@/components/scroll/scrollToTop";
import { useState } from "react";
import MobileNav from "@/components/navigation/mobilenav";
import MobileMenuIcon from "@/components/navigation/mobileMenuIcon";

interface IParams {
    params: {
        slug: string;
    };
}

const Post: React.FC<IStrapi> = ({ articles, categories }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <Head>
                <title>{articles.title} | TOUX.io</title>
                <meta name="description" content={articles.content} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ScrollToTop />
            <Wrapper100 className="AppWrapper">
                <Navigation />
                <MobileMenuIcon showMenu={showMenu} setShowMenu={setShowMenu} />
                {showMenu && <MobileNav />}
                <MobileMTopWrapper>
                    <PostWrapper article={articles} />
                    <Footer />
                </MobileMTopWrapper>
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
