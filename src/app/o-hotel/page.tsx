import { Metadata } from "next";
import Hero from "@/src/components/About/Hero";
import History from "@/src/components/About/History";
import Differentials from "@/src/components/About/Differentials";
import Spaces from "@/src/components/About/Spaces";
import Cta from "@/src/components/Cta";

export const metadata: Metadata = {
  title: "Sobre o Hotel",
  description:
    "Conheça a história e os diferenciais do Maré Alta Hotel. Um refúgio de sofisticação, conforto e atendimento dedicado no coração de Ponta Negra, Natal.",
  openGraph: {
    title: "Sobre o Maré Alta Hotel | O seu refúgio em Ponta Negra",
    description:
      "Descubra o que torna o Maré Alta único. Design litorâneo, proximidade à costa e a hospitalidade que você merece em Natal.",
    url: "https://marealtahotel.com.br/sobre",
    siteName: "Maré Alta Hotel",
    locale: "pt_BR",
    type: "website",
  },
};

export default function About() {
  const ctaTitle = "Pronto para viver essa experiência?";
  const ctaDescription =
    "Entre em contato com nossa equipe via WhatsApp para tirar dúvidas,consultar disponibilidade e garantir a melhor tarifa para a sua estadia.";
  const ctaButtonText = "Falar com Atendimento";

  return (
    <>
      <Hero />
      <History />
      <Differentials />
      <Spaces />
      <Cta
        title={ctaTitle}
        description={ctaDescription}
        buttonText={ctaButtonText}
      />
    </>
  );
}
