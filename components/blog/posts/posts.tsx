import { Articles } from "@/interfaces/interfaces";
import React from "react";
import Card from "../card/card";

type PostProps = { articles: Articles[] };

const Posts: React.FC<PostProps> = ({ articles }) => {
  return (
    <div>
      <div>
        {articles.map((article) => (
          <Card key={`article_${article.slug}`} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
