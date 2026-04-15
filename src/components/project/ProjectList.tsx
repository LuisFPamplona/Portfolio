import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="grid gap-6 sm:grid-cols-3 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
