import {
  Leaf,
  ShieldCheck,
  CookingPot,
  HeartHandshake,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Leaf size={40} />,
      title: "100% Organic Ingredients",
      description:
        "Every product is made from carefully sourced natural and organic ingredients. No shortcuts. No compromises.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "No Preservatives",
      description:
        "Pure food the way nature intended. No artificial colours, preservatives, or harmful additives.",
    },
    {
      icon: <CookingPot size={40} />,
      title: "Traditional Family Recipes",
      description:
        "Rooted in the rich culinary heritage of coastal Tamil Nadu and passed down through generations.",
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "An Unforgettable Taste",
      description:
        "Authentic flavours crafted with care. Once you taste Anugra, you'll always remember it.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider">
            Why Anugra?
          </span>

          <h2 className="text-4xl text-gray-900 md:text-5xl font-bold mt-4">
            Crafted With Purity,
            <br />
            Loved By Families
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-5">
            We combine traditional Tamil recipes with premium organic
            ingredients to create products that are healthy,
            flavourful, and truly authentic.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-3xl bg-gray-50 hover:bg-primary transition-all duration-300"
            >
              <div className="text-primary group-hover:text-white mb-6 transition">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-white">
                {feature.title}
              </h3>

              <p className="text-gray-600 group-hover:text-gray-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}