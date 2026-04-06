import ProjectList from "../../components/project/ProjectList";

const Projects = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-16 ">
        <div className="">
          <h1 className="text-3xl md:text-4xl font-bold">Meus Projetos</h1>

          <p className="text-zinc-400 mt-3">
            Alguns projetos que desenvolvi para praticar e evoluir minhas
            habilidades em React, TypeScript e Node.js.
          </p>
        </div>
      </div>
      {<ProjectList />}
    </>
  );
};

export default Projects;
