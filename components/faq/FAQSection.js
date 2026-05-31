import faqData from "@/data/faqData";
import FAQAccordion from "./FAQAccordion";

export default function FAQSection() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        {faqData.map((group) => (
          <div
            key={group.category}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">
              {group.category}
            </h2>

            <div className="space-y-4">
              {group.faqs.map((faq) => (
                <FAQAccordion
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}