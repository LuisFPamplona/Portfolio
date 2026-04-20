import ProjectList from "../../components/project/ProjectList";
import { FolderGit2 } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-16 md:pb-0">
      <div className="max-w-5xl mx-auto px-6 mb-12 md:mb-20">
        <div className="flex items-center gap-3 mb-4 animate-fadeUp">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <FolderGit2 className="text-blue-500" size={24} />
          </div>
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">
            Portfolio
          </span>
        </div>

        <h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fadeUp"
          style={{ animationDelay: "100ms" }}
        >
          Meus <span className="text-zinc-500">Projetos</span>
        </h1>

        <p
          className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed animate-fadeUp"
          style={{ animationDelay: "200ms" }}
        >
          Uma seleção de experimentos, aplicações reais e desafios técnicos que
          desenvolvi para consolidar meu conhecimento em{" "}
          <span className="text-white">Fullstack Development</span>.
        </p>

        <div
          className="w-full h-px bg-linear-to-r from-zinc-800 to-transparent mt-12 animate-fadeUp"
          style={{ animationDelay: "300ms" }}
        />
      </div>

      <section className="animate-fadeUp" style={{ animationDelay: "400ms" }}>
        <ProjectList />
      </section>
    </div>
  );
};

export default Projects;
