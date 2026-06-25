"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import TermsModal from "@/components/modal/TermsModal";
import PrivacyModal from "@/components/modal/PrivacyModal";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRules, setShowPasswordRules] = useState(false);
  const [showConfirmPasswordError, setShowConfirmPasswordError] =
    useState(false);

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

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

  async function handleRegister() {
    setLoading(true);
    setMessage("");
    setSuccess(false);
    setShowConfirmPasswordError(false);

    if (!name.trim()) {
      setMessage("Digite seu nome.");
      setLoading(false);
      return;
    }

    if (!email.trim()) {
      setMessage("Digite seu email.");
      setLoading(false);
      return;
    }

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

    if (!acceptedTerms) {
      setMessage(
        "Você precisa aceitar os Termos de Uso e a Política de Privacidade."
      );
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      setSuccess(false);
      setLoading(false);
      return;
    }

    setMessage("Conta criada com sucesso! Redirecionando para o login...");
    setSuccess(true);

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  }

  function PasswordRule({ valid, text }: { valid: boolean; text: string }) {
    return (
      <p
        className={`text-xs transition ${
          valid ? "text-blue-400" : "text-zinc-500"
        }`}
      >
        {valid ? "✓" : "•"} {text}
      </p>
    );
  }

  return (
    <>
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[180px]" />

        <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-zinc-950/80 p-8 shadow-[0_0_100px_rgba(37,99,235,0.18)] backdrop-blur-xl">
          <div className="mb-8 text-center">
            <Image
              src="/logo.png"
              alt="Apex"
              width={56}
              height={56}
              className="mx-auto"
            />

            <h1 className="mt-6 text-3xl font-bold">Criar Conta</h1>

            <p className="mt-2 text-zinc-400">
              Comece sua jornada de evolução com o Apex.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="text-sm text-zinc-400">Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                maxLength={50}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

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
                  <PasswordRule
                    valid={hasMinLength}
                    text="Mínimo de 8 caracteres"
                  />
                  <PasswordRule
                    valid={hasUppercase}
                    text="Pelo menos 1 letra maiúscula"
                  />
                  <PasswordRule
                    valid={hasLowercase}
                    text="Pelo menos 1 letra minúscula"
                  />
                  <PasswordRule
                    valid={hasNumber}
                    text="Pelo menos 1 número"
                  />
                  <PasswordRule
                    valid={hasSpecialChar}
                    text="Pelo menos 1 caractere especial"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="text-sm text-zinc-400">Confirmar senha</label>

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

            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 p-4">
              <input
                id="terms"
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1 h-4 w-4 accent-blue-600"
              />

              <label htmlFor="terms" className="text-sm leading-6 text-zinc-400">
                Li e concordo com os{" "}
                <button
                  type="button"
                  onClick={() => setShowTermsModal(true)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Termos de Uso
                </button>{" "}
                e a{" "}
                <button
                  type="button"
                  onClick={() => setShowPrivacyModal(true)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Política de Privacidade
                </button>
                .
              </label>
            </div>

            <button
              type="button"
              onClick={handleRegister}
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Criando conta..." : "Criar Conta"}
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
            Já possui uma conta?{" "}
            <a href="/login" className="text-blue-400 hover:text-blue-300">
              Entrar
            </a>
          </p>
        </div>
      </main>

      {showTermsModal && (
        <TermsModal onClose={() => setShowTermsModal(false)} />
      )}

      {showPrivacyModal && (
        <PrivacyModal onClose={() => setShowPrivacyModal(false)} />
      )}
    </>
  );
}