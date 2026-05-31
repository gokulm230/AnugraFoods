import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      review:
        "I ordered the Maasi Meen Thokku and I was blown away! It tastes exactly like my grandmother used to make.",
      name: "Priya S.",
      location: "Chennai",
    },
    {
      review:
        "Anugra's Mudavaatu Kilangu Rice Mix has been a lifesaver — quick to prepare, delicious, and genuinely healthy.",
      name: "Karthik R.",
      location: "Coimbatore",
    },
    {
      review:
        "The quality is excellent and the packaging is neat and professional. Highly recommended for retailers.",
      name: "Suresh M.",
      location: "Madurai",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase">
            Testimonials
          </span>

          <h2 className="text-4xl text-gray-900 md:text-5xl font-bold mt-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm"
            >
              <Quote className="text-primary mb-4" />

              <p className="text-gray-600 leading-relaxed">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-sm text-gray-500">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}