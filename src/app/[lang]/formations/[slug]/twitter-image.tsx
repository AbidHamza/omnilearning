import OgImage from "./opengraph-image";

// Même carte que l'og:image : X lit twitter:image en priorité.
export const alt = "OmniLearn";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image(props: { params: Promise<{ lang: string; slug: string }> }) {
  return OgImage(props);
}
