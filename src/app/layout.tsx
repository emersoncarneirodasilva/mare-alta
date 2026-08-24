import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "sonner";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Maré Alta Hotel & Suítes | Ponta Negra, Natal - RN",
    template: "%s | Maré Alta Hotel",
  },
  description:
    "Descubra o conforto, acolhimento e uma localização privilegiada em Ponta Negra, Natal. Desfrute de suítes sofisticadas e viva o melhor da Cidade do Sol.",
  keywords: [
    "hotel em natal",
    "ponta negra",
    "maré alta hotel",
    "hospedagem em natal",
    "hotel rio grande do norte",
    "suites em ponta negra",
  ],
  authors: [{ name: "Emerson Carneiro da Silva" }],
  creator: "Emerson Carneiro da Silva",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
