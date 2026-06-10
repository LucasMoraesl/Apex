"use client";

import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="relative scroll-mt-12 px-6 pt-24 pb-28"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-12 text-center">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Apex Dashboard
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Tudo em um só lugar.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xl text-zinc-400">
            Treino, dieta, recuperação e evolução conectados
            em uma única experiência inteligente.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-5 md:p-6 shadow-[0_0_120px_rgba(37,99,235,0.18)] backdrop-blur-xl">
          <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">Painel de Evolução</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Visão inteligente da sua performance diária.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-500/15 px-4 py-2 text-sm text-green-400">
                Sistema Ativo
              </div>

              <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
                Hoje
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {[
              {
                title: "Treino de Hoje",
                value: "Push A",
                subtitle: "Peito • Ombro • Tríceps",
                color: "text-white",
              },
              {
                title: "Dieta do Dia",
                value: "3500 kcal",
                subtitle: "Meta para ganho de massa",
                color: "text-orange-400",
              },
              {
                title: "Recuperação",
                value: "92",
                subtitle: "Sleep Score excelente",
                color: "text-blue-400",
              },
              {
                title: "Evolução",
                value: "+14%",
                subtitle: "Últimos 30 dias",
                color: "text-green-400",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_45px_rgba(37,99,235,0.15)]"
              >
                <p className="text-sm text-zinc-500">{card.title}</p>
                <h4 className={`mt-3 text-3xl font-bold ${card.color}`}>
                  {card.value}
                </h4>
                <p className="mt-2 text-sm text-zinc-500">{card.subtitle}</p>

                {card.title === "Treino de Hoje" && (
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-zinc-900 p-3 text-sm">
                      <span>Supino reto</span>
                      <span className="text-blue-400">4x8</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-zinc-900 p-3 text-sm">
                      <span>Desenvolvimento</span>
                      <span className="text-blue-400">3x10</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-zinc-900 p-3 text-sm">
                      <span>Tríceps corda</span>
                      <span className="text-blue-400">3x12</span>
                    </div>
                  </div>
                )}

                {card.title === "Dieta do Dia" && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Proteína</span>
                        <span className="text-zinc-400">180g</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-800">
                        <div className="h-2 w-[82%] rounded-full bg-blue-500" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Carboidrato</span>
                        <span className="text-zinc-400">480g</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-800">
                        <div className="h-2 w-[70%] rounded-full bg-orange-400" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Água</span>
                        <span className="text-zinc-400">3.2L</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-800">
                        <div className="h-2 w-[64%] rounded-full bg-cyan-400" />
                      </div>
                    </div>
                  </div>
                )}

                {card.title === "Recuperação" && (
                  <div className="mt-6 rounded-2xl bg-zinc-900 p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span>Sono</span>
                      <span className="text-blue-400">8h 12min</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span>Fadiga</span>
                      <span className="text-green-400">Baixa</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span>Pronto para treino</span>
                      <span className="text-green-400">Sim</span>
                    </div>
                  </div>
                )}

                {card.title === "Evolução" && (
                  <div className="mt-6 flex h-32 items-end gap-2 rounded-2xl bg-zinc-900 p-4">
                    <div className="h-[35%] flex-1 rounded-t bg-blue-900" />
                    <div className="h-[48%] flex-1 rounded-t bg-blue-800" />
                    <div className="h-[42%] flex-1 rounded-t bg-blue-700" />
                    <div className="h-[64%] flex-1 rounded-t bg-blue-600" />
                    <div className="h-[70%] flex-1 rounded-t bg-blue-500" />
                    <div className="h-[85%] flex-1 rounded-t bg-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

<div className="mt-6 grid gap-6 lg:grid-cols-3">
  <div className="rounded-3xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_45px_rgba(37,99,235,0.15)]">
    <p className="text-sm text-zinc-500">Peso Atual</p>

    <div className="mt-3 flex items-end justify-between">
      <h4 className="text-3xl font-bold">65kg</h4>
      <span className="text-sm text-green-400">+2.1kg este mês</span>
    </div>

    <p className="mt-2 text-sm text-zinc-500">
      Meta: 75kg
    </p>

    <div className="mt-6">
      <div className="mb-2 flex justify-between text-xs text-zinc-500">
        <span>65kg</span>
        <span>75kg</span>
      </div>

      <div className="h-2 rounded-full bg-zinc-800">
        <div className="h-2 w-[62%] rounded-full bg-blue-500" />
      </div>
    </div>
  </div>

  <div className="rounded-3xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_45px_rgba(37,99,235,0.15)]">
    <p className="text-sm text-zinc-500">Consistência</p>

    <h4 className="mt-3 text-3xl font-bold">
      12 dias
    </h4>

    <p className="mt-2 text-sm text-zinc-500">
      Sequência de hábitos ativos
    </p>

    <div className="mt-6 grid grid-cols-7 gap-2">
      {["S", "T", "Q", "Q", "S", "S", "D"].map((day, index) => (
        <div
          key={`${day}-${index}`}
          className={`flex h-9 items-center justify-center rounded-lg text-xs ${
            index < 6
              ? "bg-blue-500/20 text-blue-300"
              : "bg-zinc-900 text-zinc-600"
          }`}
        >
          {day}
        </div>
      ))}
    </div>
  </div>

  <div className="rounded-3xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_45px_rgba(37,99,235,0.15)]">
    <p className="text-sm text-zinc-500">Volume Semanal</p>

    <div className="mt-3 flex items-end justify-between">
      <h4 className="text-3xl font-bold text-blue-400">
        18.4t
      </h4>
      <span className="text-sm text-green-400">+9%</span>
    </div>

    <p className="mt-2 text-sm text-zinc-500">
      Carga total movimentada
    </p>

    <div className="mt-6 flex h-16 items-end gap-2">
      <div className="h-[40%] flex-1 rounded-t bg-blue-900" />
      <div className="h-[55%] flex-1 rounded-t bg-blue-800" />
      <div className="h-[48%] flex-1 rounded-t bg-blue-700" />
      <div className="h-[72%] flex-1 rounded-t bg-blue-600" />
      <div className="h-[85%] flex-1 rounded-t bg-blue-500" />
    </div>
  </div>
</div>
        </div>
      </motion.div>
    </section>
  );
}