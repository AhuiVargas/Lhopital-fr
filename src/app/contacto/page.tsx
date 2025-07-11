import HeroContainer from "@/components/HeroContainer";
import ContactForm from "@/components/ContactForm";

export default function ContactoPage() {
  return (
    <>
      <HeroContainer
        title="Contáctanos"
        imageSrc="/banners/nosotros.png"
      >
        <p className="text-lg leading-relaxed">
          Estamos aquí para ayudarte. Completa el siguiente formulario y uno de
          nuestros especialistas te contactará a la brevedad.
        </p>
      </HeroContainer>

      <section className="bg-white px-6 py-20">
        <ContactForm />
      </section>
    </>
  );
}
