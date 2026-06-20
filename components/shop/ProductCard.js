import { generateWhatsAppLink } from "@/utils/whatsapp";
export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition">
      <div className="h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">
        <span className="text-sm text-primary font-medium">
          {product.category}
        </span>

        <h3 className="text-xl font-bold mt-2">{product.name}</h3>

        <p className="text-gray-500 text-sm mt-1">{product.tamilName}</p>

        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-2xl font-bold">₹{product.price}</p>

            <p className="text-sm text-gray-500">{product.weight}</p>
          </div>

          <a
            href={generateWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cta text-white px-5 py-3 rounded-xl hover:opacity-90 transition"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
