"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CONSENT_STORAGE_KEY, grantConsent } from "@/lib/gtag";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_STORAGE_KEY);
    // Banner só aparece após mount pra evitar hydration mismatch (SSR não tem localStorage).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, "accepted");
    grantConsent();
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[60] bg-[#1d1d1f] border border-white/[0.1] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] p-5 anim-fade-up"
    >
      <p className="text-[#f5f5f7] text-sm font-medium mb-2">
        Cookies neste site
      </p>
      <p className="text-[#a1a1a6] text-xs leading-relaxed mb-4">
        Usamos cookies para entender como você navega no site e melhorar sua
        experiência. Veja nossa{" "}
        <Link
          href="/privacidade"
          className="text-[#c9a84c] hover:text-[#e8c96a] underline-offset-2 hover:underline transition-colors"
        >
          política de privacidade
        </Link>
        .
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={accept}
          className="bg-[#c9a84c] hover:bg-[#e8c96a] text-black text-xs font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
        >
          Aceitar
        </button>
        <button
          onClick={decline}
          className="text-[#a1a1a6] hover:text-[#f5f5f7] text-xs px-4 py-2.5 transition-colors duration-200"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}
