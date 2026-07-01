import type { Course } from "../types";
import cybersecurite from "./cybersecurite";
import commencerLeHtml from "./commencer-le-html";
import javascriptCoursExpert from "./javascript-cours-expert";
import figmaAvance from "./figma-avance";
import devenirProductOwner from "./devenir-product-owner";
import promptEngineeringIa from "./prompt-engineering-ia";
import marketingDigital from "./marketing-digital";
import financePersonnelle from "./finance-personnelle";

// Catalogue réel (une source par fichier). L'ordre définit l'ordre d'affichage
// par défaut du catalogue et du seed.
export const contentCourses: Course[] = [
  commencerLeHtml,
  javascriptCoursExpert,
  figmaAvance,
  cybersecurite,
  promptEngineeringIa,
  devenirProductOwner,
  marketingDigital,
  financePersonnelle,
];

export default contentCourses;
