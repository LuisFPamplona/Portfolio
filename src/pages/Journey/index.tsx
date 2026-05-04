import { useState } from "react";
import { X } from "lucide-react";
import TechName from "../../components/ui/TechName";

const roadmap = [
  {
    name: "HTML",
    stack: "Base web",
    desc: "A estrutura semântica das páginas. É onde a interface começa a ganhar organização e significado.",
  },
  {
    name: "CSS",
    stack: "Base web",
    desc: "Responsável por layout, responsividade e acabamento visual. A base para transformar estrutura em experiência.",
  },
  {
    name: "JavaScript",
    stack: "Lógica",
    desc: "A linguagem que adiciona interação, regras e comportamento às aplicações web.",
  },
  {
    name: "TypeScript",
    stack: "Lógica",
    desc: "Traz tipagem e previsibilidade para escrever código maior com mais confiança.",
  },
  {
    name: "React",
    stack: "Frontend",
    desc: "Biblioteca usada para componentizar interfaces e criar telas mais escaláveis e reaproveitáveis.",
  },
  {
    name: "Node.js",
    stack: "Backend",
    desc: "Permite construir o servidor com JavaScript, conectando a aplicação a regras, dados e autenticação.",
  },
  {
    name: "Express",
    stack: "Backend",
    desc: "Framework usado para criar APIs, rotas e middlewares de forma simples e organizada.",
  },
  {
    name: "Zod",
    stack: "Qualidade",
    desc: "Validação de dados para proteger entradas, regras e contratos da API antes de chegar no banco.",
  },
  {
    name: "Prisma",
    stack: "Dados",
    desc: "ORM que facilita a modelagem e o acesso ao banco com TypeScript e migrações mais seguras.",
  },
  {
    name: "Postgres",
    stack: "Dados",
    desc: "Banco relacional usado para armazenar dados importantes com consistência e estrutura.",
  },
  {
    name: "Jest",
    stack: "Qualidade",
    desc: "Ferramenta de testes para validar regras de negócio e reduzir regressões no core da aplicação.",
  },
];

const Journey = () => {
  const [selected, setSelected] = useState<(typeof roadmap)[number] | null>(
    null,
  );

  return (
    <main className="min-h-screen bg-slate-50 px-6 pb-20 pt-32 text-zinc-950">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl animate-fadeUp">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-600">
            Roadmap técnico
          </p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">
            Da base web ao full stack do Revisei.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Um caminho visual pelas tecnologias que sustentam meus projetos,
            indo da estrutura da interface até qualidade, dados e backend.
          </p>
        </div>

        <div className="relative md:hidden">
          <div className="absolute left-5 top-0 h-full w-0.5 bg-zinc-200" />
          <div className="grid gap-5">
            {roadmap.map((item, index) => (
              <RoadmapButton
                key={item.name}
                item={item}
                index={index}
                onClick={() => setSelected(item)}
                mobile
              />
            ))}
          </div>
        </div>

        <div className="relative hidden overflow-x-auto pb-4 md:block">
          <div className="min-w-[1180px] rounded-[2rem] border border-zinc-200 bg-white px-8 py-14 shadow-xl shadow-zinc-900/5">
            <div className="relative h-[520px]">
              <div className="absolute left-8 right-8 top-1/2 h-1 -translate-y-1/2 rounded-full bg-zinc-200" />
              <div className="absolute left-8 right-8 top-1/2 h-1 -translate-y-1/2 rounded-full bg-linear-to-r from-zinc-950 via-zinc-700 to-zinc-400 opacity-90" />

              <div className="grid h-full grid-cols-11">
                {roadmap.map((item, index) => {
                  const isTop = index % 2 === 0;

                  return (
                    <div
                      key={item.name}
                      className="relative flex justify-center"
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      <button
                        onClick={() => setSelected(item)}
                        className={`absolute w-36 rounded-2xl border border-zinc-200 bg-white p-4 text-center shadow-lg shadow-zinc-900/5 transition hover:-translate-y-1 hover:border-zinc-500 ${
                          isTop ? "bottom-[300px]" : "top-[300px]"
                        }`}
                      >
                        <span className="block text-lg font-extrabold">
                          <TechName>{item.name}</TechName>
                        </span>
                        <span className="mt-1 block text-xs font-bold uppercase tracking-widest text-zinc-400">
                          {item.stack}
                        </span>
                      </button>

                      <div
                        className={`absolute left-1/2 w-0.5 -translate-x-1/2 bg-zinc-200 ${
                          isTop ? "bottom-[260px] h-10" : "top-[260px] h-10"
                        }`}
                      />

                      <button
                        onClick={() => setSelected(item)}
                        className="absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border-4 border-white bg-zinc-950 text-sm font-extrabold text-white shadow-lg shadow-zinc-950/20 transition hover:scale-110"
                        aria-label={`Abrir detalhes de ${item.name}`}
                      >
                        {index + 1}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/40 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">
                  {selected.stack}
                </p>
                <h2 className="mt-2 text-3xl font-extrabold">
                  <TechName>{selected.name}</TechName>
                </h2>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="rounded-full border border-zinc-200 p-2 text-zinc-500 transition hover:text-zinc-950"
                aria-label="Fechar modal"
              >
                <X size={20} />
              </button>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              {selected.desc}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

interface RoadmapButtonProps {
  item: (typeof roadmap)[number];
  index: number;
  onClick: () => void;
  mobile?: boolean;
}

function RoadmapButton({ item, index, onClick, mobile }: RoadmapButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-zinc-500 ${
        mobile ? "" : "min-h-44 flex-col justify-center text-center"
      }`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-950 text-sm font-extrabold text-white">
        {index + 1}
      </span>
      <span>
        <span className="block text-lg font-extrabold">
          <TechName>{item.name}</TechName>
        </span>
        <span className="mt-1 block text-xs font-bold uppercase tracking-widest text-zinc-400">
          {item.stack}
        </span>
      </span>
    </button>
  );
}

export default Journey;
