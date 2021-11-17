import React from "react";
import Link from "next/link";
import { Articles } from "@/interfaces/interfaces";
import {
  Anchor,
  CardContent,
  PostCategory,
  PostContent,
  PostDescription,
  PostTitle,
} from "./card.styles";

type Props = { article: Articles };

const Card: React.FC<Props> = ({ article }) => {
  return (
    <Link as={`/post/${article.slug}`} href="/post/[slug]">
      <Anchor>
        <CardContent>
          <PostContent>
            <PostTitle>{article.title}</PostTitle>
            <PostDescription>{article.description}</PostDescription>
            <PostCategory color={`#${article.category.color}`}>
              {article.category.name}
            </PostCategory>
          </PostContent>
        </CardContent>
      </Anchor>
    </Link>
  );
};

export default Card;
