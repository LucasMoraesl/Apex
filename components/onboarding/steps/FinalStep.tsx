type FinalStepProps = {
  goal: string;
  days: string[];
  sleep: string;
  saving: boolean;
  onFinish: () => void;
};

export default function FinalStep({
  goal,
  days,
  sleep,
  saving,
  onFinish,
}: FinalStepProps) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-950/20 via-black to-zinc-950 p-6 text-center shadow-[0_0_120px_rgba(37,99,235,0.22)] md:p-8">
      <div className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-blue-600/25 blur-[120px]" />

      <div className="relative z-10">
        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          Apex Intelligence
        </span>

        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
          Sua estratégia inicial está pronta.
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-400">
          O Apex analisou seu objetivo, perfil físico, rotina, recuperação e
          preferências para preparar sua primeira base de evolução.
        </p>

        <div className="mx-auto mt-6 grid max-w-4xl gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-xs text-zinc-500">Objetivo</p>
            <p className="mt-2 font-semibold text-white">{goal || "--"}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-xs text-zinc-500">Treino</p>
            <p className="mt-2 font-semibold text-white">
              {days.includes("Disponibilidade Variável")
                ? "Disponibilidade variável"
                : days.length === 1
                ? "1 dia/semana"
                : days.length > 1
                ? `${days.length} dias/semana`
                : "--"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-xs text-zinc-500">Recuperação</p>
            <p className="mt-2 font-semibold text-white">{sleep || "--"}</p>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5 text-left">
          <p className="text-sm font-medium text-blue-300">Próximo passo</p>

          <p className="mt-2 text-sm text-zinc-300">
            Agora você será levado ao seu plano inicial, onde poderá visualizar
            sua estratégia, acompanhar evolução e começar sua jornada.
          </p>
        </div>

        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-blue-300">
          Sua jornada começa agora
        </p>

        <button
          type="button"
          onClick={onFinish}
          disabled={saving}
          className="group relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-2xl border border-blue-400/20 bg-blue-600 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_80px_rgba(37,99,235,0.55)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="absolute inset-0 translate-x-[-200%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-1000 group-hover:translate-x-[200%]" />

          <span className="relative flex items-center gap-3">
            {saving ? "Salvando..." : "Começar minha evolução"}
          </span>
        </button>
      </div>
    </div>
  );
}