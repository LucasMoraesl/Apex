"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleResetPassword() {
    setLoading(true);
    setMessage("");
    setSuccess(false);

    if (!email.trim()) {
      setMessage("Digite seu email.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setMessage("Não foi possível enviar o email de recuperação.");
      setLoading(false);
      return;
    }

    setSuccess(true);
    setMessage("Enviamos um link de recuperação para o seu email.");
    setLoading(false);
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[180px]" />

      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-zinc-950/80 p-8 shadow-[0_0_100px_rgba(37,99,235,0.18)] backdrop-blur-xl">
        <div className="mb-8 text-center">
          <Image src="/logo.png" alt="Apex" width={56} height={56} className="mx-auto" />

          <h1 className="mt-6 text-3xl font-bold">Recuperar senha</h1>

          <p className="mt-2 text-zinc-400">
            Digite seu email para receber o link de recuperação.
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

          <button
            type="button"
            onClick={handleResetPassword}
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold transition-all duration-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Enviar link de recuperação"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-5 text-center text-sm font-medium ${
              success ? "text-blue-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-zinc-500">
          Lembrou sua senha?{" "}
          <Link href="/login" className="text-blue-400 hover:text-blue-300">
            Voltar para login
          </Link>
        </p>
      </div>
    </main>
  );
}