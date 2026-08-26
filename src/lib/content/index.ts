import type { Course } from "../types";
import cybersecurite from "./cybersecurite";
import commencerLeHtml from "./commencer-le-html";
import javascriptCoursExpert from "./javascript-cours-expert";
import figmaAvance from "./figma-avance";
import devenirProductOwner from "./devenir-product-owner";
import promptEngineeringIa from "./prompt-engineering-ia";
import marketingDigital from "./marketing-digital";
import financePersonnelle from "./finance-personnelle";
import agentsIaClaude from "./agents-ia-claude";
import automatiserAvecIa from "./automatiser-avec-ia";
import creerAvecIaGenerative from "./creer-avec-ia-generative";
import lancerMicroSaasIa from "./lancer-micro-saas-ia";

// Catalogue réel (une source par fichier). L'ordre définit l'ordre d'affichage
// par défaut du catalogue et du seed.
export const contentCourses: Course[] = [
  agentsIaClaude,
  promptEngineeringIa,
  automatiserAvecIa,
  creerAvecIaGenerative,
  commencerLeHtml,
  javascriptCoursExpert,
  figmaAvance,
  cybersecurite,
  lancerMicroSaasIa,
  devenirProductOwner,
  marketingDigital,
  financePersonnelle,
];

export default contentCourses;
