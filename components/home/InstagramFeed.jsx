import { Camera } from "lucide-react";

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Camera size={48} className="mx-auto text-primary" />

          <h2 className="text-4xl font-bold mt-4">Follow Us On Instagram</h2>

          <p className="text-gray-600 mt-4">
            Stay updated with new products, recipes, and special offers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center"
            >
              Post {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
