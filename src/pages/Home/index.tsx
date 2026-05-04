import {
  ArrowRight,
  Code2,
  Database,
  Mail,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Trophy,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import TechBadge from "../../components/ui/TechBadge";
import TechName from "../../components/ui/TechName";
import { TECHS } from "../../data/techs";

const mainStack = [
  TECHS.react,
  TECHS.typescript,
  TECHS.express,
  TECHS.postgres,
  TECHS.prisma,
  TECHS.zod,
  TECHS.jest,
];

const recruiterSignals = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Autenticação e regras",
    desc: "JWT, rotas protegidas e validações de entrada.",
  },
  {
    icon: <Database size={20} />,
    title: "Dados estruturados",
    desc: "Prisma, PostgreSQL e sincronização entre entidades.",
  },
  {
    icon: <TestTube2 size={20} />,
    title: "Qualidade de código",
    desc: "Testes com Jest no core e regras anti-farm.",
  },
];

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-6 pb-16 pt-28 text-zinc-950 md:pt-32">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="animate-fadeUp space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-zinc-700 shadow-sm">
            <Sparkles size={14} />
            Desenvolvedor Fullstack
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Fullstack com foco em produto, backend e qualidade.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
              Sou Luis Pamplona e trabalho com <TechName>React</TechName>,{" "}
              <TechName>TypeScript</TechName>, <TechName>Node.js</TechName>,{" "}
              <TechName>Express</TechName>, <TechName>Zod</TechName> e{" "}
              <TechName>Jest</TechName>. Meu projeto principal, Revisei, reúne
              autenticação, gamificação, banco relacional e testes.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {recruiterSignals.map((signal) => (
              <div
                key={signal.title}
                className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-3 inline-flex rounded-xl bg-zinc-100 p-2 text-zinc-950">
                  {signal.icon}
                </div>
                <h2 className="text-sm font-extrabold text-zinc-950">
                  {signal.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                  {signal.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <NavLink
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 font-bold text-white shadow-lg shadow-zinc-950/15 transition hover:bg-zinc-800"
            >
              Ver projetos
              <ArrowRight size={18} />
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 font-bold text-zinc-900 shadow-sm transition hover:border-zinc-500"
            >
              <Mail size={18} />
              Contato
            </NavLink>
          </div>
        </div>

        <article
          className="animate-fadeUp rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-2xl shadow-zinc-900/10 md:p-8"
          style={{ animationDelay: "140ms" }}
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                Case principal
              </p>
              <h2 className="mt-2 text-4xl font-extrabold text-zinc-950">
                Revisei
              </h2>
            </div>
            <div className="rounded-2xl bg-zinc-100 p-3 text-zinc-950">
              <Trophy size={30} />
            </div>
          </div>

          <p className="text-lg leading-relaxed text-zinc-700">
            Plataforma full stack para gestão de estudos com metas, progresso,
            autenticação, gamificação, recompensas, anti-farm, validação com Zod
            e testes com Jest.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["JWT", "rotas protegidas"],
              ["Zod", "contratos seguros"],
              ["Jest", "core testado"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-200 bg-slate-50 px-4 py-3"
              >
                <p className="text-sm font-extrabold text-zinc-950">{title}</p>
                <p className="mt-1 text-xs font-semibold text-zinc-500">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {mainStack.map((tech) => (
              <TechBadge key={tech.name} tech={tech} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://revisei.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 font-bold text-white transition hover:bg-zinc-800"
            >
              Abrir Revisei
              <ArrowRight size={18} />
            </a>
            <NavLink
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 font-bold text-zinc-900 transition hover:border-zinc-500"
            >
              Ver outros projetos
            </NavLink>
          </div>
        </article>
      </section>

      <section className="mx-auto mt-12 max-w-6xl rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-zinc-950 p-3 text-white">
              <Code2 size={22} />
            </div>
            <div>
              <p className="font-extrabold">Stack principal</p>
              <p className="text-sm text-zinc-500">
                Tecnologias usadas nos projetos com maior profundidade.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {mainStack.map((tech) => (
              <TechBadge key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
