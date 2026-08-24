import { Navigation } from "lucide-react";

export default function Location() {
  // Coordenadas aproximadas de Ponta Negra, Natal - RN (ou você pode trocar pelo embed do link do seu endereço exato)
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.066497237035!2d-35.1785536!3d-5.8753235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b300344485303f%3A0x6b77242a353d9e48!2sPonta%20Negra%2C%20Natal%2C%20RN!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr";

  // Link para direções (botão "Como chegar")
  const directionsUrl = "https://maps.google.com/?q=Ponta+Negra+Natal+RN";

  return (
    <section
      id="localizacao"
      className="py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção com Título e Botão */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary block mb-3">
              Localização Privilegiada
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-3 font-serif">
              Onde estamos
            </h2>
            <p className="text-text-muted text-sm sm:text-base font-light max-w-xl">
              Localizado a poucos passos da praia, oferecemos o refúgio perfeito
              na costa de Natal.
            </p>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-background-alt border border-border/40 text-text-main px-6 py-3 rounded-xl font-medium hover:border-secondary hover:text-secondary transition-all shadow-sm text-sm tracking-wide cursor-pointer w-fit"
          >
            <Navigation className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            Como chegar
          </a>
        </div>

        {/* Bloco do Mapa */}
        <div className="w-full h-100 sm:h-120 lg:h-130 relative rounded-3xl overflow-hidden shadow-xl border border-border/20">
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Maré Alta Hotel no Google Maps"
            className="w-full h-full grayscale-20 contrast-105"
          />
        </div>
      </div>
    </section>
  );
}
