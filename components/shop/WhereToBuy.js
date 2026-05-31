export default function WhereToBuy() {
  const platforms = [
    {
      name: "This Website",
      desc: "Shop directly from us",
    },
    {
      name: "Amazon",
      desc: "Available soon",
    },
    {
      name: "Flipkart",
      desc: "Available soon",
    },
    {
      name: "Etsy",
      desc: "International orders",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Where To Buy
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="border rounded-2xl p-8 text-center"
            >
              <h3 className="font-bold text-xl">
                {platform.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {platform.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}