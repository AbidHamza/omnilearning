/**
 * Découpage d'un cours de préparation en domaines d'examen, par préfixe de
 * module dans la key des leçons ("m4-l2", "m4-quiz" -> module "m4").
 * CoursePart n'a pas de key stable : on s'appuie sur celle des leçons.
 * `n` renvoie au libellé exam.domain{n} du dictionnaire.
 */
export interface ExamDomainDef {
  n: 1 | 2 | 3;
  modules: string[];
}

const range = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => `m${from + i}`);

export const COURSE_EXAM_DOMAINS: Record<string, ExamDomainDef[]> = {
  "az-900-preparation-complete": [
    { n: 1, modules: range(1, 3) },
    { n: 2, modules: range(4, 8) },
    { n: 3, modules: range(9, 12) },
  ],
};

export function moduleOfKey(key: string): string | null {
  return /^(m\d+)-/.exec(key)?.[1] ?? null;
}
