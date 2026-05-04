import type { Tech } from "../../types/project";

interface TechBadgeProps {
  tech: Tech;
}

const TechBadge = ({ tech }: TechBadgeProps) => {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-semibold shadow-sm">
      <img src={tech.link} alt={tech.name} className="h-5 w-5 object-contain" />
      <span style={{ color: tech.color }}>{tech.name}</span>
    </span>
  );
};

export default TechBadge;
