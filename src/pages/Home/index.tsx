import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-fadeUp">
      <h1 className="text-4xl md:text-5xl font-bold ">
        Olá, eu sou <span className="text-zinc-400">Luis Pamplona</span>
      </h1>
      <p className="text-zinc-400 mt-4 text-lg">
        Desenvolvedor Fullstack em formação, focado em React, Node.js e
        TypeScript.
      </p>
      <div className="flex gap-4 mt-8">
        <NavLink
          to="/projects"
          className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:opacity-80 transition"
        >
          Ver projetos
        </NavLink>

        <a
          href="https://github.com/LuisFPamplona"
          target="_blank"
          className="border border-zinc-700  px-4 py-2 rounded-lg hover:border-zinc-500 transition"
        >
          GitHub
        </a>
      </div>
      <div className="mt-10 text-sm text-zinc-500 ">
        <p>Stack atual:</p>
        <p>React • TypeScript • Node.js • Express</p>
      </div>
    </div>
  );
};

export default Home;
