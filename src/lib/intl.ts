// Étiquette Intl d'une locale du site. Un seul endroit décide que « fr » se
// formate en fr-FR : les pages en et ar ne doivent plus hériter du français.
export function intlTag(locale: string): string {
  if (locale === "ar") return "ar";
  if (locale === "en") return "en-US";
  return "fr-FR";
}

export function formatNumber(n: number, locale: string): string {
  return new Intl.NumberFormat(intlTag(locale)).format(n);
}

export function formatDate(d: Date, locale: string): string {
  return d.toLocaleDateString(intlTag(locale), {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
