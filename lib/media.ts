import { getStrapiURL } from "./api";

export function getStrapiMedia(media: any) {
  if (!media) return;
  if (media === null) return;

  const imageUrl = media?.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;

  return imageUrl;
}
