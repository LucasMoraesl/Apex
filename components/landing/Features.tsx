import {
  Dumbbell,
  Apple,
  Moon,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Treino Inteligente",
    description:
      "Treinos criados automaticamente com base no seu objetivo, experiência, disponibilidade e foco muscular.",
  },
  {
    icon: Apple,
    title: "Nutrição Personalizada",
    description:
      "Calorias, proteínas, carboidratos e gorduras calculados para sua meta de evolução física.",
  },
  {
    icon: Moon,
    title: "Recuperação Otimizada",
    description:
      "Sleep Score, fadiga e recuperação monitorados para melhorar sua performance nos treinos.",
  },
  {
    icon: TrendingUp,
    title: "Evolução Contínua",
    description:
      "Acompanhe cargas, recordes pessoais, volume semanal e progresso ao longo do tempo.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-28 px-6 pt-12 pb-20"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Recursos do Apex
          </span>

          <h2 className="mt-6 text-5xl font-bold md:text-6xl">
            Uma plataforma completa.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-zinc-400">
            Tudo o que você precisa para treinar melhor, recuperar melhor
            e evoluir com mais inteligência.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-zinc-900 hover:shadow-[0_0_70px_rgba(37,99,235,0.22)]"
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-blue-600/10 blur-3xl transition group-hover:bg-blue-500/20" />

                <div className="relative z-10">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 shadow-[0_0_30px_rgba(37,99,235,0.18)]">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>

                  <h3 className="text-3xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-zinc-400">
                    {feature.description}
                  </p>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent" />

                  <p className="mt-5 text-sm font-medium text-blue-400">
                    Integrado ao seu dashboard Apex
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}