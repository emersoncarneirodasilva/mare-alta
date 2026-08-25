# 🌊 Maré Alta Hotel & Suítes

> Site institucional moderno, responsivo e de alta performance desenvolvido para o **Maré Alta Hotel**, localizado na charmosa região de Ponta Negra, em Natal (RN). 

---

## ✨ Sobre o Projeto

O **Maré Alta** foi planejado para oferecer uma experiência digital acolhedora e sofisticada aos futuros hóspedes. O projeto destaca a localização privilegiada na "Cidade do Sol", apresenta comodidades exclusivas, acomodações detalhadas e facilita o canal direto de reservas e dúvidas através de integração fluida com o WhatsApp.

Construído com uma arquitetura moderna focada em velocidade, o site utiliza exportação estática, permitindo hospedagem ultra rápida e segura em provedores de nuvem como o Cloudflare Pages.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com uma stack moderna e atualizada:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router com suporte a exportação estática)
- **Biblioteca UI:** [React 19](https://react.dev/)
- **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/) via PostCSS
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Notificações:** [Sonner](https://sonner.emilkowal.ski/)
- **Tipografia:** `next/font` (`Playfair Display` e `Inter`)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)

---

## 🗺️ Estrutura de Rotas

| Rota | Descrição |
| :--- | :--- |
| `🏠 /` | Página inicial (Hero, diferenciais, destaques e atrações) |
| `🏨 /o-hotel` | História, diferenciais e espaços do hotel |
| `🛏️ /acomodacoes` | Catálogo de apartamentos (Individual, Duplo, Familiar e Master) |
| `✨ /comodidades` | Serviços, lazer e comodidades disponíveis |
| `📞 /contato` | Canais de atendimento, mapa de localização e formulário |
| `🔒 /privacidade` | Política de privacidade |
| `📄 /termos` | Termos de uso do serviço |

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto baseando-se no exemplo abaixo. *Todas as variáveis são opcionais*, pois a aplicação conta com mecanismos de fallback inteligentes:

```env
NEXT_PUBLIC_WEATHER_API_KEY=sua-chave-weatherapi
NEXT_PUBLIC_WHATSAPP_NUMBER=558499999999
NEXT_PUBLIC_PHONE_NUMBER=+55 (84) 99999-9999
