export default function Stats() {
  const points = [
    "Treino criado para seu objetivo",
    "Nutrição ajustada à sua meta",
    "Sono e recuperação monitorados",
    "Evolução acompanhada com dados",
  ];

  return (
    <section
      id="stats"
      className="relative scroll-mt-28 px-6 py-28"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
        <div>
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            O diferencial Apex
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
            Sua evolução não deve depender de achismo.
          </h2>

          <p className="mt-8 text-xl leading-8 text-zinc-400">
            Enquanto aplicativos comuns entregam treinos genéricos,
            o Apex conecta treino, nutrição, recuperação e progresso
            em um único sistema inteligente.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-blue-600/10 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 shadow-[0_0_80px_rgba(37,99,235,0.14)]">
            <p className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Sistema Integrado
            </p>

            <div className="space-y-5">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    ✓
                  </div>

                  <span className="text-lg text-zinc-200">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-black/50 p-5">
              <p className="text-sm text-zinc-500">
                Resultado:
              </p>

              <p className="mt-2 text-2xl font-bold">
                decisões mais inteligentes para evoluir com consistência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}