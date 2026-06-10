import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Apex"
              width={36}
              height={36}
            />

            <span className="text-lg font-bold tracking-[0.3em]">
              APEX
            </span>
          </div>

          <p className="mt-4 max-w-md text-sm text-zinc-500">
            Plataforma inteligente para treino, nutrição,
            recuperação e evolução física.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-zinc-400 md:text-right">
          <a href="#dashboard" className="hover:text-blue-400">
            Dashboard
          </a>

          <a href="#features" className="hover:text-blue-400">
            Recursos
          </a>

          <a href="#how-it-works" className="hover:text-blue-400">
            Como Funciona
          </a>

          <a href="#stats" className="hover:text-blue-400">
            Resultados
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-zinc-600">
        © 2026 Apex. Todos os direitos reservados.
      </div>
    </footer>
  );
}