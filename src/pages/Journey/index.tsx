import { Rocket, Code, Laptop, Database, GraduationCap } from "lucide-react";

const Journey = () => {
  const steps = [
    {
      title: "Início na programação",
      desc: "Comecei meus estudos com HTML, CSS e JavaScript, focando em entender a base do desenvolvimento web e como as interfaces funcionam.",
      icon: <GraduationCap size={20} />,
      year: "2025",
    },
    {
      title: "Primeiros projetos",
      desc: "Desenvolvi projetos como uma to-do list e um cronômetro Pomodoro, praticando lógica e organização de código.",
      icon: <Code size={20} />,
      year: "2025",
    },
    {
      title: "Evolução com React",
      desc: "Aprendi componentização, hooks e construção de interfaces mais escaláveis e performáticas.",
      icon: <Laptop size={20} />,
      year: "2025",
    },
    {
      title: "Projetos Estruturados",
      desc: "Foco total em boas práticas, clean code e aprimoramento da experiência do usuário (UX/UI).",
      icon: <Rocket size={20} />,
      year: "2026",
    },
    {
      title: "Foco em Fullstack",
      desc: "Atualmente imerso em Node.js, bancos de dados e integração de APIs para construir aplicações de ponta a ponta.",
      icon: <Database size={20} />,
      year: "Presente",
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 animate-fadeUp">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Minha <span className="text-blue-500">Jornada</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Um resumo da minha evolução técnica e os marcos da minha carreira
            como desenvolvedor.
          </p>
        </div>

        <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-8 space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative pl-10 animate-fadeUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -left-5.25 top-0 flex items-center justify-center w-10 h-10 bg-zinc-950 border-2 border-zinc-800 rounded-xl text-zinc-500 group-hover:border-blue-500 transition-colors">
                <div className="bg-black p-1">{step.icon}</div>
              </div>

              <div className="group bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h2>
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full w-fit">
                    {step.year}
                  </span>
                </div>
                <p className="text-zinc-400 leading-relaxed italic">
                  "{step.desc}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
