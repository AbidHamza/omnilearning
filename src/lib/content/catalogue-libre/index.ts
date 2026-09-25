import azureFondamentauxLabs from "./azure-fondamentaux-labs";
import mlFondamentaux from "./ml-fondamentaux";
import type { FreeCourse } from "./types";

export type { FreeCourse, FreeLesson } from "./types";

export const freeCourses: FreeCourse[] = [azureFondamentauxLabs, mlFondamentaux];
