import { Metadata } from "next";
import Hero from "@/src/components/Amenities/Hero";
import AmenitiesList from "@/src/components/Amenities/AmenitiesList";
import Cta from "@/src/components/Cta";

export const metadata: Metadata = {
  title: "Comodidades e Estrutura",
  description:
    "Descubra a estrutura completa do Maré Alta Hotel. Café da manhã artesanal, Wi-Fi de alta velocidade, recepção 24h, estacionamento e localização estratégica em Ponta Negra, Natal.",
  openGraph: {
    title: "Comodidades e Estrutura | Maré Alta Hotel",
    description:
      "Desfrute de todo o conforto e conveniência que oferecemos: café da manhã impecável, concierge, Wi-Fi gratuito e proximidade à praia de Ponta Negra.",
    url: "https://mare-alta.pages.dev/comodidades",
    siteName: "Maré Alta Hotel",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Amenities() {
  const ctaTitle = "Pronto para viver dias inesquecíveis em nossas suítes?";
  const ctaDescription =
    "Tire suas dúvidas diretamente com nossa equipe, conheça os detalhes de cada acomodação e garanta condições exclusivas para a sua estadia.";
  const ctaButtonText = "Faça sua Reserva via WhatsApp";

  return (
    <>
      <Hero />
      <AmenitiesList />
      <Cta
        title={ctaTitle}
        description={ctaDescription}
        buttonText={ctaButtonText}
      />
    </>
  );
}
