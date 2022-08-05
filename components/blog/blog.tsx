import { Articles, Categories, Homepage } from '@/interfaces/interfaces';
import Posts from './posts/posts';
import React, { useState } from 'react';
import SearchBar from './searchbar/searchbar';
import {
  PageTitle,
  PageSubtitle,
  MobileMTopWrapper,
} from '@/constants/basic.styles';

type Props = {
  categories: Categories[];
  homepage: Homepage;
  articles: Articles[];
};

const Blog: React.FC<Props> = ({ categories, homepage, articles }) => {
  const [filteredArticles, setFilteredArticles] = useState<Articles[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchQuery = e.target.value.toLowerCase();
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchQuery)
    );

    if (searchQuery === '') {
      setFilteredArticles([]);
    } else {
      setFilteredArticles(filtered);
    }
  }

  return (
    <>
      <MobileMTopWrapper>
        <PageTitle>Blog</PageTitle>
        <PageSubtitle>
          I've been writing online since 2021, mostly about web development and
          tech careers. <br />
          In total, I've written 69 articles on this site. Use the search below
          to filter by title.
        </PageSubtitle>
        <SearchBar onChange={handleChange} />
        {filteredArticles.length === 0 ? (
          <Posts articles={articles} />
        ) : (
          <Posts articles={filteredArticles} />
        )}
      </MobileMTopWrapper>
    </>
  );
};

export default Blog;
