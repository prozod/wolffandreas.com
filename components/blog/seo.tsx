import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import { getStrapiMedia } from "@/lib/media";
import { Articles } from "@/interfaces/interfaces";

const SEO: React.FC<any> = ({ seo }) => {
  const { defaultSeo, siteName } = useContext(GlobalContext);
  const seoWithDefaults = {
    ...defaultSeo,
    ...seo,
  };
  console.log(seoWithDefaults);
  const fullSeo: {
    metaTitle: string;
    shareImage: "";
    metaDescription: string;
    article: Articles;
  } = {
    ...seoWithDefaults,
    metaTitle: `${seoWithDefaults.metaTitle} || ${siteName}`,
    shareImage: getStrapiMedia(seoWithDefaults.shareImage),
    metaDescription: seoWithDefaults.metaDescription,
    article: seoWithDefaults.article,
  };

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta property="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta property="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta property="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SEO;
