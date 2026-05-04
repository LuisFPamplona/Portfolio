const TECH_COLORS: Record<string, string> = {
  html: "#e34f26",
  css: "#1572b6",
  javascript: "#c9a227",
  jest: "#99425b",
  jwt: "#111827",
  zod: "#3068b7",
  typescript: "#3178c6",
  react: "#149eca",
  "node.js": "#339933",
  node: "#339933",
  express: "#111827",
  tailwind: "#06b6d4",
  postgres: "#336791",
  postgresql: "#336791",
  prisma: "#2d3748",
  mongodb: "#47a248",
};

interface TechNameProps {
  children: string;
}

const TechName = ({ children }: TechNameProps) => {
  const color = TECH_COLORS[children.toLowerCase()] ?? "#2563eb";

  return (
    <span className="font-semibold" style={{ color }}>
      {children}
    </span>
  );
};

export default TechName;
