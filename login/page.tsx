"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin() {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage("Email ou senha incorretos.");
      setLoading(false);
      return;
    }

    setMessage("Login realizado com sucesso! Redirecionando...");

    setTimeout(() => {
      router.push("/onboarding");
    }, 1500);
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[180px]" />

      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-zinc-950/80 p-8 shadow-[0_0_100px_rgba(37,99,235,0.18)] backdrop-blur-xl">
        <div className="mb-8 text-center">
          <Image src="/logo.png" alt="Apex" width={56} height={56} className="mx-auto" />

          <h1 className="mt-6 text-3xl font-bold">Entrar</h1>

          <p className="mt-2 text-zinc-400">
            Continue sua evolução com o Apex.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="text-sm text-zinc-400">Email</label>
            <input
              type="email"
              placeholder="seuemail@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400">Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold transition-all duration-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        {message && (
  <p className="mt-5 text-center text-sm font-medium text-blue-400">
    {message}
  </p>
)}

        <p className="mt-6 text-center text-sm text-zinc-500">
          Ainda não tem conta?{" "}
          <a href="/register" className="text-blue-400">
            Criar conta
          </a>
        </p>
      </div>
    </main>
  );
}