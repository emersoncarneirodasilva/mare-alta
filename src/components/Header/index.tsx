"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sun, Moon, MessageSquare, Menu, X } from "lucide-react";
import logo from "@/public/images/logo.webp";
import { useTheme } from "@/src/hooks/useTheme";
import { useMobileMenu } from "@/src/hooks/useMobileMenu";
import { NAVIGATION_LINKS } from "@/src/constants/navigationLinks";

export default function Header() {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useTheme();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu();

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background-header border-b border-text-muted/10 transition-colors duration-300 shadow-sm">
        <div className="wrapper h-20 flex items-center justify-between">
          {/* Logo e Nome */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-background-alt border border-text-muted/20 shadow-sm">
              <Image
                src={logo}
                alt="Maré Alta Hotel & Suítes Logo"
                width={40}
                height={40}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <span className="font-serif text-2xl font-bold tracking-wide text-text-main group-hover:text-primary transition-colors">
              Maré Alta
            </span>
          </Link>

          {/* Navegação Principal (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAVIGATION_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isActive
                      ? "text-secondary font-semibold"
                      : "text-text-main hover:text-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Ações Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="w-10 h-10 rounded-xl bg-background-alt border border-text-muted/20 flex items-center justify-center text-text-main hover:text-primary hover:border-primary/40 transition-all duration-200 cursor-pointer"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <Link
              href="/contato"
              className="bg-secondary text-white px-6 py-2.5 rounded-xl font-medium flex items-center gap-2 shadow-sm hover:opacity-90 transition-all transform hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Fale conosco</span>
            </Link>
          </div>

          {/* Botões Mobile */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="w-10 h-10 rounded-xl bg-background-alt border border-text-muted/20 flex items-center justify-center text-text-main hover:text-primary transition-all"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={toggleMobileMenu}
              aria-label="Menu principal"
              className="w-10 h-10 rounded-xl bg-background-alt border border-text-muted/20 flex items-center justify-center text-text-main hover:text-primary transition-all active:scale-95"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Dropdown Mobile com Transição Suave */}
        <div
          className={`lg:hidden absolute top-20 left-0 w-full bg-background-header border-b border-text-muted/10 shadow-2xl py-6 px-6 flex flex-col gap-4 z-50 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 visible pointer-events-auto"
              : "opacity-0 -translate-y-2 invisible pointer-events-none"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {NAVIGATION_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`px-4 py-3 rounded-xl font-medium transition-all active:scale-[0.98] ${
                    isActive
                      ? "bg-secondary/10 text-secondary font-semibold"
                      : "text-text-main hover:bg-background-alt active:bg-background-alt"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-text-muted/10">
            <Link
              href="/contato"
              onClick={closeMobileMenu}
              className="w-full bg-secondary text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Fale conosco</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Overlay de fundo para capturar o clique fora do menu */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 top-20 bg-black/25 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
    </>
  );
}
