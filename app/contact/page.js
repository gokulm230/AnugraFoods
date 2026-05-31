import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import WhatsAppCTA from "@/components/contact/WhatsAppCTA";
import ContactDetails from "@/components/contact/ContactDetails";
import RetailerSection from "@/components/contact/RetailerSection";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <WhatsAppCTA />
      {/* <ContactDetails /> */}
      <RetailerSection />
    </>
  );
}