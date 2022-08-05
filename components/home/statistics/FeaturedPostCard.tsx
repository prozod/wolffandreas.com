import {
  FPostCard,
  FPostImg,
  FPostContent,
  FPostBody,
  FPostTitle,
  FPostDescription,
} from './FeaturedPostCard.styles';
import { PostCategory } from '@/components/blog/card/card.styles';
import Image from 'next/image';
import Link from 'next/link';
import { IArticle } from '@/interfaces/interfaces';

const FeaturedPostCard: React.FC<IArticle> = ({ article }) => {
  const { title, description, category, image, slug } = article;
  return (
    <FPostCard>
      <FPostImg width='120px' height='130px'>
        <Image
          src={image.url}
          alt={image.alternativeText || image.name}
          layout='fill'
          loading='lazy'
        />
      </FPostImg>
      <FPostContent>
        <Link href={`/post/${slug}`} passHref>
          <a
            aria-label={title || 'Featured post'}
            aria-describedby={title.substr(0, 1)}
          >
            <FPostBody>
              <FPostTitle id={title.substr(0, 1)}>{title}</FPostTitle>
              <FPostDescription>{description}</FPostDescription>
            </FPostBody>
          </a>
        </Link>
        <PostCategory color={`#${category.color}`}>
          {category.name}
        </PostCategory>
      </FPostContent>
    </FPostCard>
  );
};

export default FeaturedPostCard;
