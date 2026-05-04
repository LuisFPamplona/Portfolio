import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const onTouchStart = (e: any) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <div className="flex flex-col items-center text-zinc-950 p-4 overflow-hidden">
      <div className="relative w-full max-w-6xl">
        <div
          className="flex transition-transform duration-500 ease-in-out py-10"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            transform: `translateX(calc(50% - ${currentIndex * 400 + 200}px))`,
          }}
        >
          {projects.map((project, index) => {
            const isActive = currentIndex === index;
            return (
              <div
                key={project.title}
                className={`shrink-0 w-100 px-4 transition-all duration-500 ${
                  isActive
                    ? "opacity-100 scale-110 z-10"
                    : "opacity-20 blur-md scale-90 z-0 pointer-events-none select-none"
                }`}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 w-full hidden md:flex justify-between px-4 z-20 pointer-events-none">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/90 border border-zinc-200 text-zinc-800 backdrop-blur-md rounded-full hover:bg-zinc-100 transition-all pointer-events-auto shadow-sm"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextSlide}
            className="p-3 bg-white/90 border border-zinc-200 text-zinc-800 backdrop-blur-md rounded-full hover:bg-zinc-100 transition-all pointer-events-auto shadow-sm"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="flex justify-center items-center mt-4 gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "bg-zinc-950 w-8 h-2"
                  : "bg-zinc-300 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
