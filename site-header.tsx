"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Преимущества", href: "#why-us" },
  { label: "Кейсы", href: "#cases" },
  { label: "Контакты", href: "#contacts" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-night/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Основное меню"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-neon-cyan"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contacts"
            className="neon-glow-hover inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground"
          >
            Обсудить проект
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-night/95 backdrop-blur-md md:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4"
            aria-label="Мобильное меню"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors",
                  "hover:bg-white/10 hover:text-neon-cyan"
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setMenuOpen(false)}
              className="neon-glow-hover mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground"
            >
              Обсудить проект
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
