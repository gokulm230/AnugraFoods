import {
  ShoppingBag,
  PackageCheck,
  Truck,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <ShoppingBag size={48} />,
      title: "Browse & Order",
      description:
        "Explore our range of authentic seafood and organic products and place your order in just a few clicks.",
    },
    {
      icon: <PackageCheck size={48} />,
      title: "Carefully Packed",
      description:
        "Every order is packed with care to preserve freshness and flavour, ready for its journey to you.",
    },
    {
      icon: <Truck size={48} />,
      title: "Delivered Fresh",
      description:
        "We deliver across Tamil Nadu and neighbouring states within 4–5 business days.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-semibold uppercase tracking-wider">
            How It Works
          </span>

          <h2 className="text-4xl text-gray-900 md:text-5xl font-bold mt-4">
            From Our Kitchen
            <br />
            To Your Doorstep
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5">
            Ordering your favourite Anugra products is simple,
            quick, and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center bg-gray-50 p-10 rounded-3xl"
            >

              {/* Step Number */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div className="text-primary flex justify-center mb-6 mt-4">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}