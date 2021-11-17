import { Articles, Categories, Homepage } from "@/interfaces/interfaces";
import Posts from "./posts/posts";
import React, { useState } from "react";
import Navigation from "../navigation/navigation";
import { BlogSubtitle, BlogTitle } from "./blog.styles";
import SearchBar from "./searchbar/searchbar";
import Footer from "../footer/footer";
import { Wrapper100 } from "@/constants/basic.styles";

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

    if (searchQuery === "") {
      setFilteredArticles([]);
    } else {
      setFilteredArticles(filtered);
    }
  }

  return (
    <Wrapper100>
      <Navigation />
      <BlogTitle>{homepage.hero.title}</BlogTitle>
      <BlogSubtitle>
        I've been writing online since 2021, mostly about web development and
        tech careers. <br />
        In total, I've written 69 articles on this site. Use the search below to
        filter by title.
      </BlogSubtitle>
      <SearchBar onChange={handleChange} />
      {filteredArticles.length === 0 ? (
        <Posts articles={articles} />
      ) : (
        <Posts articles={filteredArticles} />
      )}
      <Footer />
    </Wrapper100>
  );
};

export default Blog;
