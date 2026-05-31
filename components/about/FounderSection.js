export default function FounderSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <img
              src="/images/founder.jpg"
              alt="Founder"
              className="rounded-3xl w-full"
            />
          </div>

          <div>

            <span className="text-primary uppercase font-semibold">
              Founder
            </span>

            <h2 className="text-4xl text-gray-900 font-bold mt-4">
              Rajeswari
            </h2>

            <p className="text-lg text-gray-500 mt-2">
            Based in Sivakasi
            </p>

            <p className="text-gray-600 mt-6 leading-relaxed">
              A home cook, a mother, and the heart behind every
              Anugra product. Her passion for authentic,
              preservative-free food inspired the creation of
              Anugra Food Products.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}