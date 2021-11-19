import {
  Body,
  Header,
  PostContent,
  PostTitle,
  PostAuthor,
  AuthorWrapper,
  PostDate,
} from "./post.styles";
import { Wrapper80, Divider } from "@/constants/basic.styles";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import Moment from "react-moment";
import { PostCategory } from "../card/card.styles";

const PostWrapper = ({ title, content, author, publishdate, category }) => {
  return (
    <Wrapper80>
      <PostContent>
        <Header>
          <PostTitle>{title}</PostTitle>
          {/* <PostCategory color={`#${category.color}`}>
            {category.name}
          </PostCategory> */}
          <AuthorWrapper>
            <Image
              src={author?.picture.url}
              layout="intrinsic"
              width={35}
              height={35}
            />
            <PostAuthor>{author.name}</PostAuthor>
            <span>|</span>
            <PostDate>
              <Moment format="MMMM Do YYYY">{publishdate}</Moment>
            </PostDate>
          </AuthorWrapper>
        </Header>
        <Divider />
        <Body>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            skipHtml={false}
            children={content}
            className="markdown-content"
          />
        </Body>
      </PostContent>
    </Wrapper80>
  );
};

export default PostWrapper;
