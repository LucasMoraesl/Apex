"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1d4ed820,transparent_35%),radial-gradient(circle_at_center,#2563eb18,transparent_40%),#000]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 -z-10 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[190px]"
      />

      <div className="absolute inset-x-0 top-20 -z-10 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
          >
            Sistema inteligente de evolução física
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Treine melhor.
            <br />
            Evolua mais rápido.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Com inteligência.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-400 lg:mx-0"
          >
            O Apex conecta treino, nutrição, recuperação e progresso
            em uma única plataforma para transformar dados em evolução real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="/register"
              className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_55px_rgba(37,99,235,0.5)]"
            >
              Começar Agora
            </a>

            <a
              href="#dashboard"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-medium text-zinc-200 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10"
            >
              Ver Dashboard
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-4 text-center lg:max-w-xl"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <h3 className="text-2xl font-bold text-blue-400">+10</h3>
              <p className="mt-1 text-xs text-zinc-500">variáveis</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <h3 className="text-2xl font-bold text-blue-400">100%</h3>
              <p className="mt-1 text-xs text-zinc-500">personalizado</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <h3 className="text-2xl font-bold text-blue-400">24/7</h3>
              <p className="mt-1 text-xs text-zinc-500">evolução</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-blue-600/20 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 shadow-[0_0_120px_rgba(37,99,235,0.22)] backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-500">Apex Intelligence</p>
                <h3 className="text-2xl font-bold">Plano de hoje</h3>
              </div>

              <span className="rounded-full bg-green-500/15 px-4 py-2 text-sm text-green-400">
                Ativo
              </span>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-sm text-zinc-500">Treino</p>
                <div className="mt-3 flex items-end justify-between">
                  <h4 className="text-3xl font-bold">Push A</h4>
                  <span className="text-blue-400">72 min</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Dieta</span>
                  <span className="text-orange-400">3500 kcal</span>
                </div>

                <div className="mt-4 h-2 rounded-full bg-zinc-800">
                  <div className="h-2 w-[78%] rounded-full bg-blue-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-sm text-zinc-500">Sleep Score</p>
                  <h4 className="mt-3 text-3xl font-bold text-blue-400">92</h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-sm text-zinc-500">Evolução</p>
                  <h4 className="mt-3 text-3xl font-bold text-green-400">
                    +14%
                  </h4>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-sm text-zinc-500">Progressão semanal</p>
                <div className="mt-5 flex h-24 items-end gap-2">
                  <div className="h-[35%] flex-1 rounded-t bg-blue-900" />
                  <div className="h-[48%] flex-1 rounded-t bg-blue-800" />
                  <div className="h-[58%] flex-1 rounded-t bg-blue-700" />
                  <div className="h-[70%] flex-1 rounded-t bg-blue-600" />
                  <div className="h-[85%] flex-1 rounded-t bg-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}