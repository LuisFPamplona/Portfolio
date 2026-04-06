import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const fullText = "Desenvolvedor Fullstack em formação";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 animate-fadeUp">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl  font-bold ">
            Olá, eu sou <span className="text-zinc-400">Luis Pamplona</span>
          </h1>
          <p className="text-2xl font-bold mt-4">{text}</p>
          <p className="text-zinc-400 mt-4 text-lg">
            Focado em React, Node.js e TypeScript.
          </p>
          <div className="flex gap-4 mt-8">
            <NavLink
              to="/projects"
              className="bg-white text-black px-2 py-2 rounded-lg font-medium hover:opacity-80 transition"
            >
              Ver projetos
            </NavLink>
            <a
              href="https://github.com/LuisFPamplona"
              target="_blank"
              className="border border-zinc-700  px-2 py-2 rounded-lg hover:border-zinc-500 transition"
            >
              GitHub
            </a>
            <NavLink
              to="/contact"
              className="border border-zinc-700  px-2 py-2 rounded-lg hover:border-zinc-500 transition"
            >
              Contato
            </NavLink>
          </div>
          <div className="mt-10 text-sm text-zinc-500 ">
            <p>Stack atual:</p>
            <p>React • TypeScript • Node.js • Express</p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/eu-mesmo.jpeg"
            alt="Foto de perfil"
            className="w-72 h-92 object-cover rounded-full border border-zinc-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
