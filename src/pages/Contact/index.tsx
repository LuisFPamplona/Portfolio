import {
  ArrowUpRight,
  Command,
  Mail,
  MessageSquareShare,
  User2,
} from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "Email",
      handle: "luispamplona2702@gmail.com",
      icon: <Mail className="text-zinc-950" size={26} />,
      href: "mailto:luispamplona2702@gmail.com?subject=Contato%20pelo%20portfolio",
      label: "Enviar email",
    },
    {
      name: "LinkedIn",
      handle: "Luis Pamplona",
      icon: <User2 className="text-zinc-950" size={26} />,
      href: "https://www.linkedin.com/in/luis-pamplona-552030310",
      label: "Abrir LinkedIn",
    },
    {
      name: "GitHub",
      handle: "@LuisFPamplona",
      icon: <Command className="text-zinc-800" size={26} />,
      href: "https://github.com/LuisFPamplona",
      label: "Abrir GitHub",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-6 pb-20 pt-32 text-zinc-950">
      <section className="mx-auto max-w-5xl">
        <div className="mb-10 animate-fadeUp">
          <div className="mb-4 flex items-center gap-2">
            <MessageSquareShare className="text-zinc-950" size={28} />
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-600">
              Get in touch
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-extrabold md:text-6xl">
            Bora conversar sobre projetos, oportunidades ou colaboração.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Escolha o canal que preferir. Deixei tudo bem visível para o
            contato acontecer sem fricção.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex min-h-56 flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-900/5 transition hover:-translate-y-1 hover:border-zinc-500"
            >
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50">
                  {link.icon}
                </div>
                <h2 className="text-2xl font-extrabold">{link.name}</h2>
                <p className="mt-2 break-words text-zinc-600">{link.handle}</p>
              </div>

              <span className="mt-8 inline-flex items-center gap-2 font-bold text-zinc-950">
                {link.label}
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-dashed border-zinc-300 bg-white p-6 text-center">
          <p className="text-lg font-semibold text-zinc-800">
            Atualmente aberto para projetos, freelas e oportunidades como
            desenvolvedor.
          </p>
        </div>
      </section>
    </main>
  );
}
