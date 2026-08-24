import { Metadata } from "next";
import Hero from "@/src/components/Contact/Hero";
import ContactSection from "@/src/components/Contact/ContactSection";
import Location from "@/src/components/Contact/Location";

export const metadata: Metadata = {
  title: "Contato | Maré Alta Hotel",
  description:
    "Entre em contato conosco, tire suas dúvidas, faça sua reserva e venha desfrutar do refúgio perfeito na Praia de Ponta Negra, em Natal.",
  openGraph: {
    title: "Contato | Maré Alta Hotel",
    description:
      "Fale diretamente com nossa equipe via WhatsApp ou venha nos visitar em Ponta Negra, Natal - RN.",
    url: "https://marealtahotel.com.br/contato", // Ajuste para a URL real do seu projeto quando publicar
    siteName: "Maré Alta Hotel",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Contact() {
  return (
    <>
      <Hero />
      <ContactSection />
      <Location />
    </>
  );
}
