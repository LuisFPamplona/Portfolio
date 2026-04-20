import type { Project } from "../types/project";
import { TECHS } from "./techs";

export const projects: Project[] = [
  {
    title: "Revisei",
    description: "Site para gerenciar os seus estudos.",
    techs: [
      TECHS.typescript,
      TECHS.react,
      TECHS.tailwind,
      TECHS.express,
      TECHS.postgres,
      TECHS.prisma,
    ],
    github: "https://github.com/LuisFPamplona/front-end-revisei",
    demo: "https://revisei.vercel.app/",
  },
  {
    title: "financee",
    description: "App de controle financeiro",
    techs: [TECHS.react, TECHS.tailwind],
    github: "https://github.com/LuisFPamplona/financee",
    demo: "https://financee-pi.vercel.app/",
  },
  {
    title: "Luista",
    description: "Lista de tarefas",
    techs: [TECHS.react, TECHS.tailwind],
    github: "https://github.com/LuisFPamplona/LUISta",
    demo: "https://lui-sta.vercel.app/",
  },
  {
    title: "Taskly",
    description: "Gerenciador de tarefas",
    techs: [TECHS.react, TECHS.tailwind, TECHS.express, TECHS.mongodb],
    github: "https://github.com/LuisFPamplona/taskly",
    demo: "https://taskly-woad.vercel.app/",
  },
];
