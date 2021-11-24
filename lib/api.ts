export function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
}


export async function fetchAPI(path: string) {
  const requestURL = getStrapiURL(path);
  const response = await fetch(requestURL);
  const data = await response.json();

  return data;
}

export async function fetchLastFM(path: string) {
  const requestURL = path;
  const response = await fetch(requestURL)
  const data = await response.json();

  return data;
}
