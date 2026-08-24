"use client";

import { Send } from "lucide-react";
import { useContactForm } from "@/src/hooks/useContactForm";

export default function ContactForm() {
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <div className="lg:col-span-7 bg-background rounded-3xl p-8 sm:p-12 shadow-xl border border-border/20 flex flex-col justify-between">
      <div className="mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-text-main">
          Envie uma mensagem
        </h3>
        <p className="text-text-muted text-sm font-light">
          Preencha os campos abaixo para iniciar o atendimento direto com nossa
          equipe via WhatsApp.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
              Nome Completo
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Seu nome"
              className="w-full bg-background-alt border border-border/40 rounded-xl px-4 py-3 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-secondary transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
              Telefone / WhatsApp
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(00) 00000-0000"
              className="w-full bg-background-alt border border-border/40 rounded-xl px-4 py-3 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-secondary transition-colors text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className="w-full bg-background-alt border border-border/40 rounded-xl px-4 py-3 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-secondary transition-colors text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
            Assunto
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Como podemos ajudar?"
            className="w-full bg-background-alt border border-border/40 rounded-xl px-4 py-3 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-secondary transition-colors text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
            Sua Mensagem
          </label>
          <textarea
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Escreva os detalhes da sua solicitação aqui..."
            className="w-full bg-background-alt border border-border/40 rounded-xl px-4 py-3 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-secondary transition-colors text-sm resize-none"
          />
        </div>

        <button
          type="submit"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-medium hover:opacity-95 transition-opacity shadow-md text-sm tracking-wide cursor-pointer mt-2"
        >
          Enviar para o WhatsApp
          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
}
