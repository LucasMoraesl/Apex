"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRules, setShowPasswordRules] = useState(false);
  const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  const isPasswordValid =
    hasMinLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar;

  async function handleUpdatePassword() {
    setLoading(true);
    setMessage("");
    setSuccess(false);
    setShowConfirmPasswordError(false);

    if (!isPasswordValid) {
      setShowPasswordRules(true);
      setMessage("A senha ainda não atende todos os requisitos.");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setShowConfirmPasswordError(true);
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setMessage("Não foi possível atualizar sua senha.");
      setLoading(false);
      return;
    }

    setSuccess(true);
    setMessage("Senha atualizada com sucesso! Redirecionando para o login...");

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  }

  function PasswordRule({ valid, text }: { valid: boolean; text: string }) {
    return (
      <p className={`text-xs transition ${valid ? "text-blue-400" : "text-zinc-500"}`}>
        {valid ? "✓" : "•"} {text}
      </p>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[180px]" />

      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-zinc-950/80 p-8 shadow-[0_0_100px_rgba(37,99,235,0.18)] backdrop-blur-xl">
        <div className="mb-8 text-center">
          <Image src="/logo.png" alt="Apex" width={56} height={56} className="mx-auto" />

          <h1 className="mt-6 text-3xl font-bold">Criar nova senha</h1>

          <p className="mt-2 text-zinc-400">
            Digite sua nova senha para recuperar o acesso.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="text-sm text-zinc-400">Nova senha</label>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onFocus={() => setShowPasswordRules(true)}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 pr-24 outline-none transition focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-blue-400 hover:text-blue-300"
              >
                {showPassword ? "Ocultar" : "Ver"}
              </button>
            </div>

            {showPasswordRules && (
              <div className="mt-3 grid gap-1">
                <PasswordRule valid={hasMinLength} text="Mínimo de 8 caracteres" />
                <PasswordRule valid={hasUppercase} text="Pelo menos 1 letra maiúscula" />
                <PasswordRule valid={hasLowercase} text="Pelo menos 1 letra minúscula" />
                <PasswordRule valid={hasNumber} text="Pelo menos 1 número" />
                <PasswordRule valid={hasSpecialChar} text="Pelo menos 1 caractere especial" />
              </div>
            )}
          </div>

          <div>
            <label className="text-sm text-zinc-400">Confirmar nova senha</label>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onFocus={() => {
                  if (isPasswordValid) {
                    setShowPasswordRules(false);
                  }
                }}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setShowConfirmPasswordError(false);
                }}
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 pr-24 outline-none transition focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-blue-400 hover:text-blue-300"
              >
                {showPassword ? "Ocultar" : "Ver"}
              </button>
            </div>

            {showConfirmPasswordError && (
              <p className="mt-2 text-xs text-red-400">
                • As senhas não coincidem.
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleUpdatePassword}
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold transition-all duration-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Atualizando..." : "Atualizar senha"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
            Lembrou sua senha?{" "}
            <Link
                href="/login"
                className="text-blue-400 hover:text-blue-300"
            >
                Voltar para login
            </Link>
            </p>
      </div>
    </main>
  );
}