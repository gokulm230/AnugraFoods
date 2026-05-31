import {
  ShieldCheck,
  Heart,
  Leaf,
  Users,
} from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: <Heart size={40} />,
      title: "Authenticity",
      desc: "Traditional Tamil recipes and flavours.",
    },
    {
      icon: <Leaf size={40} />,
      title: "Purity",
      desc: "100% organic ingredients with no preservatives.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Nourishment",
      desc: "Food that heals, energises and satisfies.",
    },
    {
      icon: <Users size={40} />,
      title: "Accessibility",
      desc: "Healthy food for families, students and professionals.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 font-bold">
            Our Values
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((value) => (
            <div
              key={value.title}
              className="bg-gray-50 p-8 rounded-3xl"
            >
              <div className="text-[#1B6CA8] mb-6">
                {value.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {value.title}
              </h3>

              <p className="text-gray-600">
                {value.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}