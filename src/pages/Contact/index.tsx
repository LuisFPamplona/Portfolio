import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Contato</h1>

        <p className="text-zinc-400 mt-3">
          Vamos conversar? Me chama em qualquer uma das plataformas abaixo.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=luispamplona2702@gmail.com"
          target="_blank"
          className="flex items-center gap-3 p-5 rounded-2xl border border-zinc-800 bg-zinc-900 hover:border-zinc-600 transition"
        >
          <FaEnvelope className="text-zinc-400" />
          <span>Email</span>
        </a>

        <a
          href="https://github.com/LuisFPamplona"
          target="_blank"
          className="flex items-center gap-3 p-5 rounded-2xl border border-zinc-800 bg-zinc-900 hover:border-zinc-600 transition"
        >
          <FaGithub className="text-zinc-400" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/luis-pamplona-552030310"
          target="_blank"
          className="flex items-center gap-3 p-5 rounded-2xl border border-zinc-800 bg-zinc-900 hover:border-zinc-600 transition sm:col-span-2"
        >
          <FaLinkedin className="text-zinc-400" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
