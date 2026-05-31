import {
  Truck,
  PackageCheck,
  Store,
} from "lucide-react";

export default function ShippingNotice() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="flex items-center gap-4">
            <Truck />
            <span>
              Orders dispatched within 24–48 hours
            </span>
          </div>

          <div className="flex items-center gap-4">
            <PackageCheck />
            <span>
              Fresh stock available
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Store />
            <span>
              Bulk orders available
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}