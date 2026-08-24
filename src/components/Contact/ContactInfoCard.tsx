import Image from "next/image";
import { MapPin, Mail, MessageSquare } from "lucide-react";
import receptionImg from "@/public/images/contact-image.webp";

export default function ContactInfoCard() {
  const phoneNumber = process.env.PHONE_NUMBER || "+55 (84) 99999-9999";

  return (
    <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
      {/* Imagem de Destaque / Recepção */}
      <div className="w-full h-80 sm:h-96 lg:h-[55%] relative rounded-3xl overflow-hidden shadow-lg border border-border/20">
        <Image
          src={receptionImg}
          alt="Recepção do Maré Alta Hotel"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-center hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Informações de Contato */}
      <div className="bg-background rounded-3xl p-6 sm:p-8 shadow-lg border border-border/20 flex flex-col justify-between lg:h-[43%]">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary block mb-3">
          Informações de Contato
        </span>

        <div className="space-y-3">
          {/* Localização */}
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0 shadow-inner">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-semibold font-sans text-text-main text-xs sm:text-sm mb-0.5">
                Localização
              </h4>
              <p className="text-text-muted text-xs font-light">
                Natal, Rio Grande do Norte, Brasil
              </p>
            </div>
          </div>

          {/* E-mail */}
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0 shadow-inner">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-semibold font-sans text-text-main text-xs sm:text-sm mb-0.5">
                E-mail
              </h4>
              <p className="text-text-muted text-xs font-light">
                reservas@marealta.com
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0 shadow-inner">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-semibold font-sans text-text-main text-xs sm:text-sm mb-0.5">
                WhatsApp
              </h4>
              <p className="text-text-muted text-xs font-light">
                {phoneNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
