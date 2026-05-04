import { NavLink } from "react-router-dom";
import { Home, FolderCode, Briefcase, Mail, Code2 } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-zinc-950 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Code2 size={20} className="text-white" />
          </div>
          <h1 className="text-zinc-950 font-bold text-xl tracking-tight">
            Luis <span className="text-zinc-500">Pamplona</span>
          </h1>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <NavItem to="/" label="Home" icon={<Home size={18} />} />
          <NavItem
            to="/projects"
            label="Projetos"
            icon={<FolderCode size={18} />}
          />
          <NavItem
            to="/journey"
            label="Jornada"
            icon={<Briefcase size={18} />}
          />

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? "bg-zinc-950 text-white"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-950"
              }`
            }
          >
            <Mail size={18} />
            <span className="hidden sm:inline">Contato</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
}

function NavItem({ to, icon, label }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-300 ${
          isActive ? "text-zinc-950" : "text-zinc-600 hover:text-zinc-950"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {icon}
          <span className="hidden md:inline">{label}</span>

          {isActive && (
            <div className="absolute -bottom-4.25 left-0 right-0 h-0.5 bg-zinc-950 rounded-full shadow-[0_0_8px_rgba(24,24,27,0.28)]" />
          )}
        </>
      )}
    </NavLink>
  );
}
