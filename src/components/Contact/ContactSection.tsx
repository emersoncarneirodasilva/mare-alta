import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="py-24 lg:py-32 bg-background-alt overflow-hidden">
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <ContactInfoCard />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
