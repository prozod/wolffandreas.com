import {
  Body,
  Header,
  PostContent,
  PostTitle,
  PostAuthor,
  AuthorWrapper,
  PostDate,
} from './post.styles';
import { PostCategory } from '../card/card.styles';
import { IArticle } from '@/interfaces/interfaces';
import { Wrapper80, Divider } from '@/constants/basic.styles';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Moment from 'react-moment';
import rehypeRaw from 'rehype-raw';

const PostWrapper: React.FC<IArticle> = ({ article }) => {
  const { title, content, author, published_at, category } = article;

  return (
    <>
      <PostContent>
        <Header>
          <PostTitle>{title}</PostTitle>
          {/* <PostCategory color={`#${category.color}`}>
                              {category.name}
                              </PostCategory> */}
          <AuthorWrapper>
            <Image
              src={author?.picture.url}
              layout='intrinsic'
              objectFit='cover'
              width={35}
              height={35}
            />
            <PostAuthor>{author.name}</PostAuthor>
            <span>|</span>
            <PostDate>
              <Moment format='MMMM Do YYYY'>{published_at}</Moment>
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
            className='markdown-content'
          />
        </Body>
      </PostContent>
    </>
  );
};

export default PostWrapper;
