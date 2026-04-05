import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="border-b bg-zinc-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-white font-semibold text-lg">Luis Pamplona</h1>

        <div className="flex gap-6">
          <NavItem to="/" label="Home" />
          <NavItem to="/projects" label="Projetos" />
          <NavItem to="/contact" label="Contato" />
        </div>
      </div>
    </nav>
  );
}

interface NavItemProps {
  to: string;
  label: string;
}

function NavItem({ to, label }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm transition ${
          isActive ? "text-white" : "text-zinc-400 hover:text-white"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
