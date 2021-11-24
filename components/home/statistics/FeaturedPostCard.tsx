import {
  FPostCard,
  FPostImg,
  FPostContent,
  FPostBody,
  FPostTitle,
  FPostDescription,
} from "./FeaturedPostCard.styles";
import { PostCategory } from "@/components/blog/card/card.styles";
import Image from "next/image";
import Link from "next/link";
import { IArticle } from "@/interfaces/interfaces";

const FeaturedPostCard: React.FC<IArticle> = ({ article }) => {
  const { title, description, category, image, slug } = article;

  return (
    <FPostCard>
      <FPostImg>
        <Image
          src={image.url}
          alt={image.alternativeText || image.name}
          width={100}
          height={120}
          layout="intrinsic"
          loading="lazy"
        />
      </FPostImg>
      <FPostContent>
        <Link href={`/post/${slug}`}>
          <a>
            <FPostBody>
              <FPostTitle>{title}</FPostTitle>
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

