export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-28 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Como funciona
          </span>

          <h2 className="mt-6 text-5xl font-bold md:text-6xl">
            Simples para você.
            <br />
            Inteligente por trás.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-zinc-400">
            Você informa seus dados. O Apex transforma isso em estratégia.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 shadow-[0_0_90px_rgba(37,99,235,0.14)]">
          <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            <div>
              <p className="text-sm font-medium text-blue-400">
                01
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Perfil
              </h3>
              <p className="mt-3 text-zinc-400">
                Objetivo, experiência, rotina e preferências.
              </p>
            </div>

            <div className="hidden h-px w-16 bg-gradient-to-r from-blue-500/20 to-blue-500 md:block" />

            <div>
              <p className="text-sm font-medium text-blue-400">
                02
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Análise
              </h3>
              <p className="mt-3 text-zinc-400">
                O sistema conecta treino, dieta e recuperação.
              </p>
            </div>

            <div className="hidden h-px w-16 bg-gradient-to-r from-blue-500/20 to-blue-500 md:block" />

            <div>
              <p className="text-sm font-medium text-blue-400">
                03
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Evolução
              </h3>
              <p className="mt-3 text-zinc-400">
                Você acompanha progresso e ajusta sua jornada.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6 text-center">
            <p className="text-lg font-medium text-blue-200">
              O Apex faz a parte complexa parecer simples.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}