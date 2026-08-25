"use client";

import { useState } from "react";
import { toast } from "sonner";

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const whatsappNumber =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+558499999999";

    const text =
      `*Nova mensagem pelo Site - Maré Alta Hotel*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Assunto:* ${formData.subject}\n\n` +
      `*Mensagem:*\n${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    toast.success("Mensagem pronta!", {
      description: "Redirecionando para o WhatsApp do hotel...",
    });

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}
