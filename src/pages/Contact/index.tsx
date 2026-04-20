import {
  Mail,
  MessageSquareShare,
  ExternalLink,
  User2,
  Command,
} from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "Email",
      handle: "luispamplona2702@gmail.com",
      icon: <Mail className="text-blue-500" size={24} />,
      href: "mailto:luispamplona2702@gmail.com?subject=Contato%20pelo%20portfólio",
      color: "hover:border-blue-500/50",
    },
    {
      name: "LinkedIn",
      handle: "Luis Pamplona",
      icon: <User2 className="text-blue-600" size={24} />,
      href: "https://www.linkedin.com/in/luis-pamplona-552030310",
      color: "hover:border-blue-600/50",
    },
    {
      name: "GitHub",
      handle: "@LuisFPamplona",
      icon: <Command className="text-zinc-400" size={24} />,
      href: "https://github.com/LuisFPamplona",
      color: "hover:border-white/50",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 w-full py-16">
        <div className="mb-12 text-center md:text-left animate-fadeUp">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <MessageSquareShare className="text-blue-500" size={28} />
            <span className="text-blue-500 font-mono tracking-widest uppercase text-sm">
              Get in touch
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Vamos conversar?
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl">
            Estou sempre aberto a novas oportunidades ou apenas para trocar uma
            ideia.
          </p>
        </div>

        <div
          className="grid gap-6 md:grid-cols-2 animate-fadeUp"
          style={{ animationDelay: "200ms" }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className={`group relative p-6 rounded-3xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm transition-all duration-300 ${link.color} hover:-translate-y-2 flex items-center justify-between shadow-xl`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{link.name}</h3>
                  <p className="text-zinc-500 text-sm">{link.handle}</p>
                </div>
              </div>

              <ExternalLink
                size={20}
                className="text-zinc-700 group-hover:text-white transition-colors"
              />
            </a>
          ))}

          <div className="md:col-span-2 p-8 rounded-3xl border border-dashed border-zinc-800 flex flex-col items-center justify-center text-center space-y-4">
            <p className="text-zinc-500 italic">
              "A melhor forma de prever o futuro é inventá-lo."
            </p>
            <div className="h-1 w-12 bg-blue-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
