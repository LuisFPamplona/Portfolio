const Journey = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-12">Minha Jornada</h1>

      <div className="relative border-l border-zinc-800 pl-6 space-y-10">
        <div className="relative">
          <div className="absolute -left-2.25 top-1 w-4 h-4 bg-zinc-500 rounded-full"></div>

          <div className="ml-6">
            <h2 className="text-xl font-semibold">Início na programação</h2>
            <p className="text-zinc-400 mt-2">
              Comecei meus estudos com HTML, CSS e JavaScript, focando em
              entender a base do desenvolvimento web e como as interfaces
              funcionam.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-2.25 top-1 w-4 h-4 bg-zinc-500 rounded-full"></div>

          <div className="ml-6">
            <h2 className="text-xl font-semibold">Primeiros projetos</h2>
            <p className="text-zinc-400 mt-2">
              Desenvolvi projetos como uma to-do list e um cronômetro Pomodoro,
              praticando lógica e organização de código.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-2.25 top-1 w-4 h-4 bg-zinc-500 rounded-full"></div>

          <div className="ml-6">
            <h2 className="text-xl font-semibold">Evolução com React</h2>
            <p className="text-zinc-400 mt-2">
              Aprendi componentização, hooks e construção de interfaces mais
              escaláveis.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-2.25 top-1 w-4 h-4 bg-zinc-500 rounded-full"></div>

          <div className="ml-6">
            <h2 className="text-xl font-semibold">
              Projetos mais estruturados
            </h2>
            <p className="text-zinc-400 mt-2">
              Passei a focar em boas práticas, organização de código e
              experiência do usuário.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-2.25 top-1 w-4 h-4 bg-zinc-500 rounded-full"></div>

          <div className="ml-6">
            <h2 className="text-xl font-semibold">Foco em Fullstack</h2>
            <p className="text-zinc-400 mt-2">
              Atualmente estudando Node.js, APIs e integração entre frontend e
              backend para construir aplicações completas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
