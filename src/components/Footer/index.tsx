import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import logo from "@/public/images/logo.webp";
import { FOOTER_NAVIGATION, SOCIAL_LINKS } from "@/src/constants/footerData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = process.env.WHATSAPP_NUMBER || "+558499999999";
  const phoneNumber = process.env.PHONE_NUMBER || "+55 (84) 99999-9999";

  return (
    <footer className="w-full bg-background-footer border-t border-text-muted/10 transition-colors duration-300 text-text-main">
      {/* Seção Principal do Rodapé */}
      <div className="wrapper py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
        {/* Coluna 1: Logo, Slogan e Redes Sociais */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3 group w-fit">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-background-alt border border-text-muted/20 shadow-sm">
              <Image
                src={logo}
                alt="Maré Alta Hotel & Suítes Logo"
                width={40}
                height={40}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="font-serif text-2xl font-bold tracking-wide text-text-main group-hover:text-primary transition-colors">
              Maré Alta
            </span>
          </Link>

          <p className="text-text-muted text-sm leading-relaxed max-w-sm">
            Conforto e acolhimento para você viver Natal em sua melhor essência.
          </p>

          {/* Redes Sociais com .map() */}
          <div className="flex items-center gap-3 pt-2">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }, index) => (
              <a
                key={index}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-background-alt border border-text-muted/20 flex items-center justify-center text-text-main hover:text-primary hover:border-primary/40 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Coluna 2: Hotel */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold font-sans text-sm tracking-wider uppercase text-text-main">
            Hotel
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-text-muted">
            {FOOTER_NAVIGATION.hotel.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3: Informações */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold font-sans text-sm tracking-wider uppercase text-text-main">
            Informações
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-text-muted">
            {FOOTER_NAVIGATION.information.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 4: Atendimento */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold font-sans text-sm tracking-wider uppercase text-text-main">
            Atendimento
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-text-muted">
            {FOOTER_NAVIGATION.support.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <span className="font-medium text-text-main block">
                Fale Conosco
              </span>
            </li>
            <li>
              <a
                href={`tel:${whatsappNumber}`}
                className="flex items-center gap-2 hover:text-secondary transition-colors text-text-main"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>{phoneNumber}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra Inferior (Copyright e Políticas) */}
      <div className="border-t border-text-muted/10 py-6">
        <div className="wrapper flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            © {currentYear} Maré Alta Hotel & Suítes. Todos os direitos
            reservados.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacidade"
              className="hover:text-secondary transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="/termos"
              className="hover:text-secondary transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
