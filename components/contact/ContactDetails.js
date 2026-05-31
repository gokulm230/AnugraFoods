import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactDetails() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          <div className="text-center">
            <Mail className="mx-auto text-primary" />
            <h3 className="font-bold mt-4">
              Email
            </h3>
            <p className="text-gray-600 mt-2">
              anugrafoodproducts@gmail.com
            </p>
          </div>

          <div className="text-center">
            <Phone className="mx-auto text-primary" />
            <h3 className="font-bold mt-4">
              Phone
            </h3>
            <p className="text-gray-600 mt-2">
              +91 86675 91396
            </p>
          </div>

          <div className="text-center">
            <MapPin className="mx-auto text-primary" />
            <h3 className="font-bold mt-4">
              Location
            </h3>
            <p className="text-gray-600 mt-2">
              Sivakasi, Tamil Nadu
            </p>
          </div>

          <div className="text-center">
            <Clock className="mx-auto text-primary" />
            <h3 className="font-bold mt-4">
              Business Hours
            </h3>
            <p className="text-gray-600 mt-2">
              Mon - Sat
              <br />
              9 AM - 6 PM
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}