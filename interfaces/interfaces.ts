///////////////////////////////////////////////
// PERSONAL PROJECTS FROM STRAPI 
///////////////////////////////////////////////

export interface IProjectCard {
  project: {
    title: string,
    technologies: { tech: string[] },
    image: { url: string },
    description: string,
    links: {
      demo: string,
      repo: string
    }
  }
}

export interface IProjects {
  projects: IProjectCard[],
}

///////////////////////////////////////////////
// CATEGORIES AND ARTICLES (BLOG)
///////////////////////////////////////////////

export interface Categories {
  id: number;
  name: string;
  slug: string;
  color: string;
  created_at: string;
  updated_at: string;
  articles?: Articles[];
}

export interface IArticle {
  article: Articles;
}

export interface IArticleArr extends scrobbleTrack {
  articles: Articles[];
}

export interface Articles {
  id: number;
  author: {
    id: number;
    name: string;
    email: string;
    picture: { id: number; name: string; url: string };
  };
  title: string;
  category: { id: number; name: string; slug: string; color: string };
  description: string;
  content: string;
  slug: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  image: { id: number; name: string; alternativeText: string; url: string };
}

export interface Homepage {
  created_at: string;
  hero: { id: number; title: string };
  id: number;
  seo: {
    id: number;
    metaTitle: string;
    metaDescription: string;
    shareImage: {
      hash: string;
      name: string;
      url: string;
      created_at: string;
    };
  };
  updated_at: string;
}

export interface StrapiProps {
  articles: Articles[];
  categories: Categories[];
  homepage: Homepage;
}

export interface IStrapi {
  articles: Articles;
  categories: Categories;
}

// GLOBAL + SEO INTERFACES

export interface SEO {
  id: number;
  metaDescription: string;
  metaTitle: string;
  shareImage: string | null;
}

export interface GlobalCtxProps {
  created_at: string;
  updated_at: string;
  id: number;
  siteName: string;
  defaultSeo: SEO;
  favicon: {
    url: string;
  };
}

///////////////////////////////////////////////
// SPOTIFY LIVE STATS INTERFACE 
///////////////////////////////////////////////

export interface scrobbleTrack {
  scrobble: {
    recenttracks: {
      track: {
        "@attr": {
          nowplaying: string
        },
        artist: {
          "#text": string
        }
        name: string
        attr: {
          nowplaying: string
        }
      }[];
    }
  }
}

