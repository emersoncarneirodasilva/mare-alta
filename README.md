# 🌊 Maré Alta Hotel & Suítes

Site institucional moderno, responsivo e otimizado para apresentar a experiência de hospedagem do **Maré Alta Hotel**, localizado na charmosa região de Ponta Negra, em Natal/RN (Projeto Conceitual / Portfólio).

Desenvolvido com Next.js, o projeto foi pensado para transmitir sofisticação, conforto e acolhimento, proporcionando uma excelente experiência digital ao usuário e incentivando o contato e simulações de reservas.

---

## ✨ Visão Geral

O objetivo do projeto é oferecer uma presença digital profissional e imersiva para o setor hoteleiro, permitindo que potenciais hóspedes conheçam as acomodações, explorem as comodidades, verifiquem o clima em tempo real da "Cidade do Sol" e iniciem o contato de forma simples através do WhatsApp.

O site foi desenvolvido com foco em:
- 🏨 Apresentação institucional do hotel;
- 🛏️ Divulgação detalhada das suítes e apartamentos;
- ✨ Exibição de serviços e comodidades exclusivas;
- 🌡️ Integração dinâmica com o clima atual de Natal;
- 📱 Conversão de visitantes em clientes/leads;
- ⚡ Excelente desempenho, carregamento rápido e exportação estática.

---

## 🚀 Funcionalidades

- 📱 Layout totalmente responsivo para dispositivos móveis e desktops;
- 🌙 Alternância de Tema Claro/Escuro;
- 🧭 Navegação intuitiva entre as seções e páginas;
- ☀️ **Widget de Clima Dinâmico:** Consulta em tempo real via WeatherAPI isolada no lado do cliente (`useEffect`), atualizando com um simples `F5`;
- 🛏️ Catálogo de acomodações (Individual, Duplo, Familiar e Master);
- 📞 Formulário e botões de ação integrados diretamente ao WhatsApp;
- 🔔 Notificações e toasts interativos utilizando Sonner;
- ⚡ Exportação estática otimizada para hospedagem em nuvem de alta performance.

---

## 🛠️ Stack Tecnológica

- ⚛️ **Next.js 16** (App Router)
- ⚛️ **React 19**
- 🔷 **TypeScript**
- 🎨 **Tailwind CSS 4**
- ✨ **Lucide React** (Ícones)
- 🔔 **Sonner** (Notificações)
- 🔤 **`next/font`** (`Playfair Display` e `Inter`)

---

## 📄 Estrutura das Páginas

### 🏠 Home
Apresenta o hotel e reúne as principais informações de boas-vindas:
- Hero Section com imagem de alta definição;
- Badge interativo de clima em tempo real em Natal;
- Diferenciais e localização privilegiada;
- Destaques de acomodações e atrativos locais.

### 🏨 O Hotel
Página dedicada à história, diferenciais e à atmosfera de descanso e sofisticação oferecida aos hóspedes.

### 🛏️ Acomodacoes
Catálogo completo com as opções de hospedagem disponíveis (Individual, Duplo, Familiar e Suíte Master Maré Alta).

### ✨ Comodidades
Apresentação detalhada dos serviços, áreas de lazer e comodidades exclusivas do estabelecimento.

### 📞 Contato
Permite que o visitante entre em contato rapidamente através de:
- Canais oficiais de atendimento;
- Mapa de localização em Ponta Negra;
- Canal direto para dúvidas e reservas.

### 📑 Páginas Institucionais
O projeto também conta com páginas complementares:
- Política de Privacidade;
- Termos de Uso.

---

## 🎯 Principais Funcionalidades

### 🧭 Navegação
O Header fixo e responsivo permite acesso rápido a todas as páginas do site.

### ☀️ Indicador de Clima Inteligente
Utiliza um componente de cliente isolado (`WeatherBadge`) para buscar as condições meteorológicas e térmicas de Natal sob demanda. O restante do site permanece totalmente estático e veloz.

### 📲 Botões de Ação (CTAs)
Direcionam o visitante para a página de acomodações ou iniciam uma conversa pré-formatada no WhatsApp do hotel.

---

## 🗂️ Estrutura do Projeto

```text
src/
├── app/               # Rotas do App Router e layouts globais
├── components/        # Componentes reutilizáveis (ex: WeatherBadge)
├── constants/         # Conteúdo estático e traduções do site
├── hooks/             # Hooks personalizados (tema, menus, etc.)
└── services/          # Integrações externas (consumo da WeatherAPI)

public/
└── images/            # Imagens institucionais e identidade visual
