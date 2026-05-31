import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppCTA() {
  return (
    <section className="py-12 bg-green-50">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <FaWhatsapp
          size={60}
          className="mx-auto text-green-600"
        />

        <h2 className="text-3xl font-bold mt-6">
          Need Quick Assistance?
        </h2>

        <p className="text-gray-600 mt-4">
          Chat with us directly on WhatsApp.
        </p>

        <a
          href="https://wa.me/918667591396"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-green-600 text-white px-8 py-4 rounded-xl"
        >
          Chat With Us On WhatsApp
        </a>

      </div>
    </section>
  );
}