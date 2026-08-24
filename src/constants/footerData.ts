import { Share2, Camera, Send } from "lucide-react";

export const FOOTER_NAVIGATION = {
  hotel: [
    { label: "O Hotel", href: "/o-hotel" },
    { label: "Acomodações", href: "/acomodacoes" },
    { label: "Galeria", href: "/o-hotel#galeria" },
  ],
  information: [
    { label: "Localização", href: "/contato#localizacao" },
    { label: "Comodidades", href: "/comodidades" },
    { label: "Políticas", href: "/privacidade" },
  ],
  support: [{ label: "Contato", href: "/contato" }],
};

export const SOCIAL_LINKS = [
  { icon: Share2, label: "Compartilhar", href: "#" },
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: Send, label: "Telegram", href: "#" },
];
