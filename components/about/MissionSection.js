import { Target } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <Target
          size={60}
          className="mx-auto text-[#1B6CA8]"
        />

        <h2 className="text-4xl font-bold mt-8">
          Our Mission
        </h2>

        <p className="text-xl text-gray-600 mt-8 leading-relaxed">
          To bring the authentic taste of homemade,
          preservative-free organic food to every household,
          hostel, and workplace.
        </p>

      </div>
    </section>
  );
}