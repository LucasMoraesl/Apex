export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden px-6 py-36"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[250px]" />

      {/* Linha */}
      <div className="absolute left-0 right-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl text-center">

        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
          Apex Intelligence
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
          Sua evolução merece
          <br />

          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            mais do que achismos.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-zinc-400">
          Treino, nutrição, recuperação e progresso
          unidos em uma única plataforma criada para
          acelerar sua evolução física.
        </p>

        <div className="mt-16">
          <a
            href="/register"
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              bg-blue-600
              px-12
              py-5
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-blue-500
              hover:shadow-[0_0_100px_rgba(37,99,235,0.7)]
            "
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-20" />

            <span className="relative">
              Começar Agora
            </span>
          </a>
        </div>

        <p className="mt-10 text-sm uppercase tracking-[0.35em] text-zinc-600">
          Treino • Nutrição • Recuperação • Evolução
        </p>

      </div>
    </section>
  );
}