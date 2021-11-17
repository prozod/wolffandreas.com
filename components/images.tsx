import Image from "next/image";
import { getStrapiMedia } from "@/lib/media";

type Props = {
  image: { name: string; alternativeText: string; url: string };
};

const ImageComp: React.FC<Props> = ({ image }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <Image
      src={imageUrl}
      alt={image.alternativeText || image.name}
      width={500}
      height={300}
      layout="intrinsic"
      loading="lazy"
    />
  );
};

export default ImageComp;
