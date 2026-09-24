/**
 * Photos of the topic tiles, keyed by the category label stored in the
 * database (French, it is the key, not the display name).
 *
 * All files are CC0, recropped to 3:4 and re-encoded to WebP by hand; the
 * dimensions below are the real ones, next/image needs them to reserve the
 * space before the file arrives.
 */
export type Photo = { src: string; w: number; h: number };

const p = (name: string, w: number, h: number): Photo => ({
  src: `/img/topics/${name}.webp`,
  w,
  h,
});

export const topicPhotos: Record<string, Photo> = {
  "Développement Web": p("web", 493, 657),
  "Data engineering": p("data", 480, 640),
  Cybersécurité: p("security", 479, 639),
  "Intelligence Artificielle": p("ai", 480, 640),
  "Cloud Computing": p("cloud", 900, 1200),
  "Design UX": p("design", 540, 720),
  "Gestion de projet": p("projects", 480, 640),
  "Objets connectés (IoT)": p("iot", 477, 636),
  Infrastructure: p("infra", 680, 907),
};

export const scenePhotos = {
  learner: p("learner", 900, 1200),
  reader: p("reader", 900, 1200),
  typing: p("typing", 900, 1200),
  desk: p("desk", 900, 1200),
  whiteboard: p("whiteboard", 480, 640),
};

export function topicPhoto(label: string): Photo {
  return topicPhotos[label] ?? scenePhotos.desk;
}
