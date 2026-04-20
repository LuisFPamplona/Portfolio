import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Send, ArrowRight, Terminal } from "lucide-react";

const Home = () => {
  const fullText = "Desenvolvedor Fullstack em formação";
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white pt-32 md:pt-0 pb-10 md:pb-0">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-fadeUp">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponível para novos projetos
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Olá, eu sou <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-500">
                Luis Pamplona
              </span>
            </h1>

            <div className="flex items-center gap-2 h-8">
              <Terminal size={24} className="text-blue-500" />
              <p className="text-xl md:text-2xl font-mono text-zinc-300">
                {text}
                <span
                  className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity text-blue-500 ml-1`}
                >
                  |
                </span>
              </p>
            </div>

            <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
              Especializado em construir interfaces modernas e APIs robustas com
              <span className="text-white font-medium">
                {" "}
                React, Node.js e TypeScript.
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <NavLink
              to="/projects"
              className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Ver projetos
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </NavLink>

            <a
              href="https://github.com/LuisFPamplona"
              target="_blank"
              className="flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-6 py-3 rounded-full font-medium hover:border-zinc-600 transition-all"
            >
              GitHub
            </a>

            <NavLink
              to="/contact"
              className="flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-6 py-3 rounded-full font-medium hover:border-zinc-600 transition-all"
            >
              <Send size={18} />
              Contato
            </NavLink>
          </div>

          <div className="pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-4">
              Minha Stack
            </p>
            <div className="flex gap-4 text-zinc-400 font-medium">
              <span className="hover:text-white transition-colors">React</span>
              <span className="text-zinc-700">•</span>
              <span className="hover:text-white transition-colors">
                TypeScript
              </span>
              <span className="text-zinc-700">•</span>
              <span className="hover:text-white transition-colors">
                Node.js
              </span>
              <span className="text-zinc-700">•</span>
              <span className="hover:text-white transition-colors">
                Express
              </span>
            </div>
          </div>
        </div>

        <div
          className="relative flex justify-center md:justify-end animate-fadeUp"
          style={{ animationDelay: "200ms" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-[80px] -z-10"></div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-zinc-500 rounded-4xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/eu-mesmo.jpeg"
              alt="Luis Pamplona"
              className="relative w-72 h-96 object-cover rounded-4xl border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl rotate-3 hover:rotate-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
