import Image from "next/image";

const navLinks = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Recursos", href: "#features" },
  { label: "Como Funciona", href: "#how-it-works" },
  { label: "Diferencial", href: "#stats" },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-6">
        <a href="#" className="group flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="absolute inset-0 rounded-2xl bg-blue-500/20 opacity-0 blur-xl transition group-hover:opacity-100" />

            <Image
              src="/logo.png"
              alt="Apex"
              width={30}
              height={30}
              priority
              className="relative z-10"
            />
          </div>

          <span className="text-lg font-bold tracking-[0.3em] text-white md:text-xl">
            APEX
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative transition hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden rounded-xl border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500/50 hover:text-white md:block"
          >
            Entrar
          </a>

          <a
            href="#cta"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] md:px-5"
          >
            Começar
          </a>
        </div>
      </div>
    </nav>
  );
}