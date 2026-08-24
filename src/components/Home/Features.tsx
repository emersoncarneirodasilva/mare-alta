import { MapPin, Coffee, Wifi, Car } from "lucide-react";

const FEATURES_LIST = [
  {
    icon: MapPin,
    title: "Localização privilegiada",
  },
  {
    icon: Coffee,
    title: "Café da manhã",
  },
  {
    icon: Wifi,
    title: "Wi-Fi gratuito",
  },
  {
    icon: Car,
    title: "Estacionamento",
  },
];

export default function Features() {
  return (
    <section className="py-12 lg:py-20 bg-background-alt border-b border-text-muted/10">
      <div className="wrapper">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {FEATURES_LIST.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Caixa do Ícone */}
                <div className="w-16 h-16 rounded-2xl bg-background-card border border-text-muted/15 flex items-center justify-center text-primary shadow-sm group-hover:scale-105 group-hover:border-primary/40 transition-all duration-300 mb-4">
                  <IconComponent className="w-7 h-7 stroke-[1.75]" />
                </div>

                {/* Título */}
                <h3 className="font-sans font-medium text-text-main text-sm md:text-base tracking-wide">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
