import { Metadata } from "next";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Features from "../components/Home/Features";
import Accommodations from "../components/Home/Accommodations";
import Explore from "../components/Home/Explore";
import CtaSection from "../components/Cta";

export const metadata: Metadata = {
  title: "Maré Alta Hotel & Suítes | Ponta Negra, Natal - RN",
  description:
    "Bem-vindo ao Maré Alta Hotel. Desfrute de suítes aconchegantes, excelente localização em Ponta Negra e momentos inesquecíveis em Natal.",
  openGraph: {
    title: "Maré Alta Hotel & Suítes | Ponta Negra, Natal - RN",
    description:
      "Descubra o conforto, acolhimento e uma localização privilegiada em Ponta Negra, Natal.",
    url: "https://mare-alta.pages.dev",
    siteName: "Maré Alta Hotel",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Home() {
  const ctaTitle = "Pronto para conhecer Natal?";
  const ctaDescription =
    "Garanta sua reserva com condições exclusivas e comece a planejar sua estadia conosco.";
  const ctaButtonText = "Falar no WhatsApp";

  return (
    <>
      <Hero />
      <About />
      <Features />
      <Accommodations />
      <Explore />
      <CtaSection
        title={ctaTitle}
        description={ctaDescription}
        buttonText={ctaButtonText}
      />
    </>
  );
}
